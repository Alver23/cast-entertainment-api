// Repositories
import { AuthRepository } from "../index";

describe('AuthRepository', () => {
  let repository: AuthRepository;

  beforeEach(() => {
    repository = new AuthRepository();
  });

  it('should find the person by email', async () => {
    const response = await repository.findUserByEmail('email');
    expect(response).toBe(1);
  });
});
