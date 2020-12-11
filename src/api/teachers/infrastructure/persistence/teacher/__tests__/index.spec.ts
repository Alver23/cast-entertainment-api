// Repositories
import { TeacherRepository } from "../index";

// Shared
import { BaseCrudRepository } from "@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository";

// Mocks
jest.mock('@database/models/teacher', () => jest.fn());

describe('TeacherRepository', () => {

  it('should get an class instance', () => {

    expect(
      new TeacherRepository()
    ).toBeInstanceOf(BaseCrudRepository)

  });

});
