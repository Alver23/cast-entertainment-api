// Services
import { ArtistController } from "../artist-controller";
import { BaseController } from "../../../../shared/base-crud/infrastructure/controllers/base-controller";

describe('ArtistService', () => {

  it('should get an class instance', () => {

    expect(
      new ArtistController({} as any)
    ).toBeInstanceOf(BaseController)

  });
});
