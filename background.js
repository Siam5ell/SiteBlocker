const html1 = chrome.runtime.getURL("site_blocked_page.html");

function checkbad(s) {
  const badlist = ["porn", "xhamster", "hentai","youtube.com/shorts"];
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
