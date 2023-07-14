// to get transaction hash of the created transfer since the status is still pending.
const axios = require('axios');
require('dotenv').config();

const apikey = process.env['apiKey']

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api-sandbox.circle.com/v1/transfers/2932b17f-f750-4091-8be4-0bab8695c18e',
  headers: { 
    'Accept': 'application/json', 
    'Authorization': 'Bearer apikey'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
