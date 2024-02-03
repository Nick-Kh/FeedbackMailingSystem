import express from 'express';
import './models/User.js';
import './services/passportService.js';
import cookieSession from 'cookie-session';
import passport from 'passport';
import authRoutes from './routes/authRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import mongoose from 'mongoose';
import keys from '../config/keys.js';
import bodyParser from 'body-parser';


mongoose.connect(keys.mongoURI);

const app = express();


app.use(bodyParser.json());
// INFO: Cookie session setup
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
paymentRoutes(app);

const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log('Server running at port: ', PORT);
});
