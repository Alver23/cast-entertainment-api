
export default class FakeController {
  getAll(request, response, next) {
    return response.json();
  }

  createMany(request, response) {
    return response.json();
  }
}
