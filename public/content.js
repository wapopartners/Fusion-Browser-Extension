/* eslint-disable no-undef */
// send test message of the extension to the engine?
window.postMessage({ type: 'fusion-extension' });

function sendAndSaveObject(objectToSave) {
  chrome.runtime.sendMessage({ data: objectToSave, type: 'big-data-save' });
}

// input object with keys and values
// saves each key and value individually to storage
// checks which one is too big for extension limit
function saveKeyValueEntryArray(objectToSave) {
  Object.entries(objectToSave).forEach((entry) => {
    const [key, value] = entry;

    if (
      JSON.stringify(value).length >= chrome.storage.sync.QUOTA_BYTES_PER_ITEM
    ) {
      sendAndSaveObject({ [key]: value });
    } else {
      chrome.storage.sync.set({ [key]: value });
    }
  });
}

function saveFusionData(fusionData) {
  const {
    globalContent,
    globalContentConfig,
    outputType,
    tree,
    deployment,
    spaEnabled,
    environment,
    arcSite,
    siteProperties,
    contentCache,
  } = fusionData;

  chrome.storage.sync.set({ outputType });
  chrome.storage.sync.set({ deployment });
  chrome.storage.sync.set({ arcSite });
  chrome.storage.sync.set({ spaEnabled });

  saveKeyValueEntryArray(globalContentConfig);
  saveKeyValueEntryArray(tree);
  saveKeyValueEntryArray(siteProperties);
  saveKeyValueEntryArray(environment);

  // content cache, even separated by key, is too big to save with item quota
  // also, these keys could have any values pretty much
  // we can destructure them in the table if necessary
  sendAndSaveObject({ contentCache });
  sendAndSaveObject({ globalContent });
}

chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  const url = tabs[0].url;
  if (url.indexOf('localhost') > -1) {
    let receivedData = false;
    setTimeout(() => {
      if (!receivedData) {
        console.log('Fusion Browser Extension: Did not receive data');
      }
    }, 1000);
  }
});

const processFusionEvent = (event) => {
  // todo: this seems to be re-running multiple times in console
  // console.log('event listener added in content.js')
  if (event.data.type === 'engine-msg') {
    chrome.storage.sync.set({ data: true });
    saveFusionData(event.data);
  }
};

window.addEventListener('message', (event) => processFusionEvent(event));
