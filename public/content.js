/* eslint-disable no-undef */
// send test message of the extension to the engine?
window.postMessage({ type: 'fusion-extension' });

const cleanVariable = (fusionVar) => {
  if (fusionVar.indexOf('{') > 0) {
    return fusionVar;
  }
  return fusionVar.replace(/[^0-9a-z-///]/g, '');
};

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
    template,
    lastModified,
    outputType,
    tree,
    deployment,
    spaEnabled,
    environment,
    arcSite,
    siteProperties,
    contentCache,
  } = fusionData;

  console.log('Saving Fusion data...');
  chrome.storage.sync.set({ arcSite });
  chrome.storage.sync.set({ outputType });
  chrome.storage.sync.set({ deployment });
  chrome.storage.sync.set({ spaEnabled });
  chrome.storage.sync.set({ lastModified });
  chrome.storage.sync.set({ template });

  saveKeyValueEntryArray(globalContentConfig);
  // saveKeyValueEntryArray(tree);
  // saveKeyValueEntryArray(siteProperties);
  // saveKeyValueEntryArray(environment);

  // content cache, even separated by key, is too big to save with item quota
  // also, these keys could have any values pretty much
  // we can destructure them in the table if necessary
  // sendAndSaveObject({ contentCache });
  // sendAndSaveObject({ globalContent });
}

window.addEventListener(
  'message',
  (event) => {
    // todo: this seems to be re-running multiple times in console
    // console.log('event listener added in content.js')
    if (event.data.type === 'engine-msg') {
      saveFusionData(event.data);
    }
  },
  false
);

function getFusionMetadata() {
  const metadata = document.querySelector('#fusion-metadata').innerHTML;
  const metadataArr = metadata.split(';');
  const results = {};

  metadataArr.forEach((key) => {
    const valueArray = key.split(/[.=]+/);
    const fusionKey = valueArray[1];
    const fusionValue = valueArray[2];
    const isLargeObject =
      fusionKey === 'tree' ||
      fusionKey === 'contentCache' ||
      fusionKey === 'globalContent' ||
      fusionKey === 'globalContentConfig';
    if (isLargeObject) {
      const content = key.split(`${fusionKey}=`);
      // results[fusionKey] = content[1];
    } else {
      if (fusionKey && fusionValue) {
        results[fusionKey] = cleanVariable(fusionValue);
      }
    }
  });
  console.log(results);
  saveFusionData(results);
}

getFusionMetadata();
