'use strict';
let enabled = false; // shared across all tabs, not correct here.

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.startsWith('http')) return;

  enabled = !enabled;
  if(enabled) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['contentScript.js']
    });
    chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ['contentScript.css']
    });
  } else {
    chrome.scripting.removeCSS({
      target: { tabId: tab.id },
      files: ['contentScript.css']
    });
  }
});
