chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	chrome.tabs.sendMessage(tabs[0].id, {createDiv: {width: "100px", height: "100px", innerHTML: "Hello"}}, function(response) {
		console.log("Applesauce");
	});
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if(request.cmd == "read_file") {
        $.ajax({
            url: chrome.extension.getURL("screen.html"),
            dataType: "html",
            success: sendResponse
        });
    }
})
