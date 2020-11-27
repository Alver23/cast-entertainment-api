// repositories
import { ArtistEmergencyContactRepository } from "../artist-emergency-contact-repository";

// Shared
import { BaseCrudRepository } from "@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository";

// Mocks
jest.mock('@database/models/emergency-contact', () => jest.fn());

describe('ArtistEmergencyContactRepository', () => {

  it('should get an class instance', () => {

    expect(
      new ArtistEmergencyContactRepository()
    ).toBeInstanceOf(BaseCrudRepository)

  });

});
