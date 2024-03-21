const RouterPaiment = require('express').Router();
const stripe = require('stripe')('sk_test_51OwVIFDHUVK5rc8xbCkauOf6SupH7cs7kIZiu48VOUBrJB9QGEnnx2z1OPptQMzWyxHP4FDr1C5ZzFmdOHO5pZJ800NdmMM0aC');

RouterPaiment.post('/intent', async (req, res) => {
  try {
    // Extract necessary information from the request body
    const { email, amount, receipt_email } = req.body;

    // Create a new customer
    const customer = await stripe.customers.create({
      email: email
      // Add more properties to the customer object if needed
    });

    // Get the newly created customer's ID
    const customerId = customer.id;

    // Create payment intent with the new customer's ID
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'eur',
      payment_method_types: ['card'],
      setup_future_usage: 'off_session', // or 'on_session' if needed
      customer: customerId, // Set the customer ID for the payment intent
      receipt_email: receipt_email
    });

    console.log(paymentIntent);
    
    // Generate ephemeral key for the customer
    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customerId },
      { apiVersion: '2020-08-27' } // Specify the Stripe API version
    );
    
    // Return the payment intent object along with the customer ID and ephemeral key
    res.status(200).json({ paymentIntent, customerId, ephemeralKey });
  } catch (error) {
    // Provide a user-friendly error message
    res.status(400).json({ error: error.message });
  }
});

module.exports = RouterPaiment;
