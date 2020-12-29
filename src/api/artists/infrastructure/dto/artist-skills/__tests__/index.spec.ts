// Dependencies
import 'reflect-metadata';

// Dto's
import { ArtistSkill } from "../index";

// Mocks
import mocks from './mocks.json';
import { transformerPlainToClass } from "@mocks/plain-class";

describe('ArtistSkill', () => {

  it('should get the model of artist skills', () => {
    const skillModel = transformerPlainToClass(ArtistSkill, mocks);
    expect(skillModel)
      .toEqual(
        expect.objectContaining({
          skillId: expect.any(Number),
        })
      )
  });
});
