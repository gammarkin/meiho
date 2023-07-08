import chai, { expect } from 'chai'; 
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import { Response } from 'superagent';
import app from '../../app';
import Footer from '../../Models/MJML/06.Footer';
import baseFooters, { createdFooter, footerToCreate } from '../data/MJML/footer';

chai.use(chaiHttp);

describe('tests footers', function () {
  let chaiHttpResponse: Response;

  before(async function () {
    sinon
      .stub(Footer, 'find')
      .resolves(baseFooters);

    sinon
      .stub(Footer, 'create')
      .resolves(createdFooter);
  });

  after(function () {
    (Footer.find as sinon.SinonStub).restore();
    (Footer.create as sinon.SinonStub).restore();
  });

  describe('get route', function () { 
    it('must return footers with the ok status', async function () {
      chaiHttpResponse = await chai.request(app).get('/footer');
  
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(baseFooters);
    });
  });

  describe('post route', function () {
    it('must return new created footer with status 201', async function () {
      chaiHttpResponse = await chai.request(app)
        .post('/footer')
        .send(footerToCreate);

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.be.deep.equal(createdFooter);
    });
  });
});
