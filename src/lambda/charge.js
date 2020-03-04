const stripe = require("stripe")("your-secrect-key"); // add your secret key here

exports.handler = (event, context, callback) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return callback(null, { statusCode: 405, body: "Method Not Allowed" });
  }

  const data = JSON.parse(event.body);

  if (!data.token || parseInt(data.amount) < 1) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        message: "Some required fields were not supplied."
      })
    });
  }

  stripe.charges
    .create({
      amount: parseInt(data.amount),
      currency: "usd",
      description: "Mayeda Gallery",
      source: data.token
    })
    .then(({ status }) => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({ status })
      });
    })
    .catch(err => {
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify({
          message: `Error: ${err.message}`
        })
      });
    });
};