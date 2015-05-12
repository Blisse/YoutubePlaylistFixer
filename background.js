chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, {
        code: 	" var cusid_ele = document.getElementsByClassName('pl-video-title'); " +
				" for (var i = 0; i < cusid_ele.length; ++i) { " +
				" 	var item = cusid_ele[i];   " +
				"	console.log(item);" +
				" } "
    });
}, {
    url: [{
        // Runs on example.com, example.net, but also example.foo.com
        hostContains: '.youtube.com/playlist?'
    }],
});
