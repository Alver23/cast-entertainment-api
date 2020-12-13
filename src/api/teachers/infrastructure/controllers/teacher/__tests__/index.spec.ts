// Dependencies
import { getMockReq, getMockRes } from '@jest-mock/express'

// Controllers
import { TeacherController } from "../index";

// Shared
import { BaseController } from "@api/shared/base-crud/infrastructure/controllers/base-controller";

describe('TeacherController', () => {

  let controller: TeacherController;

  const { res: resMock, clearMockRes } = getMockRes();

  const fakeService = {
    createMany: jest.fn().mockResolvedValue([]),
  }

  beforeEach(() => {
    controller = new TeacherController(fakeService as any);
  });

  afterEach(() => {
    jest.clearAllMocks();
    clearMockRes();
  })

  it('should get an class instance', () => {
    expect(controller).toBeInstanceOf(BaseController)
  });

  it('should create multiple records succesfully', async () => {
    const req = getMockReq({
      body: { artistIds: [1] },
    });

    const res = {
      ...resMock,
      responseJson: jest.fn(),
    };
    await controller.createMany(req, res as any);
    expect(res.responseJson).toHaveBeenCalled();
    expect(fakeService.createMany).toHaveBeenCalled();
  });
});
