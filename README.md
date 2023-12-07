# WebRun DevTools Puppeteer 

Implementation of the Puppeteer API adapter working with the [WebRun DevTools](https://github.com/statewalker/webrun-devtools) Chrome Extension.

This library allows you to pilot your browser using the Puppeteer API.

Internally it connects to the `chrome.debugger` API using the WebRun DevTools extension.

This implementation is based on the Puppeteer v13. The latest versions of Puppeteer use CDP commands not available via the `chrome.debugger` API.

