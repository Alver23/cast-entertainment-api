// Dependencies
import passport from "passport";
import { getMockReq, getMockRes } from '@jest-mock/express';

// Controllers
import { AuthController } from "../index";

// Mocks
jest.mock('@core/strategies/basic', () => jest.fn());
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

describe('AuthController', () => {
  let controller: AuthController;
  const authService = {
    login: jest.fn().mockResolvedValue([]),
    createToken: jest.fn().mockResolvedValue([]),
    createTokenByRefreshToken: jest.fn().mockResolvedValue([]),
  };

  const req = getMockReq();
  const { res: resMock, next, clearMockRes } = getMockRes();
  const res: any = {
    ...resMock,
    responseJson: jest.fn(),
  };

  beforeEach(() => {
    controller = new AuthController(authService);
  });

  afterEach(() => {
    jest.clearAllMocks();
    clearMockRes();
  });

  describe('login method', () => {
    it('should authenticate the user', async () => {
      await controller.login(req, res, next);
      expect(res.responseJson).toHaveBeenCalled();
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
      });

      await controller.login(req, res, next);
      expect(next).toHaveBeenCalled();
      expect(res.responseJson).not.toHaveBeenCalled();
    });

    it('should get an error when the user not is valid', async () => {
      jest.spyOn(passport, 'authenticate').mockImplementation((type, cb: any) => {
        return (req) => {
          req.login = (user, option, callback) => {
            return callback(new Error());
          };
          return cb(null, {});
        };
      })
      await controller.login(req, res, next);
      expect(next).toHaveBeenCalled();
      expect(res.responseJson).not.toHaveBeenCalled();
    });
  });

  describe('refreshToken method', () => {

    it('should the call the method successfully', async () => {
      const req = getMockReq({  body: {refreshToken: '12'} });
      await controller.refreshToken(req, res);
      expect(res.responseJson).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
    });
  });

});
