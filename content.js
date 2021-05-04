// send test message of the extension to the engine?
window.postMessage({type: 'fusion-extension'})

window.addEventListener("message", (event) => {
  console.log('event listener added in content.js')
  console.log('incoming event', event)
  if (event.data.type === 'engine-msg'){
    console.log('received message from engine', event.data)
  }
}, false);

// send message and save
//   chrome.runtime.sendMessage({ data: arcSite, type: 'ARC_SITE' })


// // on window load
// window.onload = (event) => {
//   // get the event's scripts
//   // hacky for now, but it's the next script after fusion-template
//   // console.log(event.target.scripts[13], 'target fusion obj', typeof event.target.scripts[13])
//   // script#fusion-template-script
//   // nextSibling 

//   // console.log(event.target.scripts, 'scripts', typeof event.target.scripts)

//   // const arrayScripts = Array.from(event.target.scripts)
//   // const targetScript = arrayScripts.map(potentialTarget => console.log(potentialTarget))
//   // console.log(event.target.scripts[13], 'script')
//   const targetText = event.target.scripts[13].innerText;

//   console.log(targetText, 'target text')

//   const targetTextSplit = targetText.split(';')

//   console.log(targetTextSplit, 'split')

//   const arcSite = targetTextSplit[1];
//   // const myRegexp = /Fusion.arcSite\="(.*)?(?=")/;
//   // const match = myRegexp.exec(targetText);
//   // // get the group match
//   // const arcSite = match[1]

//   chrome.runtime.sendMessage({ data: arcSite, type: 'ARC_SITE' })

//   // get the inner text of the script
//   // chrome.runtime.sendMessage(event.target.scripts[13].innerText, (response) => {
//   //   // sends back that the fusion template was received
//   //   console.log(response)
//   // });
// }
