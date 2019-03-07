// this function returns an array, after that we can search of a specific Note in this array 
function getPulseNotes(token,pulseId) { 

var url1 = 'https://api.monday.com:443/v1/pulses/';

var url2 = '/notes.json?api_key=';

var url  = url1+pulseId+url2+token;

const axios = require('axios');
axios.get(url)
  .then(function (response) {
    console.log(response.data);
    
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}


getPulseNotes('bc62963ff8ecbd9f3dc277948b452aa2','189926692');  