let list_of_blocked_sites = [];

async function getData() {
  const data = await browser.storage.local.get();
  if (data.list != undefined) {
    list_of_blocked_sites = data.list;
  }
}

async function setData() {
  await browser.storage.local.set({ list: list_of_blocked_sites });
}

function listuirefresh() {
  const list_of_blocked_sites_ui =
    document.getElementById("blocked_sites_list");
  list_of_blocked_sites_ui.replaceChildren();
  for (const item of list_of_blocked_sites) {
    // Represents an li item with the url
    const url_item = document.createElement("li");
    url_item.textContent = item;

    // Delete button for each url item
    const delete_button = document.createElement("button");
    delete_button.textContent = "X";
    delete_button.classList.add("delete");

    // Function responsible for deleting
    delete_button.addEventListener("click", async function () {
      list_of_blocked_sites_ui.removeChild(url_item);
      let list2 = [];
      for (const chkitem of list_of_blocked_sites) {
        if (chkitem != item) list2.push(chkitem);
      }
      list_of_blocked_sites = list2;
      await setData();
    });
    url_item.appendChild(delete_button);
    list_of_blocked_sites_ui.appendChild(url_item);
  }
}

async function handleAdd() {
  const inputText = document.getElementById("addurl");
  const url_name = inputText.value.trim();
  if (url_name === "") return;
  for (const item of list_of_blocked_sites) {
    if (url_name === item) return;
  }
  list_of_blocked_sites.push(url_name);
  listuirefresh();

  inputText.value = "";
  await setData();
}

const addButton = document.getElementById("add");
addButton.addEventListener("click", handleAdd);
// Loading Data
getData().then(() => {
  listuirefresh();
});
