// Dependencies
import 'reflect-metadata';
import { validateOrReject } from "class-validator";

// Dto's
import { ArtistSkillUpdaterDto } from "../updater";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

describe('ArtistSkillUpdaterDto', () => {

  it('should get the model', async () => {
    const model = transformerPlainToClass(ArtistSkillUpdaterDto, mocks);
    await validateOrReject(model);
    expect(model).toBeInstanceOf(ArtistSkillUpdaterDto)
  });
});
