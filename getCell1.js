
function getCell(token,boardId,columnId,pulseId) {

var url1 = 'https://api.monday.com:443/v1/boards/';

var url2 = '/columns/';

var url3 = '/value.json?pulse_id=';

var url4 = '&api_key=';

var url  = url1+boardId+url2+columnId+url3+pulseId+url4+token;


const axios = require('axios');
axios.get(url)
  .then(function (response) {
    console.log(response.data.value);
    
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    //always executed
  });

}

getCell('bc62963ff8ecbd9f3dc277948b452aa2','189923245','text2','189926692');
