



function updateTextCell(token,boardId,columnId,pulseId,text) { 

var url1 = "https://api.monday.com:443/v1/boards/";

var url2 = "/columns/";

var url3 = "/text.json?api_key=";

var url = url1+boardId+url2+columnId+url3+token;

var data = {};
data.pulse_id = pulseId;
data.text  = text;
var json = JSON.stringify(data);


var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();


xhr.open("PUT", url, true);
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send(json);

}
updateTextCell('bc62963ff8ecbd9f3dc277948b452aa2','189923245','text2','189926692','updated1');


