const { Circle, CircleEnvironments } = require("@circle-fin/circle-sdk");

const axios = require('axios');
let data = JSON.stringify({
  "idempotencyKey": "70096f46-d21e-4d26-b6d5-ed225c74e932",
  "description": "MARA"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api-sandbox.circle.com/v1/wallets',
  headers: { 
    'Content-Type': 'application/json', 
    'Accept': 'application/json', 
    'Authorization': 'Bearer SAND_API_KEY:6351adf09736350cdbc672a2e190486f:a2bde6c1d330f6fe97efcc222ed17788'
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




