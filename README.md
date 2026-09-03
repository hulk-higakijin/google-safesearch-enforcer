# Google SafeSearch Enforcer

A browser extension for Chromium-based browsers that forces the `safe=active` URL parameter on Google Search.

## Installation

1. Download or clone this repository.
2. Open `chrome://extensions/` in Chrome or another Chromium-based browser.
3. Enable Developer mode.
4. Click Load unpacked.
5. Select the repository directory.

Whenever a Google Search URL on `google.com` or `www.google.com` is opened, the extension adds or replaces the `safe` parameter with `active`.

## Testing

```sh
npm test
```
