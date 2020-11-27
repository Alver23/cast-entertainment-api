

export const baseCrudRepositoryMock = {
  create: jest.fn().mockResolvedValue(null),
  deleteOne: jest.fn().mockResolvedValue(null),
  findAll: jest.fn().mockResolvedValue(null),
  findOne: jest.fn().mockResolvedValue(null),
  findOrCreate: jest.fn().mockResolvedValue(null),
  updateOne: jest.fn().mockResolvedValue(null),
}
