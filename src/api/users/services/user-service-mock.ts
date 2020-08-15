export const mockUserService = {
  userServiceInstance: {
    findAll: () => jest.fn(),
    findOne: () => jest.fn(),
    create: () => jest.fn(),
    findOrCreate: () => jest.fn(),
  }
}
