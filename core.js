function enforcedSearchUrl(rawUrl) {
  const url = new URL(rawUrl);
  const isGoogleCom = url.hostname === "google.com" || url.hostname === "www.google.com";

  if (!isGoogleCom || url.pathname !== "/search") return null;
  if (url.searchParams.get("safe") === "active") return null;

  url.searchParams.set("safe", "active");
  return url.toString();
}

if (typeof globalThis !== "undefined") {
  globalThis.enforcedSearchUrl = enforcedSearchUrl;
}

if (typeof module !== "undefined") {
  module.exports = { enforcedSearchUrl };
}
