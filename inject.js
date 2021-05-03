
// this is the code which will be injected into a given page...

(function() {
  console.log(window, 'window')
  console.log(window.Fusion)
  
  const existingPanels = document.getElementsByClassName("fusion_data_panel");
  if (existingPanels.length > 0) {
    for (let i = 0; i < existingPanels.length; i++) {
      existingPanels[i].parentElement.removeChild(existingPanels[i]);
    }
  }
  let panel = document.createElement("div");
  panel.setAttribute("class", "fusion_data_panel");
  panel.setAttribute(
    "style",
    "background-color: #369; color: #FFF; position: fixed;" +
      "top: 0; bottom: 0; right: 0; width: 50%; border: 2px solid #036;" +
      "font: 12px/1.2 monospace; padding: 0; z-index: 1000000000;"
  );
  let buttonPanel = document.createElement("div");
  buttonPanel.setAttribute("class", "fusion_data_panel_buttons");
  buttonPanel.setAttribute(
    "style",
    "display: flex; justify-content: flex-start; padding: 10px; background: #036;"
  );
  panel.append(buttonPanel);
  let titlePanel = document.createElement("h2");
  titlePanel.setAttribute("class", "fusion_data_panel_title");
  titlePanel.setAttribute("style", "font-family: monospace; padding: 10px;");
  panel.append(titlePanel);
  let dataPanel = document.createElement("pre");
  dataPanel.setAttribute("class", "fusion_data_panel_content");
  dataPanel.setAttribute(
    "style",
    "padding: 10px; overflow: scroll; height: " +
      (window.innerHeight - 100) +
      "px; margin: 0"
  );
  panel.append(dataPanel);
  let globalContentButton = document.createElement("button");
  globalContentButton.innerText = "Global Content";
  buttonPanel.append(globalContentButton);
  let sitePropertiesButton = document.createElement("button");
  sitePropertiesButton.innerText = "Site Properties";
  buttonPanel.append(sitePropertiesButton);
  let contentCacheButton = document.createElement("button");
  contentCacheButton.innerText = "Content Cache";
  buttonPanel.append(contentCacheButton);
  let globalContentConfigButton = document.createElement("button");
  globalContentConfigButton.innerText = "Global Content Config";
  buttonPanel.append(globalContentConfigButton);
  let arcSiteButton = document.createElement("button");
  arcSiteButton.innerText = "arcSite";
  buttonPanel.append(arcSiteButton);
  let closeButton = document.createElement("button");
  closeButton.innerText = "Close";
  buttonPanel.append(closeButton);
  let buttons = buttonPanel.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute(
      "style",
      "border: solid 1px #999; background: #CCC; padding: 3px; margin-right: 10px; color: #333; font-family: sans-serif"
    );
  }
  document.body.append(panel);
  globalContentButton.addEventListener("click", function () {
    let content = JSON.stringify(window.Fusion.globalContent);
    console.log(content);
    titlePanel.innerText = "Global Content : " + getContentSize(content) + "KB";
    dataPanel.innerText = JSON.stringify(window.Fusion.globalContent, null, 2);
  });
  contentCacheButton.addEventListener("click", function () {
    let content = JSON.stringify(window.Fusion.contentCache);
    titlePanel.innerText = "Content Cache: " + getContentSize(content) + "KB";
    dataPanel.innerText = JSON.stringify(window.Fusion.contentCache, null, 2);
  });
  sitePropertiesButton.addEventListener("click", function () {
    titlePanel.innerText = "Site Properties";
    dataPanel.innerText = JSON.stringify(
      window.Fusion.getProperties(window.Fusion.arcSite),
      null,
      2
    );
  });
  arcSiteButton.addEventListener("click", function () {
    titlePanel.innerText = "Arc Site";
    dataPanel.innerText = window.Fusion.arcSite;
  });
  globalContentConfigButton.addEventListener("click", function () {
    let content = JSON.stringify(window.Fusion.globalContentConfig);
    titlePanel.innerText =
      "Global Content Config : " + getContentSize(content) + "KB";
    dataPanel.innerText = JSON.stringify(
      window.Fusion.globalContentConfig,
      null,
      2
    );
  });
  closeButton.addEventListener("click", function () {
    panel.parentElement.removeChild(panel);
  });
  function getContentSize(content) {
    return (content.length / 1024).toFixed(2);
  }
})();
