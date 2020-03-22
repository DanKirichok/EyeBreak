var isEnabled = false;

chrome.storage.local.get("isOn", function(data) {
	if(typeof data.isOn == "undefined") {
		// That's kind of bad
		chrome.storage.local.set({isOn: false});
	} else {
		if (data.isOn) {
			$(".switch").click();
			isEnabled = true;
		}
	}
});

$(document).ready(function(){
	$('input[type="checkbox"]').click(function(){
		if($(this).prop("checked") == true){
			chrome.storage.local.set({isOn: true});
		}
		else if($(this).prop("checked") == false){
			chrome.storage.local.set({isOn: false});
		}
	});
});
