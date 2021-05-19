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


  describe('GET /api/v1/user/day/:date', function() {
    it('should return food item of that day', function(done) {
      agent.post('/api/v1/login')
          .send({
            email: 'kris@gmail.com',
            password: 'passwordike123',
          }).then(function() {
            agent.get('/api/v1/user/day/2021-05-12')
                .end(function(err, res) {
                  res.should.have.status(200);
                  res.should.be.json; // jshint ignore:line
                  res.body.should.be.a('array');
                  res.body[0].should.have.property('name');
                  res.body[0].name.should.equal('broccoli');
                  res.body[0].should.have.property('fat');
                  res.body[0].fat.should.equal(10);
                  res.body[0].should.have.property('protein');
                  res.body[0].protein.should.equal(100);
                  res.body[0].should.have.property('carbs');
                  res.body[0].carbs.should.equal(30);
                  res.body[0].should.have.property('created_at');
                  res.body[0].created_at.should
                      .equal('2021-05-11T21:00:00.000Z');
                  res.body[0].should.have.property('userId');
                  res.body[0].userId.should.equal(69);
                  res.body[0].should.have.property('amount');
                  res.body[0].amount.should.equal(1);
                });
            done();
          });
    });

    it('should not return food item of that day', function(done) {
      agent.post('/api/v1/login')
          .send({
            email: 'kris@gmail.com',
            password: 'passwordike',
          }).then(function() {
            agent.get('/api/v1/user/day/2021-05-10')
                .end(function(err, res) {
                  res.should.have.status(500);
                });
            done();
          });
      done();
    });
  });
});
