// Services
import { ArtistService } from "../index";
import { BaseCrudService } from "@api/shared/base-crud/application/base-crud-service";

// Mocks
import mocks from './mocks.json';

// Mocks
jest.mock('@api/artists/application/artist-service/dto/artist', () => jest.fn())
describe('ArtistService', () => {
  let artistService: ArtistService;

  const fakeRepository = {
    findOne: async () => mocks
  }

  beforeEach(() => {
    artistService = new ArtistService(fakeRepository as any);
  });

  it('should get an class instance', () => {
    expect(artistService).toBeInstanceOf(BaseCrudService)
  });

  it('should get an response model', async () => {
    const response = await artistService.getById(1);
    expect(response).toBeTruthy()
  });
});
