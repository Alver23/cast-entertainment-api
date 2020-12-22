// Dependencies
import { sign } from 'jsonwebtoken';

// Services
import { TokenService } from "../index";

// Mocks
import mocks from './mocks.json';
jest.mock('jsonwebtoken', () => ({
  sign: jest.fn().mockReturnValue('fake token'),
}));

jest.mock('@config/index', () => ({
  config: {
    jwt: {
      secret: 'fake secret',
      expires: '1m',
    },
  }
}));

describe('TokenService', () => {
  const fakeRepository = {
    create: jest.fn().mockResolvedValue(1),
    getRefreshToken: jest.fn().mockResolvedValue('token'),
    destroy: jest.fn().mockResolvedValue(1),
  }

  let service: TokenService;

  beforeEach(() => {
    service = new TokenService(fakeRepository);
  });

  it('should get an token', () => {
    const token = service.generateToken(mocks as any);
    expect(sign).toHaveBeenCalled();
    expect(token).toBe('fake token');
  });

  it('should call generateRefreshToken method successfully', async () => {
    const response = await service.generateRefreshToken(mocks as any);
    expect(fakeRepository.destroy).toHaveBeenCalledTimes(1);
    expect(fakeRepository.create).toHaveBeenCalledTimes(1);
    expect(response).toEqual(expect.any(String));
  });

  it('should call getRefreshToken method successfully', async () => {
    const response = await service.getRefreshToken('123');
    expect(fakeRepository.getRefreshToken).toHaveBeenCalledTimes(1);
    expect(response).toBe('token');
  });
});
