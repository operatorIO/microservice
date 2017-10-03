const env = 'development'; // test, development, staging, production

const fs = require('fs');
const dotenv = require('dotenv');

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = env;
}

const envConfig = dotenv.parse(fs.readFileSync('config/.env.' + process.env.NODE_ENV));
let key;
for (key in envConfig) {
  if (process.env[key] !== undefined) {
    continue;
  }

  process.env[key] = envConfig[key];
}

module.exports = envConfig;