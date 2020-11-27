// repositories
import { ArtistSkillRepository } from "../artist-skill-repository";

// Shared
import { BaseCrudRepository } from "@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository";

// Mocks
jest.mock('@database/models/artist-has-skills', () => jest.fn());

describe('ArtistSkillRepository', () => {

  it('should get an class instance', () => {

    expect(
      new ArtistSkillRepository()
    ).toBeInstanceOf(BaseCrudRepository)

  });

});
