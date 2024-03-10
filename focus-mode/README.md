### Focus Mode Extension

builds an extension that simplifies the styling of the Chrome extension and Chrome Web Store documentation pages so that they are easier to read.

## Running this extension

1. Clone this repository.
2. Load this directory in Chrome as an [unpacked extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked).
3. Press the new extension button to run

## Pin the extension

By default, when you load your extension locally, it will appear in the extensions menu. Pin your extension to the toolbar to quickly access your extension during development.

### Under the hood

- Uses [extension service worker](https://developer.chrome.com/docs/extensions/develop/concepts/service-workers) as the event coordinator

- preserves user privacy through the "activeTab" permission

- Insert and remove a style sheet using the `Scripting` API
