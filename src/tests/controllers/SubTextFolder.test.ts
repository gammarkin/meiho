import chai, { expect } from 'chai'; 
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import { Response } from 'superagent';
import app from '../../app';
import SubTextFolder from '../../Models/MJML/04.SubTextFolder';
import baseSubTextFolders, 
{ createdSubTextFolder, subTextFolderToBeCreated } from '../data/MJML/subtextfolders';

chai.use(chaiHttp);

describe('tests sub-text folder', function () {
  let chaiHttpResponse: Response;

  before(async function () {
    sinon
      .stub(SubTextFolder, 'find')
      .resolves(baseSubTextFolders);

    sinon
      .stub(SubTextFolder, 'create')
      .resolves(createdSubTextFolder);
  });

  after(function () {
    (SubTextFolder.find as sinon.SinonStub).restore();
    (SubTextFolder.create as sinon.SinonStub).restore();
  });

  describe('get route', function () { 
    it('must return sub-text folders with the ok status', async function () {
      chaiHttpResponse = await chai.request(app).get('/subtextfolder');
  
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(baseSubTextFolders);
    });
  });

  describe('post route', function () {
    it('must return new created sub-text folder with status 201', async function () {
      chaiHttpResponse = await chai.request(app)
        .post('/subtextfolder')
        .send(subTextFolderToBeCreated);

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.be.deep.equal(createdSubTextFolder);
    });
  });
});
