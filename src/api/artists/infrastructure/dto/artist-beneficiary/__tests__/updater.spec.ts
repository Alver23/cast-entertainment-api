// Dependencies
import 'reflect-metadata';
import { validateOrReject } from "class-validator";

// Dto's
import { ArtistBeneficiaryUpdaterDto } from "../updater";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

describe('ArtistBeneficiaryUpdaterDto', () => {

  it('should get the model', async () => {
    const model = transformerPlainToClass(ArtistBeneficiaryUpdaterDto, mocks);
    await validateOrReject(model);
    expect(model).toBeInstanceOf(ArtistBeneficiaryUpdaterDto)
  });
});
