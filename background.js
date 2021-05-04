chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  console.log('received message', message)

  sendResponse('got the message ty content.js')
});