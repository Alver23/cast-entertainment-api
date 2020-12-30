// Dependencies
import supertest from 'supertest';

// Mocks
import { fakeServer } from "@mocks/fake-server";

// Router
import { catalogRouter } from "../index";

// Mocks
jest.mock('@api/catalogs/infrastructure/dto/catalog/creator', () => jest.fn());
jest.mock('@api/catalogs/infrastructure/dto/catalog/updater', () => jest.fn());

jest.mock('@api/catalogs/infrastructure/controllers/catalog', () => ({
  CatalogController: jest.fn()
    .mockImplementation(() => ({
      getAll: (request, response) => response.json(),
      getByParentId: (request, response) => response.json(),
    }))
}));

jest.mock('@api/catalogs/infrastructure/persistence/catalog', () => ({
  CatalogRepository: require('@mocks/fake-repository').default,
}));

jest.mock('@api/catalogs/application/catalog', () => ({
  CatalogService: require('@mocks/fake-service').default,
}));


describe('Catalog routes', () => {
  const path = '/catalogs';
  catalogRouter(fakeServer);

  it('/ GET', async () => {
    const response = await supertest(fakeServer).get(path).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });

  it('POST /catalogs/parent', async () => {
    const response = await supertest(fakeServer)
      .get(`${path}/parent/1`)
      .set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });
});
