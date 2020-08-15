import { fakeResponse } from "../../__mocks__/fake-response";

export const mockUserController = {
  userController: {
    getUsers: (req, res, next) => fakeResponse(res),
    getUser: (req, res, next) => fakeResponse(res),
    createUser: (req, res, next) => fakeResponse(res),
  }
}
