export default class FakeRepository {
  async create() {
    return { id: 1 };
  }
  async updateOrCreate() {
    return { id: 1};
  }
  async updateOne() {
    return 1;
  }

  async findOrCreate() {
    return 1;
  }
}
