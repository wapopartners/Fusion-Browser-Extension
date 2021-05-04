const fusionDataBlock = document.getElementById('fusion-data')

function showFusionData() {
  chrome.storage.sync.get("arcSite", (data) => {
    console.log(data, 'data')
    fusionDataBlock.innerHTML = data.arcSite;
  });
}

showFusionData()