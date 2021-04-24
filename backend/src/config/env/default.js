const dotenv = require('dotenv');

dotenv.config();
const config = {
  PORT: process.env.PORT || 6000,
  secret: process.env.SECRET,
  database: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
  googleConfig: {
    clientID: process.env.GOOGLE_APP_ID,
    clientSecret: process.env.GOOGLE_APP_SECRET,
  },
  facebookConfig: {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
  },
  HASH_SALT_ROUNDS: 10,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  debug: false,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  twilioConfig: {
    SID: process.env.TWILIO_ACCOUNT_SID,
    AuthToken: process.env.TWILIO_AUTH_TOKEN,
    TPhoneNumber: process.env.TWILIO_PHONENUMBER,
  },
  env: process.env.NODE_ENV || 'development'
};

module.exports = config;
