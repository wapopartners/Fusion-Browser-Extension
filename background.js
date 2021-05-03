chrome.action.onClicked.addListener((tab) => {
  // https://developer.chrome.com/docs/extensions/reference/action/#event-onClicked
  // will not fire if the action has a default popup in manifest.json

  // enable scripting in manifest permissions
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    // currently only one file allowed
    files: ['inject.js']
  });
});