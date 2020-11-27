// repositories
import { ArtistPassportRespository } from "../artist-passport-respository";

// Shared
import { BaseCrudRepository } from "@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository";

// Mocks
jest.mock('@database/models/artist-has-passport', () => jest.fn());

describe('ArtistPassportRespository', () => {

  it('should get an class instance', () => {

    expect(
      new ArtistPassportRespository()
    ).toBeInstanceOf(BaseCrudRepository)

  });

});
