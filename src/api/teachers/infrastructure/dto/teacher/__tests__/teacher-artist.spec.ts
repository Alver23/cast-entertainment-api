// Dependencies
import 'reflect-metadata';

// Dto's
import { TeacherArtistCreatorDto } from "../teacher-artist-creator";

// Mocks
import { transformerPlainToClass } from "@mocks/plain-class";

describe('TeacherArtistCreatorDto', () => {

  it('should get the model of TeacherArtistCreatorDto', () => {
    const model = transformerPlainToClass(TeacherArtistCreatorDto, {});
    expect(model).toBeInstanceOf(TeacherArtistCreatorDto)
  });
});
