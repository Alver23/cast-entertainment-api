// Controllers
import { TeacherController } from "../index";

// Shared
import { BaseController } from "@api/shared/base-crud/infrastructure/controllers/base-controller";

describe('TeacherController', () => {

  it('should get an class instance', () => {

    expect(
      new TeacherController({} as any)
    ).toBeInstanceOf(BaseController)

  });
});
