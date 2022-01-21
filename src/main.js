const axios = require('axios');

const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest'
const ids = '1975,2539,4056,5631,5805,5821,5829,5892,6758,6951'
const params = {
    'id': ids,
}

const CMC = '3d286c45-bb8c-483f-8165-6a89567c11d0';
const headers = {
    'Accepts': 'application/json',
    'X-CMC_PRO_API_KEY': CMC,
    'Accept-Encoding': 'deflate, gzip'
}

axios.get(url, { params, headers }).then(console.log)