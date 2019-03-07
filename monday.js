class Monday {
    constructor(token) {
        this.axios = require('axios');
        this.axios.defaults.baseURL = 'https://api.monday.com:443/v1';
        this.axios.defaults.headers.common['Cache-Control'] = "max-age=0, private, must-revalidate";
        this.axios.defaults.headers.common['Content-Type'] = "application/json";
        this.axios.defaults.params = {
            api_key: token
        };
    }

    addNewPulse(boardId, userId, pulseName) {
        return this.axios({
            method:'post',
            url: `/boards/${boardId}/pulses.json`,
            data:
            {
                "user_id" : userId,
                "pulse": { "name" : pulseName }
            }
        });
    }

    addNewNote(pulseId,title,content) {
        return this.axios({
            method:'post',
            url: `https://api.monday.com:443/v1/pulses/${pulseId}/notes.json`,
            data:
            {
                "title" : title,
                "content": content
            }
      });
    }
}

let m = new Monday('bc62963ff8ecbd9f3dc277948b452aa2');
m.addNewPulse(
    '189923245',
    '7215271',
    'someboard'
).then(r => {
    console.log(r);
}).catch(e => {
    console.log(e);
});
