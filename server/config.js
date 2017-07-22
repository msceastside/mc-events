// server/config.js
module.exports = {
  AUTH0_DOMAIN: 'msceastside.auth0.com',
  AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', /* likely 'http://localhost:8083/api/' */
  MONGO_URI: process.env.MONGO_URI || 'mongodb://mscadmin:NewLife77@ds034677.mlab.com:34677/mean'
};