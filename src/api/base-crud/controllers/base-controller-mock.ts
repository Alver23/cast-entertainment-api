// Mocks
import { fakeResponse } from "@mocks/fake-response";

export const baseControllerMock = {
  getAll: (req, res, next) => fakeResponse(res),
  getById: (req, res, next) => fakeResponse(res),
  create: (req, res, next) => fakeResponse(res),
  update: (req, res, next) => fakeResponse(res),
  delete: (req, res, next) => fakeResponse(res),
}
