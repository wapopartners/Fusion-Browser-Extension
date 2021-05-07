var globalState = {};

chrome.runtime.onMessage.addListener((message, _callback, sendResponse) => {
  if (message?.type === "big-data-save") {
    globalState = { ...globalState, ...message.data }
  }

  if (message?.type === 'from-popup') {
    sendResponse({ data: globalState, type: 'big-data-message-from-sw' })
  }
});
