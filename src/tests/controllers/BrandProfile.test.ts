import chai, { expect } from 'chai'; 
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import { Response } from 'superagent';
import app from '../../app';
import BrandProfile from '../../Models/Brand/BrandProfile';
import baseBrandProfiles, 
{ createdBrandProfile, brandProfileToCreate } from '../data/brandProfiles';

chai.use(chaiHttp);

describe('tests brand profiles', function () {
  let chaiHttpResponse: Response;

  before(async function () {
    sinon
      .stub(BrandProfile, 'find')
      .resolves(baseBrandProfiles);

    sinon
      .stub(BrandProfile, 'create')
      .resolves(createdBrandProfile);
  });

  after(function () {
    (BrandProfile.find as sinon.SinonStub).restore();
    (BrandProfile.create as sinon.SinonStub).restore();
  });

  describe('get route', function () { 
    it('must return brandProfiles with the ok status', async function () {
      chaiHttpResponse = await chai.request(app).get('/brandprofile');
  
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(baseBrandProfiles);
    });
  });

  describe('post route', function () {
    it('must return new created profile with status 201', async function () {
      chaiHttpResponse = await chai.request(app)
        .post('/brandprofile')
        .send(brandProfileToCreate);

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.be.deep.equal(createdBrandProfile);
    });
  });
});