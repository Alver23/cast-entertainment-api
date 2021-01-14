// Dependencies
import { getMockReq, getMockRes } from '@jest-mock/express'

// Services
import { UserController } from "../index";
import { BaseController } from "@api/shared/base-crud/infrastructure/controllers/base-controller";

describe('UserController', () => {

  let controller: UserController;
  const { res: resMock, clearMockRes } = getMockRes();

  const fakeService = {
    getUserMenus: jest.fn().mockResolvedValue([]),
  };

  beforeEach(() => {
    controller = new UserController(fakeService as any);
  });

  it('should get an class instance', () => {
    expect(controller).toBeInstanceOf(BaseController)
  });

  it('should get the user menus', async () => {
    const req = getMockReq({
      params: { id: 1},
    });

    const res = {
      ...resMock,
      responseJson: jest.fn(),
    };
    await controller.getMenus(req, res as any);
    expect(res.responseJson).toHaveBeenCalled();
    expect(fakeService.getUserMenus).toHaveBeenCalled();
  });
});
