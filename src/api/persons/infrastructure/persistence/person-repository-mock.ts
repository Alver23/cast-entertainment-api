import FakeRepository from "@mocks/fake-repository";

export default class PersonRepositoryMock extends FakeRepository {
  getFilterForFullName(fullName) {
    return {
      attributes: [],
    }
  }
}
