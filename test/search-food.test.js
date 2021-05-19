process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const knex = require('../knex');
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


  describe('GET /api/v1//food/search/:keyword', function() {
    it('should return food items', function(done) {
      chai.request(server)
          .get('/api/v1//food/search/bro')
          .end(function(err, res) {
            res.should.have.status(200);
            res.should.be.json; // jshint ignore:line
            res.body.should.be.a('array');
            res.body[0].should.have.property('name');
            res.body[0].name.should.equal('broccoli');
            res.body[0].should.have.property('fat');
            res.body[0].fat.should.equal(2);
            res.body[0].should.have.property('protein');
            res.body[0].protein.should.equal(10);
            res.body[0].should.have.property('carbs');
            res.body[0].carbs.should.equal(15);
            done();
          });
    });

    it('should not return food items', function(done) {
      chai.request(server)
          .get('/api/v1/food/search/x')
          .end(function(err, res) {
            res.should.have.status(500);

            done();
          });
    });
  });
});
