export default class FakeRepository {
  async updateOrCreate() {
    return { id: 1};
  }
  async updateOne() {
    return 1;
  }
}
