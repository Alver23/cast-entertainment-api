export const errorServiceMessage: Error = new Error('Network Error');

export const baseCrudServiceMock = {
  create: jest.fn()
    .mockResolvedValueOnce([]),
  delete: jest.fn()
    .mockResolvedValueOnce(1),
  getAll: jest.fn()
    .mockResolvedValueOnce([]),
  getById: jest.fn()
    .mockResolvedValueOnce([])
    .mockResolvedValueOnce(null),
  update: jest.fn()
    .mockResolvedValueOnce([]),
}
