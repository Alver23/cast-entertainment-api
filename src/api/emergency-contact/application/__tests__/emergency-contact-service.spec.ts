// Services
import { EmergencyContactService } from "../emergency-contact-service";
import { BaseCrudService } from "@api/shared/base-crud/application/base-crud-service";

describe('EmergencyContactService', () => {

  it('should get an class instance', () => {

    expect(
      new EmergencyContactService({} as any)
    ).toBeInstanceOf(BaseCrudService);

  });

})
