// Repositories
import { TokenRepository } from "../index";

// Mocks
jest.mock('@database/models/token', () => require('@database/models/token/token-mock').tokenMock);

describe('TokenRepository', () => {
  let repository: TokenRepository;

  beforeEach(() => {
    repository = new TokenRepository();
  });

  it('should creating a new register', async () => {
    const data = { token: '123', userId: 1};
    const response = await repository.create(data);
    expect(response)
      .toEqual(
        expect.objectContaining({
          userId: expect.any(Number),
          token: expect.any(String),
        })
      )
  });

  it('should deleting a register', async () => {
    const response = await repository.destroy(2);
    expect(response).toBe(1);
  });

  it('should get a refresh token', async () => {
    const response = await repository.getRefreshToken('123');
    expect(response)
      .toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          token: expect.any(String),
        })
      )
  });

});


