import chai, { expect } from 'chai'; 
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import { Response } from 'superagent';
import app from '../../app';
import ButtonBuy from '../../Models/MJML/05.ButtonBuy';
import baseButton, { createdButton, buttonToCreate } from '../data/MJML/buttonBuy';

chai.use(chaiHttp);

describe('tests button buy', function () {
  let chaiHttpResponse: Response;

  before(async function () {
    sinon
      .stub(ButtonBuy, 'find')
      .resolves(baseButton);

    sinon
      .stub(ButtonBuy, 'create')
      .resolves(createdButton);
  });

  after(function () {
    (ButtonBuy.find as sinon.SinonStub).restore();
    (ButtonBuy.create as sinon.SinonStub).restore();
  });

  describe('get route', function () { 
    it('must return buttons with the ok status', async function () {
      chaiHttpResponse = await chai.request(app).get('/buttonbuy');
  
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(baseButton);
    });
  });

  describe('post route', function () {
    it('must return new created button with status 201', async function () {
      chaiHttpResponse = await chai.request(app)
        .post('/buttonbuy')
        .send(buttonToCreate);

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.be.deep.equal(createdButton);
    });
  });
});
