const blockedPageUrl = browser.runtime.getURL("site_blocked_page.html");

async function checkBad(url) {
  const { list = [] } = await browser.storage.local.get("list");

  for (const blockedSite of list) {
    if (url.includes(blockedSite.toLowerCase())) {
      return true;
    }
  }

  return false;
}

browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  const url = (changeInfo.url ?? tab.url)?.toLowerCase();

  if (!url) {
    return;
  }

  // Don't block extension pages to avoid redirect loops
  if (url.startsWith(browser.runtime.getURL("").toLowerCase())) {
    return;
  }

  if (await checkBad(url)) {
    await browser.tabs.update(tabId, {
      url: blockedPageUrl,
    });
  }
});
