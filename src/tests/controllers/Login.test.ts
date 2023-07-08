import chai, { expect } from 'chai'; 
import sinon, { SinonStub } from 'sinon';
import chaiHttp from 'chai-http';
import { Response } from 'superagent';
import app from '../../app';
import Login from '../../Models/Login';
import baseUsers, { createdUser, userToCreate } from '../data/login';

chai.use(chaiHttp);

describe('tests login', function () {
  let chaiHttpResponse: Response;
  let findStub: SinonStub;
  let createStub: SinonStub;
  let findOneStub: SinonStub;
  let findByIdStub: SinonStub;

  const USER_NOT_FOUND = 'User not found';
  const testerEmail = 'tester@tester.com';

  before(async function () {
    findStub = sinon
      .stub(Login, 'find');

    createStub = sinon
      .stub(Login, 'create');

    findOneStub = sinon
      .stub(Login, 'findOne');

    findByIdStub = sinon
      .stub(Login, 'findById');
  });

  after(function () {
    (Login.find as sinon.SinonStub).restore();
    (Login.create as sinon.SinonStub).restore();
  });

  describe('post route', function () {
    it('must return error if user already exists', async function () {
      findOneStub.returns({ 
        username: 'test', 
        password: 'bolinha',
        email: 'test@tester.com', 
        role: 'user',
      });

      chaiHttpResponse = await chai.request(app)
        .post('/login')
        .send({ username: 'tester', email: testerEmail, password: 'bolinha' });

      expect(chaiHttpResponse.status).to.be.eq(400);
      expect(chaiHttpResponse.body.message).to.be.eq('User already exists');
    });

    it('must return new created user with status 201', async function () {
      findOneStub.returns(undefined);
      createStub.returns(createdUser);

      chaiHttpResponse = await chai.request(app)
        .post('/login')
        .send(userToCreate);

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.be.deep.equal(createdUser);
    });
  });

  describe('post check route', function () {
    const route = '/login/check';

    it('expects to return message with user not found', async function name() {
      findStub.returns(undefined);

      chaiHttpResponse = await chai.request(app)
        .post(route)
        .send({ email: 'test@tester.com', password: '123' });

      expect(chaiHttpResponse.status).to.be.eq(404);
      expect(chaiHttpResponse.body.message).to.be.eq(USER_NOT_FOUND);
    });

    it('expects to return message that the password is wrong', async function () {
      findStub.returns([baseUsers[0]]);

      chaiHttpResponse = await chai.request(app)
        .post(route)
        .send({ email: testerEmail, password: '321' });

      expect(chaiHttpResponse.status).to.be.eq(401);
      expect(chaiHttpResponse.body.message).to.be.eq('Invalid password');
    });

    it('must return user', async function () {
      findStub.returns([baseUsers[0]]);

      chaiHttpResponse = await chai.request(app)
        .post(route)
        .send({ email: testerEmail, password: '123' });

      expect(chaiHttpResponse.status).to.be.eq(200);
    });
  });

  describe('put password route', function () {
    it('expects error user not found', async function () {
      findByIdStub.returns('');

      chaiHttpResponse = await chai.request(app)
        .put('/login/password/748')
        .send({ password: '123' });

      expect(chaiHttpResponse.status).to.be.eq(404);
    });

    it('must return a empty body with status 204', async function () {
      findByIdStub.returns({ save: () => 0 });

      chaiHttpResponse = await chai.request(app)
        .put(`/login/password/${createdUser._id.$oid}`)
        .send({ password: '123' });

      expect(chaiHttpResponse.status).to.be.eq(204);
    });
  });

  describe('put history route', function () {
    it('expects error user not found', async function () {
      findByIdStub.returns(undefined);

      chaiHttpResponse = await chai.request(app)
        .put('/login/history/123')
        .send({ message: 'err' });

      expect(chaiHttpResponse.status).to.be.eq(404);
    });

    it('expects error _id No history with that id', async function () {
      findByIdStub.returns([baseUsers[0]]);

      chaiHttpResponse = await chai.request(app)
        .put('/login/history/123')
        .send({ message: 'hey' });

      expect(chaiHttpResponse.status).to.be.eq(404);
    });

    it('must return status 204 with no body', async function () {
      findByIdStub.returns({ save: () => 0 });

      chaiHttpResponse = await chai.request(app)
        .put(`/login/history/${createdUser._id.$oid}`)
        .send({ message: 'hey', date: '2023-06-27T21:39:43.054+00:00', campaign: 'promotional' });

      expect(chaiHttpResponse.status).to.be.eq(204);
    });
  });
});
