import { fakeResponse } from "@mocks/fake-response";

export const roleControllerMock = {
  roleController: {
    getRoles: (req, res, next) => fakeResponse(res),
    getRole: (req, res, next) => fakeResponse(res),
  }
}
