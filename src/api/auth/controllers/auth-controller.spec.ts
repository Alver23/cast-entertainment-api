// Dependencies
import passport from "passport";

// Controllers
import { authController } from "./auth-controller";

// Mocks
import mocks from '@api/auth/mocks.json';
import { mockRequest, mockResponse } from '@mocks/fake-request';

jest.mock('@api/auth/services', () => require('@api/auth/services/auth-service-mock').authServiceMock);
jest.mock('passport', () => ({
  authenticate: (type, cb) => {
    return (req) => {
      req.login = (user, option, callback) => {
        return callback(null);
      };
      return cb(null, mocks);
    };
  },
}));
jest.mock('@core/strategies/basic', () => jest.fn());

describe('AuthController', () => {

  describe('login method', () => {

    it('should authenticate the user', async () => {
      const req = mockRequest({ body: mocks });
      const res = mockResponse();
      const next = jest.fn();
      await authController.login(req, res, next);
      expect(res.json).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
    });

    it('should get an error when the user is empty', async () => {
      jest.spyOn(passport, 'authenticate').mockImplementation((type, cb: any) => {
        return (req) => {
          req.login = (user, option, callback) => {
            return callback(null);
          };
          return cb(new Error());
        };
      })
      const req = mockRequest({ body: mocks });
      const res = mockResponse();
      const next = jest.fn();
      await authController.login(req, res, next);
      expect(next).toHaveBeenCalled();
      expect(res.json).not.toHaveBeenCalled();
    });

    it('should get an error when the user not is valid', async () => {
      jest.spyOn(passport, 'authenticate').mockImplementation((type, cb: any) => {
        return (req) => {
          req.login = (user, option, callback) => {
            return callback(new Error());
          };
          return cb(null, mocks);
        };
      })
      const req = mockRequest({ body: mocks });
      const res = mockResponse();
      const next = jest.fn();
      await authController.login(req, res, next);
      expect(next).toHaveBeenCalled();
      expect(res.json).not.toHaveBeenCalled();
    });
  });

  describe('refreshToken method', () => {
    it('should the refresh token', async () => {
      const req = mockRequest({ body: {refreshToken: '12'} });
      const res = mockResponse();
      const next = jest.fn();
      await authController.refreshToken(req, res, next);
      expect(res.json).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
    });
    it('should return an error', async () => {
      const req: any = mockRequest({});
      const res: any = mockResponse();
      const next: any = jest.fn();
      await authController.refreshToken(req, res, next);
      expect(next).toHaveBeenCalled();
      expect(res.json).not.toHaveBeenCalled();
    });
  });
  
});
