import { request, should, use } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

should();
use(chaiHttp);

describe('Test movie endpoints', () => {
  describe('Test create endpoint', () => {
    it('should Successfully create a movie', (done) => {
      request(app)
        .post('/api/v1/movie')
        .send({
          name: 'movie',
          length: '123min',
          status: 'coming_soon',
          rated: 'r',
          dateOfRelease: new Date(),
          cast: 'Vin disel, brian, ana',
          creators: 'dope guy, nice guy, bad guy',
          trailerUrl: 'https://www.youtube.com/watch?v=aSiDu3Ywi8E',
        })
        .end((err, res) => {
          res.body.message.should.equal('Successfully created movie');
          res.status.should.be.equal(201);
          if (err) done(err);
          done();
        });
    });
  });
});
