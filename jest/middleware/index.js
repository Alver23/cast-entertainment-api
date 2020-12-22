jest.mock('@core/middlewares/guards/authorization', () => ({
  authorization: require('@mocks/fake-handler-middleware').default,
}));

jest.mock('@core/middlewares/guards/authentication', () => ({
  authentication: require('@mocks/fake-handler-middleware').default,
}));
