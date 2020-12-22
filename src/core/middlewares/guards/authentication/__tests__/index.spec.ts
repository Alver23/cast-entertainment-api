// Dependencies
import supertest from 'supertest';
import passport from "passport";

// Middlewares
import { authentication } from "../index";

// Mocks
import { fakeServer } from "@mocks/fake-server";
jest.unmock('@core/middlewares/guards/authentication');
jest.mock('@core/strategies/jwt', () => jest.fn());
jest.mock('passport', () => ({
  authenticate: (type, cb) => {
    return (req) => {
      req.login = (user, option, callback) => {
        return callback(null);
      };
      return cb(null, {});
    };
  },
}));

describe('Authentication', () => {

  fakeServer.get('/users', authentication.handler(), (req, res) => {
    res
      .status(200)
      .send('finally')
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get an status 200 when the user authenticated', () => {
    return supertest(fakeServer)
      .get('/users')
      .set('Accept', 'application/json')
      .expect(200);
  });

  it('should get an error when the user is empty', () => {
    jest.spyOn(passport, 'authenticate').mockImplementation((type, cb: any) => {
      return (req) => {
        req.login = (user, option, callback) => {
          return callback(null);
        };
        return cb(new Error());
      };
    });
    return supertest(fakeServer)
      .get('/users')
      .set('Accept', 'application/json')
      .expect(401);
  });

  it('should get an error when the user not is valid', () => {
    jest.spyOn(passport, 'authenticate').mockImplementation((type, cb: any) => {
      return (req) => {
        req.login = (user, option, callback) => {
          return callback(new Error('fake error'));
        };
        return cb(null, {});
      };
    });

    return supertest(fakeServer)
      .get('/users')
      .set('Accept', 'application/json')
      .expect(401);
  });

});
