importScripts("core.js");

chrome.webNavigation.onBeforeNavigate.addListener(
  ({ frameId, tabId, url }) => {
    if (frameId !== 0) return;

    const enforcedUrl = enforcedSearchUrl(url);
    if (enforcedUrl) chrome.tabs.update(tabId, { url: enforcedUrl });
  },
  {
    url: [
      { schemes: ["http", "https"], hostEquals: "google.com", pathEquals: "/search" },
      { schemes: ["http", "https"], hostEquals: "www.google.com", pathEquals: "/search" }
    ]
  }
);
