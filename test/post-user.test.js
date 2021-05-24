process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const knex = require('./../src/knex');
chai.use(chaiHttp);


describe('POST /api/v1/users', function() {
  beforeEach(function(done) {
    knex.migrate.rollback()
        .then(function() {
          knex.migrate.latest()
              .then(function() {
                return knex.seed.run()
                    .then(function() {
                      done();
                    });
              });
        });
  });

  afterEach(function(done) {
    knex.migrate.rollback()
        .then(function() {
          done();
        });
  });

  it('should add a user', function(done) {
    chai.request(server)
        .post('/api/v1/users')
        .send({
          email: 'Fox@gmail.com',
          password: 'password',
        })
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('email');
          res.body.email.should.equal('Fox@gmail.com');
          res.body.should.have.property('hash');
          done();
        });
  });
});

