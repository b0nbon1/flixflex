import { request, should, use } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

should();
use(chaiHttp);

describe('Test Genres', () => {
  describe('api/v1/genre create', () => {
    it('should create genre successfully', (done) => {
      request(app)
        .post('/api/v1/genre')
        .send({
          name: 'genre example',
          description: 'genre test example description',
        })
        .end((err, res) => {
          res.body.message.should.equal('Successfully created genre');
          res.status.should.be.equal(201);
          if (err) done(err);
          done();
        });
    });
  });
});
