const RouterPaiment = require('express').Router();
const stripe = require('stripe')('sk_test_51OwVIFDHUVK5rc8xbCkauOf6SupH7cs7kIZiu48VOUBrJB9QGEnnx2z1OPptQMzWyxHP4FDr1C5ZzFmdOHO5pZJ800NdmMM0aC');

RouterPaiment.post('/intent', async (req, res) => {
  try {
    const { email, amount, receipt_email } = req.body;
    const customer = await stripe.customers.create({
      email: email
    });
    const customerId = customer.id;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'eur',
      payment_method_types: ['card'],
      setup_future_usage: 'off_session', 
      customer: customerId, 
      receipt_email: receipt_email
    });
    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customerId },
      { apiVersion: '2020-08-27' }
    );
    res.status(200).json({ paymentIntent, customerId, ephemeralKey });
  } catch (error) {
    
    res.status(400).json({ error: error.message });
  }
});

module.exports = RouterPaiment;
