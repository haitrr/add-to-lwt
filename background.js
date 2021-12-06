let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
    chrome.contextMenus.create({
        id: "create_text_menu",
        contexts: ["selection"],
        title: "Create new text in LWT"
    })
    chrome.contextMenus.onClicked.addListener((info) => {
        console.log(info);
    })
});