import { IsPersonAlreadyExistConstraint } from "../index";

jest.mock('@api/persons/infrastructure/persistence/person-repository', () => ({
  PersonRepository: jest.fn()
    .mockImplementationOnce(() => ({
      getPersonByEmail: jest.fn().mockResolvedValue(true),
    }))
    .mockImplementationOnce(() => ({
      getPersonByEmail: jest.fn().mockRejectedValue(new Error('fake error')),
    }))
}))

describe('IsPersonAlreadyExist', () => {
  let validationService: IsPersonAlreadyExistConstraint;
  const args: any = {
    object: {
      personId: 1,
    }
  }

  beforeEach(() => {
    validationService = new IsPersonAlreadyExistConstraint();
  });

  describe('validate method', () => {
    const cases = [
      [false, 'fake@fake.com'],
      [true, 'fake@fake.com']
    ];

    it.each(cases)('should return %s', async (expected: boolean, email: string) => {
      const response = await validationService.validate(email, args);
      expect(response).toBe(expected);
      console.log('response', response);
    });
  });


});
