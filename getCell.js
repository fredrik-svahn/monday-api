//get a column value for a given pulse
//token and boardId are constants and related to Sigma's account on Monday 
function getCell(token,boardId,columnId,pulseId) { 

var url1 = 'https://api.monday.com:443/v1/boards/';

var url2 = '/columns/';

var url3 = '/value.json?pulse_id=';

var url4 = '&api_key=';

var url  = url1+boardId+url2+columnId+url3+pulseId+url4+token;

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

xhr.open('GET', url, true)
xhr.onload = function () {
	var cell = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
		console.table(cell.value);
	} else {
		console.error(cell);
	}
}
xhr.send(null);

}

//Example to test the function where the value has date type
getCell('bc62963ff8ecbd9f3dc277948b452aa2','189923245','date7','189926692');    
//Anothe example where the value has text type
//getCell('bc62963ff8ecbd9f3dc277948b452aa2','189923245','text2','189926692');   

