/* eslint-disable no-undef */
(function() {
  // via https://www.reddit.com/r/learnjavascript/comments/7sbiyh/listener_for_chrometabsonactivated_never_called/dt3vyr6/?utm_source=reddit&utm_medium=web2x&context=3
  this.currentTabId = undefined;
  
  var globalState = {};

  chrome.runtime.onMessage.addListener((message, _callback, sendResponse) => {
    if (message?.type === "big-data-save") {
      globalState = { ...globalState, ...message.data }
    }

    if (message?.type === 'from-popup') {
      sendResponse({ data: globalState, type: 'big-data-message-from-sw' })
    }
  });

  // https://developer.chrome.com/docs/extensions/reference/tabs/#event-onActivated
  chrome.tabs.onActivated.addListener(({ tabId }) => {
    if (tabId !== this.currentTabId) {
      // set this for listening again
      this.currentTabId = tabId;

      chrome.storage.sync.clear();

      // set the new current popup
      chrome.action.setPopup({ popup: 'refresh-page.html', tabId })
    }
  });
})();