const express = require('express');
const app = express();
const bugsnag = require('bugsnag');
const bodyParser = require('body-parser');

/**
 * Registering the environment config file
 */
const env = require('./config/env');

/* bugsnag.register('', { 
  releaseStage: process.env.NODE_ENV,
  sendCode: true
});

// bugsnag.notify(new Error('Non-fatal'), { severity: 'info' });
console.log('environment:', process.env.NODE_ENV);*/

/**
 * Registering handling of async errors
 */
require('express-async-errors');

/**
 * Bugsnag request middleware has to sit first
 */
// app.use(bugsnag.requestHandler);

/**
 * Enable body parser for auto parsing json
 * and urlencoded post / put requests
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Authenticating the client
 */
// require('./src/middleware/clientAuth')(app);

/**
 * Router
 */
require('./src/routes')(app);


/**
 * Error / Exceptions handling through express middleware
 */
// app.use(bugsnag.errorHandler);
require('./src/middleware/errorHandling')(app);


/**
 * Server starting
 */
app.listen(process.env.PORT || 3000, () => {
  console.log('Server started...');
});

module.exports = app;
