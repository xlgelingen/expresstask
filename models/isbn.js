var axios = require('axios');
const ISBNAPI = "https://isbn.market.alicloudapi.com/ISBN";
const appcode = process.env.APPCODE;

const isbnModel = {
    isbn: function (isbn) {
        return axios.get(ISBNAPI, {
            params: {
                "isbn": isbn
            },
            headers: {
                "Content-Type": "application/ison",
                "Authorization": `APPCODE ${appcode}`
            }
        })
    }
}

module.exports = isbnModel;