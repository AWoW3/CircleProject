/** 
 * See installation instructions at 
 * https://developers.circle.com/developer/docs/circle-sdk
 */
//import { Circle, CircleEnvironments } from "@circle-fin/circle-sdk";
const { Circle, CircleEnvironments } = require("@circle-fin/circle-sdk");
const circle = new Circle(
    //'<your-api-key>',
    "SAND_API_KEY:6351adf09736350cdbc672a2e190486f:a2bde6c1d330f6fe97efcc222ed17788",
    CircleEnvironments.sandbox
);

async function getAccountConfig() {
    const configResp = await circle.management.getAccountConfig();
    console.log(configResp.data);
}
getAccountConfig();