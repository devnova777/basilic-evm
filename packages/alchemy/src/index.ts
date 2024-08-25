require('dotenv').config();
const { Alchemy, Network, WebhookType } = require('alchemy-sdk');

// authToken is required to use Notify APIs. Found on the top right corner of
// https://dashboard.alchemy.com/notify.
async function createAddressActivityNotification() {
  const settings = {
    authToken: process.env.ALCHEMY_NOTIFY_TOKEN,
    network: Network.ETH_MAINNET, // Replace with your network.
  };

  const alchemy = new Alchemy(settings);
  const addressActivityWebhook = await alchemy.notify.createWebhook(
		// TO DO: You will replace this URL in Step #3 of this guide!
    'https://webhook.site/your-webhook-url',
    WebhookType.ADDRESS_ACTIVITY,
    {
      // use any address you want to monitor activity on!
      addresses: ['0x2c8645BFE28BEEb6E19843eE9573b7539DD5B530'],
      network: Network.ETH_GOERLI,
    }
  );
	console.log(
    'Alchemy Notify address activity notification created, go to https://dashboard.alchemy.com/notify to see details of your custom hook.'
  );
}

createAddressActivityNotification();