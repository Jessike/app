process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const knex = require('../knex');
chai.use(chaiHttp);
const agent = chai.request.agent(server);

describe('POST /api/v1/user/food', function() {
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

  it('should add a user food', function(done) {
    agent.post('/api/v1/login')
        .send({
          email: 'kris@gmail.com',
          password: 'passwordike123',
        }).then(function() {
          agent.post('/api/v1/food')
              .send({
                fat: 1,
                protein: 5,
                carbs: 15,
                name: 'carrot',
              }).then(function() {
                agent.post('/api/v1/user/food')
                    .send({
                      userId: 69,
                      amount: 1,
                      name: 'carrot',
                    })
                    .end(function(err, res) {
                      res.should.have.status(200);
                      res.should.be.json;
                      res.body.should.be.a('array');
                      res.body[0].should.have.property('userId');
                      res.body[0].userId.should.equal(69);
                      res.body[0].should.have.property('fat');
                      res.body[0].fat.should.equal(1);
                      res.body[0].should.have.property('protein');
                      res.body[0].protein.should.equal(5);
                      res.body[0].should.have.property('carbs');
                      res.body[0].carbs.should.equal(15);
                      res.body[0].should.have.property('amount');
                      res.body[0].amount.should.equal(1);
                      res.body[0].should.have.property('name');
                      res.body[0].name.should.equal('carrot');
                      done();
                    });
              });
        });
  });
});
