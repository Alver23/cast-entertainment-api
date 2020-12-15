// Controllers
import { ActivityController } from "../index";

// Shared
import { BaseController } from "@api/shared/base-crud/infrastructure/controllers/base-controller";

describe('ActivityController', () => {

  let controller: ActivityController;

  beforeEach(() => {
    controller = new ActivityController({} as any);
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should get an class instance', () => {
    expect(controller).toBeInstanceOf(BaseController)
  });

});
