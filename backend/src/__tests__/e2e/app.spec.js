import { request, should, use } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

should();
use(chaiHttp);

describe('Test if root app', () => {
  describe('Test if root route welcome and 404 running', () => {
    it('should call root route success', (done) => {
      request(app)
        .get('/')
        .end((err, res) => {
          res.body.message.should.equal('Welcome to FlixFlex');
          res.status.should.be.equal(200);
          if (err) done(err);
          done();
        });
    });
    it('should return 404 if route not found', (done) => {
      request(app)
        .get('/abc')
        .end((err, res) => {
          res.body.errorMessage.should.equal('Route not found');
          res.status.should.be.equal(404);
          if (err) done(err);
          done();
        });
    });
  });
});
