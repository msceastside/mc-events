// server/api.js
/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
/*
 |--------------------------------------
 | Authentication Middleware
 |--------------------------------------
 */
module.exports = function(app, config) {
  // Authentication middleware
  const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    aud: config.AUTH0_API_AUDIENCE,
    issuer: `https://${config.AUTH0_DOMAIN}/`,
    algorithm: 'RS256'
  });
  const adminCheck = (req, res, next) => {
    const rules = req.user[config.NAMESPACE] || [];
    if (roles.indexOf('admin') > -1) {
      next();
    } else {
      res.status(401).send({message: 'Not authorized for admin access'});
    }
  }
/*
 |--------------------------------------
 | API Routes
 |--------------------------------------
 */
  // GET API root
  app.get('/api/', (req, res) => {
    res.send('API works');
  });
};