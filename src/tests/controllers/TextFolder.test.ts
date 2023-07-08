import chai, { expect } from 'chai'; 
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import { Response } from 'superagent';
import app from '../../app';
import TextFolder from '../../Models/MJML/03.TextFolder';
import baseTextFolder, { createdTextFolder, textFolderToCreate } from '../data/MJML/textFolder';

chai.use(chaiHttp);

describe('tests text folder', function () {
  let chaiHttpResponse: Response;

  before(async function () {
    sinon
      .stub(TextFolder, 'find')
      .resolves(baseTextFolder);

    sinon
      .stub(TextFolder, 'create')
      .resolves(createdTextFolder);
  });

  after(function () {
    (TextFolder.find as sinon.SinonStub).restore();
    (TextFolder.create as sinon.SinonStub).restore();
  });

  describe('get route', function () { 
    it('must return text folders with the ok status', async function () {
      chaiHttpResponse = await chai.request(app).get('/textfolder');
  
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(baseTextFolder);
    });
  });

  describe('post route', function () {
    it('must return new created text folder with status 201', async function () {
      chaiHttpResponse = await chai.request(app)
        .post('/textfolder')
        .send(textFolderToCreate);

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.be.deep.equal(createdTextFolder);
    });
  });
});
