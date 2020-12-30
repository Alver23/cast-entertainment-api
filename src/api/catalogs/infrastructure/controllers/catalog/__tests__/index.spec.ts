// Dependencies
import { getMockReq, getMockRes } from '@jest-mock/express'

// Controllers
import { CatalogController } from "../index";

// Shared
import { BaseController } from "@api/shared/base-crud/infrastructure/controllers/base-controller";

describe('CatalogController', () => {

  let controller: CatalogController;
  const { res: resMock, clearMockRes } = getMockRes();
  const fakeService = {
    getByParentId: jest.fn()
      .mockResolvedValue(1),
  }

  beforeEach(() => {
    controller = new CatalogController(fakeService as any);
  });

  afterEach(() => {
    jest.clearAllMocks();
    clearMockRes();
  })

  it('should get an class instance', () => {
    expect(controller).toBeInstanceOf(BaseController)
  });

  it('should get the catalag by parent id', async () => {
    const req = getMockReq({
      params: { id: 1},
    });

    const res = {
      ...resMock,
      responseJson: jest.fn(),
    };
    await controller.getByParentId(req, res as any);
    expect(res.responseJson).toHaveBeenCalled();
    expect(fakeService.getByParentId).toHaveBeenCalled();
  });

});
