// Controllers
import { ItineraryActivityController } from "../index";

// Shared
import { BaseController } from "@api/shared/base-crud/infrastructure/controllers/base-controller";

describe('ItineraryActivityController', () => {

  let controller: ItineraryActivityController;

  beforeEach(() => {
    controller = new ItineraryActivityController({} as any);
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should get an class instance', () => {
    expect(controller).toBeInstanceOf(BaseController)
  });

});
