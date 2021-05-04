// on window load
window.onload = (event) => {
  // get the event's scripts
  // hacky for now, but it's the next script after fusion-template
  // console.log(event.target.scripts[13], 'target fusion obj', typeof event.target.scripts[13])

  // get the inner text of the script
  chrome.runtime.sendMessage(event.target.scripts[13].innerText, (response) => {
    // sends back that the fusion template was received
    console.log(response)
  });
}
