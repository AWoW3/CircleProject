const { Circle, CircleEnvironments} = require("@circle-fin/circle-sdk");
require('dotenv').config();

const apikey = process.env['apiKey']
const axios = require('axios');
let data = JSON.stringify({
  "idempotencyKey": "ff5e1d20-b1e0-48ef-b1d7-f432152b21f4",
  "currency": "USD",
  "chain": "ETH"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api-sandbox.circle.com/v1/wallets/1016471301/addresses',
  headers: { 
    'Content-Type': 'application/json', 
    'Accept': 'application/json', 
    'Authorization': 'Bearer apikey'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
