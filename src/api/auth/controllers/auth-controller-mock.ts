// Mocks
import { fakeResponse } from "@mocks/fake-response";

export const authControllerMock = {
  authController: {
    login: (req, res, next) => fakeResponse(res),
    refreshToken: (req, res, next) => fakeResponse(res),
  }
}
