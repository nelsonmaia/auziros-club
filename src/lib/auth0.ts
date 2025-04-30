import { Auth0Client } from '@auth0/nextjs-auth0/server';

export const auth0 = new Auth0Client({
  session: {
    rolling: false, // session will not auto-extend on requests
    absoluteDuration: 10, // session lasts 10 seconds total
  },
  authorizationParameters: {
    audience: process.env.AUTH0_AUDIENCE,
    scope: process.env.AUTH0_SCOPE,
  }
});
