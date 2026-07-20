const html1 = chrome.runtime.getURL("site_blocked_page.html");

function checkbad(s) {
  const badlist = ["youtube.com/shorts"];
  for (let index = 0; index < badlist.length; index++) {
    if (s.includes(badlist[index])) return true;
  }
  return false;
}
chrome.tabs.onUpdated.addListener((_, changeInfo, tab) => {
  if (changeInfo.status === "complete" && checkbad(tab.url.toLowerCase())) {
    chrome.tabs.update({ url: html1 });
  }
});

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const url =
    checkbad(tab.url.toLowerCase()) || checkbad(changeInfo.url.toLowerCase());
  if (url) {
    browser.tabs.update(tabId, { url: html1 });
  }
});
