chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  console.log('received message', message)

  if (message.type === 'ARC_SITE') {
    chrome.storage.sync.set({ arcSite: message.data }, function(result) {
      console.log('set to ', result);
    });
  }
});