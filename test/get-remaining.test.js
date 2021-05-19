process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const knex = require('../knex');
chai.use(chaiHttp);
// eslint-disable-next-line no-unused-vars
const should = chai.should();
const agent = chai.request.agent(server);

describe('API Routes', function() {
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


  describe('GET /api/v1/user/goal/:date', function() {
    it('should return remaining calories of that day', function(done) {
      agent.post('/api/v1/login')
          .send({
            email: 'kris@gmail.com',
            password: 'passwordike123',
          }).then(function() {
            agent.get('/api/v1/user/goal/2021-05-12')
                .end(function(err, res) {
                  res.should.have.status(200);
                  res.should.be.json; // jshint ignore:line
                  res.body.should.be.a('object');
                  res.body.should.have.property('remainingCals');
                  res.body.remainingCals.should.equal(0);
                });
            done();
          });
    });

    it('should not return remaining calories of that day', function(done) {
      agent.post('/api/v1/login')
          .send({
            email: 'kris@gmail.com',
            password: 'passwordike',
          }).then(function() {
            agent.get('/api/v1/user/goal/2021-05-10')
                .end(function(err, res) {
                  res.should.have.status(500);
                });
            done();
          });
      done();
    });
  });
});
