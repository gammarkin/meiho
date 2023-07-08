import chai, { expect } from 'chai'; 
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import { Response } from 'superagent';
import app from '../../app';
import Components from '../../Models/Components';
import baseComponents, { createdComponent, componentToCreate } from '../data/component';

chai.use(chaiHttp);

describe('tests components', function () {
  let chaiHttpResponse: Response;

  before(async function () {
    sinon
      .stub(Components, 'find')
      .resolves(baseComponents);

    sinon
      .stub(Components, 'create')
      .resolves(createdComponent);
  });

  after(function () {
    (Components.find as sinon.SinonStub).restore();
    (Components.create as sinon.SinonStub).restore();
  });

  describe('get route', function () { 
    it('must return components with the ok status', async function () {
      chaiHttpResponse = await chai.request(app).get('/components');
  
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(baseComponents);
    });
  });

  describe('post route', function () {
    it('must return new created component with status 201', async function () {
      chaiHttpResponse = await chai.request(app)
        .post('/components')
        .send(componentToCreate);

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.be.deep.equal(createdComponent);
    });
  });
});
