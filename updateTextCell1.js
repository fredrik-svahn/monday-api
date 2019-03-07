


function updateTextCell(token,boardId,columnId,pulseId,text) {

var url1 = "https://api.monday.com:443/v1/boards/";

var url2 = "/columns/";

var url3 = "/text.json?api_key=";


const axios = require('axios');


axios({
  method:'put',
  url:url1+boardId+url2+columnId+url3+token,
  data:{
  "pulse_id" : pulseId,
  "text": text},
  headers :{
  "Cache-Control": "max-age=0, private, must-revalidate",
  "Content-Type": "application/json"
}
})
  .then(function(response) {
    console.log("success");
}).catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });

}
updateTextCell('bc62963ff8ecbd9f3dc277948b452aa2','189923245','text2','189926692','updated100');
