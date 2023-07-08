import chai, { expect } from 'chai'; 
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import { Response } from 'superagent';
import app from '../../app';
import Styles from '../../Models/Styles';
import baseStyle, { createdStyles, stylesToCreate } from '../data/styles';

chai.use(chaiHttp);

describe('tests styles', function () {
  let chaiHttpResponse: Response;

  before(async function () {
    sinon
      .stub(Styles, 'find')
      .resolves(baseStyle);

    sinon
      .stub(Styles, 'create')
      .resolves(createdStyles);
  });

  after(function () {
    (Styles.find as sinon.SinonStub).restore();
    (Styles.create as sinon.SinonStub).restore();
  });

  describe('get route', function () { 
    it('must return styles with the ok status', async function () {
      chaiHttpResponse = await chai.request(app).get('/styles');
  
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(baseStyle);
    });
  });

  describe('post route', function () {
    it('must return new created style with status 201', async function () {
      chaiHttpResponse = await chai.request(app)
        .post('/styles')
        .send(stylesToCreate);

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.be.deep.equal(createdStyles);
    });
  });
});
