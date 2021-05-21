process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const knex = require('../knex');
chai.use(chaiHttp);
const agent = chai.request.agent(server);

describe('PUT /api/v1/user/food/:id', function() {
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


  it('should update user food', function(done) {
    agent.post('/api/v1/login')
        .send({
          email: 'kris@gmail.com',
          password: 'passwordike123',
        }).then(function() {
          agent.post('/api/v1/user/food')
              .send({
                id: 1,
                name: 'fish',
                amount: 1,
                fat: 20,
                protein: 12,
                carbs: 2,
                userId: 69,
              }).then(function() {
                agent.put('/api/v1/user/food/1')
                    .send({
                      name: 'carrot',
                      amount: 1,
                      fat: 2,
                      protein: 2,
                      carbs: 2,
                      userId: 69,
                    })
                    .end(function(err, res) {
                      res.should.have.status(200);
                      res.should.be.json; // jshint ignore:line
                      res.body.should.be.a('array');
                      res.body.should.have.property('id');
                      res.body.id.should.equal(1);
                      res.body.should.have.property('name');
                      res.body.name.should.equal('carrot');
                      res.body.should.have.property('amount');
                      res.body.amount.should.equal(1);
                      res.body.should.have.property('fat');
                      res.body.fat.should.equal(2);
                      res.body.should.have.property('protein');
                      res.body.protein.should.equal(2);
                      res.body.should.have.property('carbs');
                      res.body.carbs.should.equal(2);
                      res.body.should.have.property('userId');
                      res.body.userId.should.equal(69);
                    });
                done();
              });
          done();
        });
  });
});
