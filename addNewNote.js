
function addNewNote(token,pulseId,title,content) {

var url1 = 'https://api.monday.com:443/v1/pulses/';

var url2 = '/notes.json?api_key=';


const axios = require('axios');

axios({
  method:'post',
  url:url1+pulseId+url2+token,
  data:{
  "title" : title,
  "content": content
 },
  headers :{
     "Cache-Control": "no-cache",
     "Content-Type": "application/json"}
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

addNewNote('bc62963ff8ecbd9f3dc277948b452aa2','189926692','newNote','This is my new note');
