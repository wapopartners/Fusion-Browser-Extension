// send test message of the extension to the engine?
window.postMessage({type: 'fusion-extension'})

window.addEventListener("message", (event) => {
  console.log('event listener added in content.js')
  if (event.data.type === 'engine-msg'){
    console.log('received message from engine', event.data)

    const arcSite = event.data?.globalContent.website;
    // set arcSite value
    chrome.storage.sync.set({ arcSite: arcSite });
  }
}, false);
