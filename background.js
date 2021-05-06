// potential todo: 
// enable background
// inject the content script based on receiving a message from fusion 
// https://developer.chrome.com/docs/extensions/mv3/content_scripts/#programmatic
/*
  "permissions": [
    "tabs",
    "activeTab",
    "scripting",
    "storage"
  ],
  "background": {
    "service_worker": "background.js"
  },

  can remove: 

    "content_scripts": [
    {
      "matches": ["https://corecomponents.arcpublishing.com/*", "http://localhost/*"],
      "js": ["content.js"]
    }
  ]

  */

// chrome.runtime.onMessage.addListener((message, _callback) => {
//   if (message == "start-fusion-listening"){
//     chrome.scripting.executeScript({
//       file: 'content.js'
//     });
//   }
// });
