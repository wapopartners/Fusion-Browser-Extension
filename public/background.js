var globalState = {};

chrome.runtime.onMessage.addListener((message, _callback, sendResponse) => {
  if (message?.type === "big-data-save") {
    globalState = { ...globalState, ...message.data }
    console.log('incoming message from injected content', message)
    sendResponse('got it')
  }

  if (message?.type === 'from-popup') {
    console.log('incoming message from popup', message)
    sendResponse(globalState)
  }
});
