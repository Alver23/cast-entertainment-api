jest.mock('@api/persons/infrastructure/persistence/person-repository', () => ({
  PersonRepository: require('@api/persons/infrastructure/persistence/person-repository-mock').default
}));
