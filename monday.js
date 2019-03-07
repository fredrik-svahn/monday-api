class Monday {
    constructor(token) {
        this.token = token;
        this.baseURL = 'https://api.monday.com:443/v1';
        this.axios = require('axios');

        this.axios.defaults.baseURL = this.baseURL;
        this.axios.defaults.headers.common['Cache-Control'] = "max-age=0, private, must-revalidate";
        this.axios.defaults.headers.common['Content-Type'] = "application/json";
    }

    
}
