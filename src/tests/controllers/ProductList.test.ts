import chai, { expect } from 'chai'; 
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import { Response } from 'superagent';
import app from '../../app';
import ProductList from '../../Models/Products/ProductList';
import baseproducts, { createdProduct, productToCreate } from '../data/products';

chai.use(chaiHttp);

describe('tests products', function () {
  let chaiHttpResponse: Response;

  before(async function () {
    sinon
      .stub(ProductList, 'find')
      .resolves(baseproducts);

    sinon
      .stub(ProductList, 'create')
      .resolves(createdProduct);
  });

  after(function () {
    (ProductList.find as sinon.SinonStub).restore();
    (ProductList.create as sinon.SinonStub).restore();
  });

  describe('get route', function () { 
    it('must return products with the ok status', async function () {
      chaiHttpResponse = await chai.request(app).get('/products');
  
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(baseproducts);
    });
  });

  describe('post route', function () {
    it('must return new created products with status 201', async function () {
      chaiHttpResponse = await chai.request(app)
        .post('/products')
        .send(productToCreate);

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.be.deep.equal(createdProduct);
    });
  });
});
