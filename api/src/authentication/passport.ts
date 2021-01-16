import FacebookTokenStrategy from 'passport-facebook-token';
import passport from 'passport';
import { Strategy as GoogleTokenStrategy } from 'passport-token-google2';

// FACEBOOK STRATEGY
const FacebookTokenStrategyCallback = (
  accessToken: any,
  refreshToken: any,
  profile: any,
  done: (arg0: any, arg1: { accessToken: any; refreshToken: any; profile: any; }) => any
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
  accessToken: any,
  refreshToken: any,
  profile: any,
  done: (arg0: any, arg1: { accessToken: any; refreshToken: any; profile: any; }) => any
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

const authenticateFacebook = (req: any, res: any) =>
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

const authenticateGoogle = (req: any, res: any) =>
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
