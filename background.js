const html1 = chrome.runtime.getURL("hello.html");

function checkbad(s) {
  const badlist = ["porn", "xhamster"];
  for (let index = 0; index < badlist.length; index++) {
    if (s.includes(badlist[index])) return true;
  }
  return false;
}
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && checkbad(tab.url.toLowerCase())) {
    chrome.tabs.update({ url: html1 });
  }
});
