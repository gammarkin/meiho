import chai, { expect } from 'chai'; 
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import { Response } from 'superagent';
import app from '../../app';
import HeroBanner from '../../Models/MJML/02.HeroBanner';
import baseHeroBanner, { createdHeroBanner, heroBannerToCreate } from '../data/MJML/heroBanner';

chai.use(chaiHttp);

describe('tests hero banner', function () {
  let chaiHttpResponse: Response;

  before(async function () {
    sinon
      .stub(HeroBanner, 'find')
      .resolves(baseHeroBanner);

    sinon
      .stub(HeroBanner, 'create')
      .resolves(createdHeroBanner);
  });

  after(function () {
    (HeroBanner.find as sinon.SinonStub).restore();
    (HeroBanner.create as sinon.SinonStub).restore();
  });

  describe('get route', function () { 
    it('must return footers with the ok status', async function () {
      chaiHttpResponse = await chai.request(app).get('/herobanner');
  
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(baseHeroBanner);
    });
  });

  describe('post route', function () {
    it('must return new created footer with status 201', async function () {
      chaiHttpResponse = await chai.request(app)
        .post('/herobanner')
        .send(heroBannerToCreate);

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.be.deep.equal(createdHeroBanner);
    });
  });
});
