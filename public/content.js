/* eslint-disable no-undef */

// Notify engine to send message
setTimeout(() => {
  console.log('sending message to engine');
  window.postMessage({ type: 'fusion-extension' });
}, 2000);

// input object with keys and values
// saves each key and value individually to storage
// checks which one is too big for extension limit
function saveKeyValueEntryArray(objectToSave) {
  // keeping track of what's not saved
  // const allSavedKeys = [];

  Object.entries(objectToSave).forEach((entry) => {
    const [key, value] = entry;

    if (
      JSON.stringify(value).length >= chrome.storage.sync.QUOTA_BYTES_PER_ITEM
    ) {
      // todo: may want to pass these back in a save as nested?
      console.log(`${key} is too big: ${JSON.stringify(value)}`);
    } else {
      chrome.storage.sync.set({ [key]: value });
      // allSavedKeys.push(key)
    }
  });

  // console.log(allSavedKeys, 'all saved keys')
}

function saveFusionData(fusionData) {
  console.log('received message from engine', fusionData);

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
  console.log('setting storage');
  chrome.storage.sync.set({ outputType });
  chrome.storage.sync.set({ deployment });
  chrome.storage.sync.set({ blockDistTag: environment.BLOCK_DIST_TAG });
  chrome.storage.sync.set({ cssDistTag: environment.CSS_DIST_TAG });
  chrome.storage.sync.set({
    engineSdkDistTag: environment.ENGINE_SDK_DIST_TAG,
  });
  chrome.storage.sync.set({ fusionRelease: environment.FUSION_RELEASE });
  chrome.storage.sync.set({ environment: environment.ENVIRONMENT });
  chrome.storage.sync.set({ arcSite });
  chrome.storage.sync.set({ spaEnabled });
  chrome.storage.sync.set({ resizerURL: environment.resizerURL });

  saveKeyValueEntryArray(globalContentConfig);
  saveKeyValueEntryArray(globalContent);
  saveKeyValueEntryArray(tree);
  saveKeyValueEntryArray(siteProperties);
  saveKeyValueEntryArray(contentCache);
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

chrome.windows.onFocusChanged.addListener(function (window) {
  //handle close event
  console.log('close event');
});

chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  chrome.storage.sync.clear();
});
