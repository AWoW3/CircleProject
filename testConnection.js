
const { Circle, CircleEnvironments } = require("@circle-fin/circle-sdk");

const circle = new Circle('', CircleEnvironments.sandbox);

async function testApi() {
    const pingResp = await circle.health.ping();
    console.log(pingResp.data);
}
testApi();