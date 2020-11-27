// repositories
import { ArtistBeneficiaryRepository } from "../artist-beneficiary-repository";
import { BaseCrudRepository } from "@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository";

// Mocks
jest.mock('@database/models/artist-has-beneficiary', () => jest.fn());

describe('ArtistBeneficiaryRepository', () => {

  it('should get an class instance', () => {

    expect(
      new ArtistBeneficiaryRepository()
    ).toBeInstanceOf(BaseCrudRepository)

  });

});
