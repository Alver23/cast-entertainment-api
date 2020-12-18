// Services
import { UserController } from "../index";
import { BaseController } from "@api/shared/base-crud/infrastructure/controllers/base-controller";

describe('UserController', () => {

  it('should get an class instance', () => {

    expect(
      new UserController({} as any)
    ).toBeInstanceOf(BaseController)

  });
});
