chrome.contextMenus.create({
    id: "Seinfeld Script",
    title: "Seinfeld Script",
    contexts: ["selection"]
})

chrome .contextMenus.onClicked.addListener(function (info, tab) {
    if(info.menuItemId == "Seinfeld Script"){
        //`${info.menuItemId} ${variableName}`
        const Seinfeld = info.selectionText;
        chrome.tabs.create({ url: `https://www.google.com/search?q=site:https://www.seinfeldscripts.com/%20%26%20${Seinfeld}`});
    }
});
