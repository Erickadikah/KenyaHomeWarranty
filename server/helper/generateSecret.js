// implementing a jwt secret key
const crypto = require('crypto');

// Generate a random JWT secret
const jwtSecret = crypto.randomBytes(32).toString('hex');
console.log('Generated JWT Secret:', jwtSecret);

module.exports = jwtSecret;