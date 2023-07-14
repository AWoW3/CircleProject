const { Circle, CircleEnvironments } = require("@circle-fin/circle-sdk");

const axios = require('axios');
require('dotenv').config();

const apikey = process.env['apiKey']

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api-sandbox.circle.com/v1/wallets/1016471938',
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
