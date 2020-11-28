// Services
import { EmergencyContactController  } from "../emergency-contact-controller";
import { BaseController } from "@api/shared/base-crud/infrastructure/controllers/base-controller";

describe('EmergencyContactController', () => {

  it('should get an class instance', () => {

    expect(
      new EmergencyContactController({} as any)
    ).toBeInstanceOf(BaseController)

  });
});
