/** 
 * See installation instructions at 
 * https://developers.circle.com/developer/docs/circle-sdk
 */

const { Circle, CircleEnvironments, PaymentIntentCreationRequest } = require("@circle-fin/circle-sdk");

const crypto = require('crypto');
const { UUID } = require('uuid');

const circle = new Circle(
   // '<your-api-key>',
   "SAND_API_KEY:6351adf09736350cdbc672a2e190486f:a2bde6c1d330f6fe97efcc222ed17788",
    CircleEnvironments.sandbox      // API base url
);

async function createCryptoPayment() {
    const reqBody = {
        amount: {
            amount: "2.00",
            currency: "USD"
        },
        settlementCurrency: "USD",
        paymentMethods: [
            {
                type: "blockchain",
                chain: "ETH"
            }
        ],
        idempotencyKey: crypto.randomUUID()
    };
    const resp = await circle.cryptoPaymentIntents.createPaymentIntent(reqBody);
    console.log(resp.data);
}
createCryptoPayment();