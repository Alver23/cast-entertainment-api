// Services
import { StudentController } from "../student";
import { BaseController } from "@api/shared/base-crud/infrastructure/controllers/base-controller";

describe('StudentController', () => {

  it('should get an class instance', () => {

    expect(
      new StudentController({} as any)
    ).toBeInstanceOf(BaseController)

  });
});
