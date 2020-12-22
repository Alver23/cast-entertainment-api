// Dependencies
import bcrypt from 'bcrypt';

// Services
import { AuthService } from "../index";

// Exceptions
import { UnauthenticatedException } from "@api/auth/domain/exceptions/unauthenticated";

describe('AuthService', () => {

  let service: AuthService;
  const fakeTokenService = {
    generateToken: jest.fn().mockReturnValue('token'),
    generateRefreshToken: jest.fn().mockResolvedValue('refreshToken'),
    getRefreshToken: jest.fn()
      .mockResolvedValue({
        user: {
          toJSON: jest.fn().mockReturnValue({ id: 1}),
          getPerson: jest.fn().mockResolvedValue({ id: 1}),
          getRoles: jest.fn().mockResolvedValue([]),
        }
      }),
    destroyToken: jest.fn().mockResolvedValue(1),
  };

  const fakeAuthRepository = {
    findUserByEmail: jest.fn()
      .mockResolvedValue({
        toJSON: () => ({ id: 1}),
        getUser: jest.fn()
          .mockResolvedValue({
            toJSON: () => ({ id: 1}),
            getRoles: jest.fn().mockResolvedValue([]),
          })
      })
  };

  const expectedProperties = () => ({
    id: expect.any(Number),
    roles: expect.any(Array),
  });

  beforeEach(() => {
    service = new AuthService(fakeAuthRepository, fakeTokenService as any);
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  describe('getUser method', () => {
    it('should call the method successfully', async () => {
      const response = await service.getUser('123');
      expect(response)
        .toEqual(
          expect.objectContaining({
            ...expectedProperties(),
          })
        );
    });
  });

  describe('login method', () => {
    it('should call the method successfully', async () => {
      jest
        .spyOn(bcrypt, 'compare')
        .mockResolvedValue(true);

      const response = await service.login('123', '123');
      expect(response)
        .toEqual(
          expect.objectContaining({
            ...expectedProperties(),
          })
        );
    });

    it('should get an error when call the method and password is incorrect', async () => {
      jest
        .spyOn(bcrypt, 'compare')
        .mockResolvedValue(false);

      await expect(async () => {
        await service.login('123', '123')
      }).rejects.toBeInstanceOf(UnauthenticatedException);
    })
  });

  describe('createToken method', () => {
    it('should call the method successfully', async () => {
      const response = await service.createToken({} as any);
      expect(response)
        .toEqual(
          expect.objectContaining({
            token: expect.any(String),
            refreshToken: expect.any(String),
          }),
        );
    });

  });

  describe('createTokenByRefreshtoken method', () => {
    it('should call the method successfully', async () => {
      const response = await service.createTokenByRefreshToken('123');
      expect(fakeTokenService.destroyToken).toHaveBeenCalledTimes(1)
      expect(response)
        .toEqual(
          expect.objectContaining({
            token: expect.any(String),
            refreshToken: expect.any(String),
          }),
        );
    });

    it('should get an error when call the getRefreshToken method return empty', async () => {
      jest
        .spyOn(fakeTokenService, 'getRefreshToken')
        .mockResolvedValue(false);

      await expect(async () => {
        await service.createTokenByRefreshToken('123')
      }).rejects.toBeInstanceOf(UnauthenticatedException);
    })
  });

});
