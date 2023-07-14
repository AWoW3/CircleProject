const axios = require('axios');
require('dotenv').config();

const apikey = process.env['apiKey']

let data = JSON.stringify({
  "idempotencyKey": "c59350b9-6071-4de4-9bca-142b94da1ac0",
  "source": {
    "type": "wallet",
    "id": "1016471938"
  },
  "destination": {
    "type": "blockchain",
    "address": "0xc7ba186997ba15463694662460fd14e92bba858e",
    "chain": "AVAX"
  },
  "amount": {
    "amount": "1.14",
    "currency": "USD"
  }
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api-sandbox.circle.com/v1/transfers',
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
