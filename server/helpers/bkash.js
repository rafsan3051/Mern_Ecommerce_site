const bkash = require("paypal-rest-sdk");

paypal.configure({
    mode: "sandbox",
    client_id: "",
    client_secret: "",
  });
  
  module.exports = bkash;