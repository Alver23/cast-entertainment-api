// Services
import { PersonController } from "../person";
import { BaseController } from "@api/shared/base-crud/infrastructure/controllers/base-controller";

describe('PersonController', () => {

  it('should get an class instance', () => {

    expect(
      new PersonController({} as any)
    ).toBeInstanceOf(BaseController)

  });
});
