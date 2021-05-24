process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const knex = require('./../src/knex');
chai.use(chaiHttp);
// eslint-disable-next-line no-unused-vars
const should = chai.should();

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


  describe('GET /api/v1/food/:id', function() {
    it('should return a single food', function(done) {
      chai.request(server)
          .get('/api/v1/food/1')
          .end(function(err, res) {
            res.should.have.status(200);
            res.should.be.json; // jshint ignore:line
            res.body.should.be.a('object');
            res.body.should.have.property('name');
            res.body.name.should.equal('broccoli');
            res.body.should.have.property('fat');
            res.body.fat.should.equal(2);
            res.body.should.have.property('protein');
            res.body.protein.should.equal(10);
            res.body.should.have.property('carbs');
            res.body.carbs.should.equal(15);
            done();
          });
    });

    it('should not return a single food', function(done) {
      chai.request(server)
          .get('/api/v1/food/10')
          .end(function(err, res) {
            res.should.have.status(500);

            done();
          });
    });
  });
});
