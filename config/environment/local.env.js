'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'meanApp-secret',

  FACEBOOK_ID:      '410586175978609',
  FACEBOOK_SECRET:  '8c572aa60acfd2afef88dea43ba3178f',

  TWITTER_ID:       'HdFGbo3yvWp8Hm0rmnmvGgG8O',
  TWITTER_SECRET:   'LQQKQcR2Qb2tQWYcUpe0o0nEXCSUqrIBi4LBBVEYrg0yylVhk5',

  keys:{
    access: 'AKIAINZITVNGQBZ7GPHA',
    secret: 'ACCESS_CODE',
    bucket: 'MY_AWS_BUCKET',
    region: 'us-west-1'
  },
  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
