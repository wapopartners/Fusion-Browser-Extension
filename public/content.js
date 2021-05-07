/* eslint-disable no-undef */
// send test message of the extension to the engine?
window.postMessage({ type: 'fusion-extension' });

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
      // console.log(`${key} is too big: ${JSON.stringify(value)}`);
      chrome.runtime.sendMessage({ data: entry, type: 'big-data-save' }, function (response) {
        console.log('sent message', response)
        // console.log(response, 'response');
      });
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

  chrome.storage.sync.set({ outputType });
  chrome.storage.sync.set({ deployment });
  chrome.storage.sync.set({ arcSite });
  chrome.storage.sync.set({ spaEnabled });

  saveKeyValueEntryArray(globalContentConfig);
  saveKeyValueEntryArray(globalContent);
  saveKeyValueEntryArray(tree);
  saveKeyValueEntryArray(siteProperties);
  saveKeyValueEntryArray(contentCache);
  saveKeyValueEntryArray(environment)
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
