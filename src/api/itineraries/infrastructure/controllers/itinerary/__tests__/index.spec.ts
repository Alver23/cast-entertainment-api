// Controllers
import { ItineraryController } from "../index";

// Shared
import { BaseController } from "@api/shared/base-crud/infrastructure/controllers/base-controller";

describe('ItineraryController', () => {

  let controller: ItineraryController;

  beforeEach(() => {
    controller = new ItineraryController({} as any);
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should get an class instance', () => {
    expect(controller).toBeInstanceOf(BaseController)
  });

});
