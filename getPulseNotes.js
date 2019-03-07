 

function getPulseNotes(token,pulseId) { 
var url1 = 'https://api.monday.com:443/v1/pulses/';

var url2 = '/notes.json?api_key=';

var url  = url1+pulseId+url2+token;


var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

xhr.open('GET', url, true)
xhr.onload = function () {
	var notes = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
                //this is just an example, but we can get all the array() and then get a specific elem/note
		console.table(notes[0].content);
	} else {
		console.error(notes);
	}
}
xhr.send(null);

}

getPulseNotes('bc62963ff8ecbd9f3dc277948b452aa2','189926692');    

