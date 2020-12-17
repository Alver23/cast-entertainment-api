// Controllers
import { GroupController } from "../index";

// Shared
import { BaseController } from "@api/shared/base-crud/infrastructure/controllers/base-controller";

describe('GroupController', () => {

  let controller: GroupController;

  beforeEach(() => {
    controller = new GroupController({} as any);
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should get an class instance', () => {
    expect(controller).toBeInstanceOf(BaseController)
  });

});
