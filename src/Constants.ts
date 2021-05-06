const ENVIRONMENT = {
  BLOCK_DIST_TAG: "canary",
  CONTEXT_PATH: "/pf",
  ENVIRONMENT: "localhost",
  FUSION_RELEASE: "2.7.3-themes-linking.0",
  allowedImageDomains: "arc-anglerfish-staging-staging.s3.amazonaws.com,arc-anglerfish-arc2-prod-corecomponents.s3.amazonaws.com",
  playerRoot: "//d2w3jw6424abwq.cloudfront.net",
  resizerURL: "https://corecomponents-the-prophet-prod.cdn.arcpublishing.com/resizer",
  searchKey: "5T4w4vtwYAaX8rXHAPyWZ6Yje8asf5fJ9Sl9ZS6i",
  videoEnv: "prod",
  videoOrg: "corecomponents",
}

const ENVIRONMENT_KEYS = [
  'BLOCK_DIST_TAG',
  'CONTEXT_PATH',
  'ENVIRONMENT',
  'FUSION_RELEASE',
  'allowedImageDomains',
  'playerRoot',
  'resizerURL',
  'searchKey',
  'videoEnv',
  'videoOrg',
];

const SITE_PROPERTIES = {
  aspectRatios: ["3:2", "4:3", "1:0", "16:9", "1:1"],
  breakpoints: { small: 0, medium: 768, large: 992 },
  chartBeatAccountId: "3939393",
  chartBeatDomain: "example.com",
  comscoreID: "1234567",
  copyrightText: "https://www.thesun.co.uk/ © 1996-2020 The Sun",
  dangerouslyInjectJS: [],
  dateLocalization: { language: "fr", timeZone: "Europe/Paris", dateTimeFormat: "%B %d, %Y at %l:%M %P %Z", dateFormat: "%B %d, %Y" },
  dfpId: 701,
  facebookAdmins: "030303456",
  facebookPage: "thesun",
  fallbackImage: "resources/images/default_feed_image.jpg",
  fontUrl: "https://fonts.googleapis.com/css?family=Roboto+Condensed|Roboto",
  gaID: "UA-58927291-1",
  galleryCubeClicks: 2,
  gtmID: "GTM-P932WTW",
  imageWidths: [84, 105, 158, 274, 377, 400, 600, 768, 800, 1024, 1440, 1600],
  locale: "fr",
  navBarBackground: "primary-color",
  navColor: "light",
  primaryLogo: "https://arc-anglerfish-staging-staging.s3.amazonaws.com/public/NA6FMAXWP5DR3FDZQ7SGJ3C3FE.png",
  primaryLogoAlt: "The Arc Intelligencer",
  querylyId: "794b8320c4a14952",
  querylyOrg: "liberation",
  resizerURL: "https://corecomponents-the-gazette-prod.cdn.arcpublishing.com/resizer",
  rssUrl: "http://feeds.washingtonpost.com/rss/homepage",
  taboolaPublisherId: "cox-network",
  taboolaWidgets: [],
  twitterUsername: "thesun",
  websiteDomain: "https://www.the-sun.com",
  websiteName: "The Sun"
}

const SITE_PROPERTY_KEYS = [
  'aspectRatios',
  'breakpoints',
  'chartBeatAccountId',
  'chartBeatDomain',
  'comscoreID',
  'copyrightText',
  'dangerouslyInjectJS',
  'dateLocalization',
  'dfpId',
  'facebookAdmins',
  'facebookPage',
  'fallbackImage',
  'fontUrl',
  'gaID',
  'galleryCubeClicks',
  'gtmID',
  'imageWidths',
  'locale',
  'navBarBackground',
  'navColor',
  'primaryLogo',
  'primaryLogoAlt',
  'querylyId',
  'querylyOrg',
  'resizerURL',
  'rssUrl',
  'taboolaPublisherId',
  'taboolaWidgets',
  'twitterUsername',
  'websiteDomain',
  'websiteName',
];

const TREE_KEYS = [
  'children',
  'collection',
  'props',
  'type',
];

const CONTENT_CACHE_KEYS = [
  'content-api',
  'resize-image-api',
  'story-feed-query',
  'story-feed-tag'
]

export {
  ENVIRONMENT,
  ENVIRONMENT_KEYS,
  SITE_PROPERTIES,
  SITE_PROPERTY_KEYS,
  TREE_KEYS,
  CONTENT_CACHE_KEYS
}
