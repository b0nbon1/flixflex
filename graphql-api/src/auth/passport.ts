import FacebookTokenStrategy from 'passport-facebook-token';
import passport from 'passport';
import { Strategy as GoogleTokenStrategy } from 'passport-token-google2';
import { Request, Response } from 'express';
import config from '../config';

// FACEBOOK STRATEGY
const FacebookTokenStrategyCallback = (
  accessToken: string,
  refreshToken: string,
  profile: any,
  done: any
) =>
  done(null, {
    accessToken,
    refreshToken,
    profile
  });

passport.use(
  new FacebookTokenStrategy(
    {
      clientID: config.facebookAuth.clientID,
      clientSecret: config.facebookAuth.clientSecret
    },
    FacebookTokenStrategyCallback
  )
);

// GOOGLE STRATEGY
const GoogleTokenStrategyCallback = (
  accessToken: string,
  refreshToken: string,
  profile: any,
  done: any
) =>
  done(null, {
    accessToken,
    refreshToken,
    profile
  });

passport.use(
  new GoogleTokenStrategy(
    {
      clientID: config.googleAuth.clientID,
      clientSecret: config.googleAuth.clientSecret
    },
    GoogleTokenStrategyCallback
  )
);

// promisified authenticate functions
export const authenticateFacebook = (req: Request, res: Response): any =>
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

export const authenticateGoogle = (req: Request, res: Response): any =>
  new Promise((resolve, reject) => {
    passport.authenticate(
      'google-token',
      { session: false, scope: ['profile', 'email'] },
      (err, data, info) => {
        if (err) reject(err);
        resolve({ data, info });
      }
    )(req, res);
  });
