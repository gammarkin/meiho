import chai, { expect } from 'chai'; 
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import { Response } from 'superagent';
import app from '../../app';
import Header from '../../Models/MJML/01.Header';
import baseHeaders, { createdHeader, headerToCreate } from '../data/MJML/header';

chai.use(chaiHttp);

describe('tests header', function () {
  let chaiHttpResponse: Response;

  before(async function () {
    sinon
      .stub(Header, 'find')
      .resolves(baseHeaders);

    sinon
      .stub(Header, 'create')
      .resolves(createdHeader);
  });

  after(function () {
    (Header.find as sinon.SinonStub).restore();
    (Header.create as sinon.SinonStub).restore();
  });

  describe('get route', function () { 
    it('must return headers with the ok status', async function () {
      chaiHttpResponse = await chai.request(app).get('/header');
  
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(baseHeaders);
    });
  });

  describe('post route', function () {
    it('must return new created header with status 201', async function () {
      chaiHttpResponse = await chai.request(app)
        .post('/header')
        .send(headerToCreate);

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.be.deep.equal(createdHeader);
    });
  });
});
