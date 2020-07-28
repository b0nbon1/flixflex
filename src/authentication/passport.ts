import FacebookTokenStrategy from 'passport-facebook-token';
import passport from 'passport';
import { Strategy as GoogleTokenStrategy } from 'passport-token-google2';

// FACEBOOK STRATEGY
const FacebookTokenStrategyCallback = (
  accessToken,
  refreshToken,
  profile,
  done
) =>
  done(null, {
    accessToken,
    refreshToken,
    profile
  });

passport.use(
  new FacebookTokenStrategy(
    {
      clientID: 'your-facebook-app-id',
      clientSecret: 'your-facebook-app-secret'
    },
    FacebookTokenStrategyCallback
  )
);

// GOOGLE STRATEGY
const GoogleTokenStrategyCallback = (
  accessToken,
  refreshToken,
  profile,
  done
) =>
  done(null, {
    accessToken,
    refreshToken,
    profile
  });

passport.use(
  new GoogleTokenStrategy(
    {
      clientID: 'your-google-client-id',
      clientSecret: 'your-google-client-secret'
    },
    GoogleTokenStrategyCallback
  )
);

// promisified authenticate functions
const authenticateFacebook = (req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate(
      'facebook-token',
      { session: true },
      (err, data, info) => {
        if (err) reject(err);
        resolve({ data, info });
      }
    )(req, res);
  });

const authenticateGoogle = (req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate(
      'google-token',
      { session: true },
      (err, data, info) => {
        if (err) reject(err);
        resolve({ data, info });
      }
    )(req, res);
  });

module.exports = { authenticateFacebook, authenticateGoogle };
