import("node-fetch").then((fetch) => {
  global.fetch = fetch;
  const GeminiApi = require("gemini-api").default;
  const CryptoCompareAPI = require("cryptocompare");
  require("dotenv").config();

  const secret = process.env.secret;
  const key = process.env.key;
  const CCAPIKey = process.env.crypto_compare_api;

  const restClient = new GeminiApi({ key, secret, sandbox: true });
  CryptoCompareAPI.setApiKey(CCAPIKey);

  /*
restClient
  .newOrder({ amount: 10, price: 100, side: "buy", symbol: "BTCGUSD" })
  .then((response) => console.log(response))
  .catch((error) => console.error(error));*/
  // restClient.getTradeHistory("btcusd").then((response) => console.log(response));

  //get data from CC
  CryptoCompareAPI.histoHour("BTC", "USD")
    .then((data) => {
      console.log(data);
    })
    .catch(console.error);
});
