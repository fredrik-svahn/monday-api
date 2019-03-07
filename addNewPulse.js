





function addNewPulse(token,boardId,userId,pulseName) { 

var url1 = 'https://api.monday.com:443/v1/boards/';

var url2 = '/pulses.json?api_key=';

const axios = require('axios');


axios({
  method:'post',
  url:url1+boardId+url2+token,
  data:{
  "user_id" : userId,
  "pulse": {
 "name" : pulseName }
 },
  headers :{
   "Cache-Control": "max-age=0, private, must-revalidate",
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

//we can get the user id from (get all users) in API's doc
addNewPulse('bc62963ff8ecbd9f3dc277948b452aa2','189923245','7215271','myName');    



































