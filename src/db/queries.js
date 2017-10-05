const knex = require('./connection');

module.exports = {
  async getTest() {
    return await knex('test').select();
  },

  async insertTest(someVariable) {
    const ids = await knex('test').insert({
     some_variable: someVariable
    });

    return ids[0];
  }
}
