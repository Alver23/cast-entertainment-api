// Services
import { PersonService } from "../person-service";
import { BaseCrudService } from "@api/shared/base-crud/application/base-crud-service";

// Mocks
jest.mock('@api/persons/application/dto/person', () => jest.fn());

describe('PersonService', () => {

  it('should get an class instance', () => {
    expect(
      new PersonService({} as any)
    ).toBeInstanceOf(BaseCrudService);

  });

})
