const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');
const sendEmail = require('./mailer/index');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(compression());
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

app.post('/email_welcome', (req, res) => {
  console.log(req.body)
  const {to, name, token, type} = req.body;
  sendEmail(to, name, token, type);
  return res.status(200).json({success: true})
});

app.post('/email_purchase', (req, res) => {
  console.log(req.body)
  const {to, name, token, type, transactionData} = req.body;
  const {cartItems, total, todayDate, orderNumber} = transactionData;
  let transactionDataNew = {cartItems, total, todayDate, orderNumber};
  sendEmail(to, name, token, type, transactionDataNew);
  return res.status(200).json({success: true})
})