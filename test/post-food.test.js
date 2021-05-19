process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const knex = require('../knex');
chai.use(chaiHttp);


describe('POST /api/v1/food', function() {
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

  it('should add a food', function(done) {
    chai.request(server)
        .post('/api/v1/food')
        .send({
          name: 'carrot',
          fat: 1,
          protein: 5,
          carbs: 15,
        })
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body[0].should.have.property('name');
          res.body[0].name.should.equal('carrot');
          res.body[0].should.have.property('fat');
          res.body[0].fat.should.equal(1);
          res.body[0].should.have.property('protein');
          res.body[0].protein.should.equal(5);
          res.body[0].should.have.property('carbs');
          res.body[0].carbs.should.equal(15);
          done();
        });
  });
});
