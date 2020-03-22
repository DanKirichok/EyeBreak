chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if(request.cmd == "read_file") {
        $.ajax({
            url: chrome.extension.getURL("screen.html"),
            dataType: "html",
            success: sendResponse
        });
    }
});


chrome.alarms.create("myAlarm", {delayInMinutes: 1, periodInMinutes: 20} );

chrome.alarms.onAlarm.addListener(function(alarm) {	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {"message": "timer_hit"}, function(response) { });
	});
});


