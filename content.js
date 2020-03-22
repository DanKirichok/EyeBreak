var div = document.createElement( 'div' );
div.id = 'break-screen';

var ht = "";
var removeTimeout;

var breakLength = 20000;
var timeUntilBreak = 2000;

var onBreak = false;
var isLoaded = false;

chrome.extension.sendRequest({cmd: "read_file"}, function(html){
    ht = html;
    $("#break-screen").html(html);
    document.body.appendChild( div );
	isLoaded = true;
});

window.setInterval(function(){
	if (!onBreak && isLoaded) {
		onBreak = true;
		//console.log(" +++ Adding the box");
		document.body.appendChild( div );
		$("#break-screen").html(ht);
		
		removeTimeout = setTimeout(function(){ 
			//console.log(" --- Removing the box")
			document.body.removeChild(div);
			clearTimeout(removeTimeout);
			onBreak = false;
		}, breakLength);	
	}	
}, timeUntilBreak);
