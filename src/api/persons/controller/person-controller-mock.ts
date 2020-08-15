import { fakeResponse } from "../../__mocks__/fake-response";

export const mockPersonController = {
  personController: {
    getPersons: (req, res, next) => fakeResponse(res),
    getPersonById: (req, res, next) => fakeResponse(res),
    createPerson: (req, res, next) => fakeResponse(res),
    updatePerson: (req, res, next) => fakeResponse(res),
    deletePerson: (req, res, next) => fakeResponse(res),
  }
}
