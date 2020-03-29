var div = document.createElement( 'div' );
div.id = 'break-screen';

var ht = "";
var removeTimeout;

var breakLength = 20000;
var timeUntilBreak = 200000;

var onBreak = false;
var isLoaded = false;
var isOn = false;


chrome.extension.sendRequest({cmd: "read_file"}, function(html){
    ht = html;
    $("#break-screen").html(html);
	isLoaded = true;
});

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if( request.message === "timer_hit" ) {
			var onBreak = true;
			document.body.appendChild( div );
			$("#break-screen").html(ht);

			removeTimeout = setTimeout(function(){ 
				document.body.removeChild(div);
				clearTimeout(removeTimeout);
				onBreak = false;
			}, breakLength);
		}
	}
);

/*
chrome.alarms.onAlarm.addListener(function(alarm) {
	console.log("FIRED ALARM");
	var onBreak = true;
	document.body.appendChild( div );
	$("#break-screen").html(ht);

	removeTimeout = setTimeout(function(){ 
		document.body.removeChild(div);
		clearTimeout(removeTimeout);
		onBreak = false;
	}, breakLength);
});
*/

/*
window.setInterval(function(){
	chrome.storage.local.get("isOn", function(data) {
		if(typeof data.isOn == "undefined") {
			// That's kind of bad
			console.log("IT IS UNDEFINED")
		} else {
			if (!data.isOn) {
				isOn = false;
			} else {
				isOn = true;
			}
		}
	});
	
	console.log("isOn: " + isOn);
	
	if (!onBreak && isLoaded && isOn) {
			
	}	
}, timeUntilBreak);
*/
