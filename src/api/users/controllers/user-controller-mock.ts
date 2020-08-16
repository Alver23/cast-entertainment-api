import { fakeResponse } from "@mocks/fake-response";

export const userControllerMock = {
  userController: {
    getUsers: (req, res, next) => fakeResponse(res),
    getUser: (req, res, next) => fakeResponse(res),
    createUser: (req, res, next) => fakeResponse(res),
  }
}
