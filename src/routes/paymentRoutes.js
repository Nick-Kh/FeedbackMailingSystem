import Stripe from 'stripe';
import keys from '../../config/keys.js';
import requireLogin from '../../middlewares/requireLogin.js';

const billing = new Stripe(keys.stripeSecretKey);

export default (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    try {
      const charge = await billing.charges.create({
        amount: 500,
        currency: 'usd',
        description: '$5 dollars for 5 credits',
        source: req.body.id
      });
      req.user.credits += 5;
      const updateduser = await req.user.save();
      res.send(updateduser);
    } catch (error) {
      return res.status(500).send({ error: 'Error charging the credit card'});
    }
  });
}