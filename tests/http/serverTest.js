const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const chaiHttp = require('chai-http');
const app = require('./../../index.js');
const breeds = require('./../data/breeds');
const expect = chai.expect;
const expect = chai.expect;
const should = chai.should;

chai.use(chaiAsPromised);
chai.use(should);
chai.use(chaiHttp);

describe('users module', () => {
  beforeEach(function(){
    console.log('see.. this function is run EACH time')
  });

  it('should add new user', (done) => {
    chai.request(app)
    .post('/users')
    .set('X-API-Key', process.env.SERVICE_PRIVATE_KEY)
    .send(breeds.correct_breed)
    .end((err, res) => {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      done();
    });
  });

  it('should throw validation exception', (done) => {
    chai.request(app)
    .post('/users')
    .set('X-API-Key', process.env.SERVICE_PRIVATE_KEY)
    .send(breeds.wrong_breed)
    .end((err, res) => {
      expect(res).to.have.status(400);
      expect(res.body.success).to.equal('false');
      done();
    });
  });

  it(`should throw a validation exception`, async () => {
    return services.createUser(users.correct_user.name, users.correct_user.email, '123')
      .should.be.rejectedWith(
        errors.ValidationError, 
        'The password provided has to be between 8 and 32 characters.'
      );
  });
});
