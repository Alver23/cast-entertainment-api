export const authServiceMock = {
  authServiceInstance: {
    createToken: () => '123',
    generateRefreshToken: async () => '123',
    refreshToken: () => ({id: 123}),
  },
}
