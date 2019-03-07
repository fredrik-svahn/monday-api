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
            url: `/pulses/${pulseId}/notes.json`,
            data:
            {
                "title" : title,
                "content": content
            }
      });
    }

    getCell(boardId, columnId, pulseId) {
        return this.axios({
            method: 'get',
            url: `/boards/${boardId}/columns/${columnId}/value.json`,
            params:
            {
                pulse_id: pulseId
            }
        });
    }
}

let m = new Monday('bc62963ff8ecbd9f3dc277948b452aa2');
let x = m.getCell(
    '189923245',
    'text2',
    '189926692'
).then(r => {
    console.log(r.data);
}).catch(e => {
    console.log(e);
});
