// Services
import { ArtistService } from "../artist-service";
import { BaseCrudService } from "../../../shared/base-crud/application/base-crud-service";

describe('ArtistService', () => {

  it('should get an class instance', () => {

    expect(
      new ArtistService({} as any)
    ).toBeInstanceOf(BaseCrudService)

  });
});
