// Services
import { StudentService } from "../index";
import { BaseCrudService } from "@api/shared/base-crud/application/base-crud-service";

jest.mock('../dto/student/item', () => jest.fn());
jest.mock('../dto/student/items', () => jest.fn());

describe('StudentService', () => {

  it('should get an class instance', () => {

    expect(
      new StudentService({} as any)
    ).toBeInstanceOf(BaseCrudService);

  });

})
