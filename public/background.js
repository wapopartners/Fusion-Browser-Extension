// via https://www.reddit.com/r/learnjavascript/comments/7sbiyh/listener_for_chrometabsonactivated_never_called/dt3vyr6/?utm_source=reddit&utm_medium=web2x&context=3
(function() {
  this.currentTabId = undefined;

  // https://developer.chrome.com/docs/extensions/reference/tabs/#event-onActivated
  chrome.tabs.onActivated.addListener(({ tabId }) => {
    if (tabId !== this.currentTabId) {
      // set this for listening again
      this.currentTabId = tabId;

      // clear storage on tab change
      chrome.storage.sync.clear();

      // set the new current popup
      chrome.action.setPopup({ popup: 'refresh-page.html', tabId })
    }
  });
})();
