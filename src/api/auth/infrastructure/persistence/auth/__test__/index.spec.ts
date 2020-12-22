// Repositories
import { AuthRepository } from "../index";

// Mocks
jest.mock('@api/persons/infrastructure/persistence/person-repository', () => ({
  PersonRepository: require('@mocks/fake-repository').default,
}));

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
