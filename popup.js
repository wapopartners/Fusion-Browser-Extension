const ALL_SAVED_KEYS = [
  // globalContent
  "_id",
  "type",
  "version",
  "created_date",
  "revision",
  "last_updated_date",
  "canonical_url",
  "headlines",
  "owner",
  "content_restrictions",
  "address",
  "workflow",
  "subheadlines",
  "description",
  "language",
  "source",
  "label",
  "related_content",
  "distributor",
  "canonical_website",
  "geo",
  "planning",
  "display_date",
  "credits",
  "subtype",
  "first_publish_date",
  "additional_properties",
  "publish_date",
  "publishing",
  "website",
  "website_url",

  // via tree
  "collection",
  "type",
  "props",

  // deployment 
  "deployment",

  // outputType
  "outputType"
]

const fusionDataBlock = document.getElementById('fusion-data');
const allFusionDataBlock = document.getElementById('fusion-data-everything');

function showFusionData() {
  chrome.storage.sync.get("arcSite", (data) => {
    console.log(data, 'data')
    fusionDataBlock.innerHTML = data.arcSite;
  });

  chrome.storage.sync.get(ALL_SAVED_KEYS, (data) => {
    allFusionDataBlock.innerHTML = JSON.stringify(data);
    console.log(data, 'data')
  })
}

showFusionData()