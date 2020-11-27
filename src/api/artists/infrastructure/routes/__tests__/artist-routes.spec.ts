// Dependencies
import supertest from 'supertest';

// Mocks
import { fakeServer } from "@mocks/fake-server";

// Router
import { artistRouter } from "../artist-routes";

// Mocks
jest.mock('@api/artists/infrastructure/dto/artist', () => jest.fn());
jest.mock('@api/artists/infrastructure/persistence/artist/artist-repository', () => ({
  ArtistRepository: require('@mocks/fake-service').default,
}));
jest.mock('@api/artists/infrastructure/controllers/artist-controller', () => ({
  ArtistController: require('@mocks/fake-controller').default,
}));


describe('Artist routes', () => {
  const path = '/artists';
  artistRouter(fakeServer);

  it('/ GET', async () => {
    const response = await supertest(fakeServer).get(path).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });
});
