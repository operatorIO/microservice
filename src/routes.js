const queries = require('./db/queries');
const helpers = require('./helpers');

module.exports = (app) => {
  app.post('/users', async (req, res, next) => {   
    res.send(await helpers.formatReponse(null, 202));
  }),

  app.get('/users', async (req, res, next) => {
    res.send(await helpers.formatReponse(null, 200));
  })
}
