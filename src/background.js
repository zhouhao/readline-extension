'use strict';

chrome.action.onClicked.addListener((tab) => {
  if (tab.url.startsWith('http')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['contentScript.js']
    });

    chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ['contentScript.css']
    });
  }
});
