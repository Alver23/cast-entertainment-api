// Mocks
import { fakeResponse } from "@mocks/fake-response";

export const personControllerMock = {
  personController: {
    getPersons: (req, res, next) => fakeResponse(res),
    getPersonById: (req, res, next) => fakeResponse(res),
    createPerson: (req, res, next) => fakeResponse(res),
    updatePerson: (req, res, next) => fakeResponse(res),
    deletePerson: (req, res, next) => fakeResponse(res),
  }
}
