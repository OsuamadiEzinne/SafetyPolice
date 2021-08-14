
chrome.tabs.onUpdated.addListener(function(tab, changeInfo, tab) {
    //code in here will run every time a user goes onto a new tab, so you can insert your scripts into every new tab
    chrome.tabs.executeScript(tab.id, {code:
        "document.body.appendChild(document.createElement('script')).src = 'https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js'"
    })
    
    chrome.tabs.executeScript(tab.id, {code:
        "document.body.appendChild(document.createElement('script')).src = 'https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js'"
    })
    
    chrome.tabs.executeScript(tab.id, {code:
        "document.body.appendChild(document.createElement('script')).src = 'content.js'"
    })
}); 