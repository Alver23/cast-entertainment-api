export const errorServiceMessage: Error = new Error('Network Error');

export const baseCrudServiceMock = {
  create: jest.fn()
    .mockResolvedValueOnce([])
    .mockRejectedValueOnce(errorServiceMessage),
  delete: jest.fn()
    .mockResolvedValueOnce(1)
    .mockRejectedValueOnce(errorServiceMessage),
  getAll: jest.fn()
    .mockResolvedValueOnce([])
    .mockRejectedValueOnce(errorServiceMessage),
  getById: jest.fn()
    .mockResolvedValueOnce([])
    .mockResolvedValueOnce(null)
    .mockRejectedValueOnce(errorServiceMessage),
  update: jest.fn()
    .mockResolvedValueOnce([])
    .mockRejectedValueOnce(errorServiceMessage)
}
