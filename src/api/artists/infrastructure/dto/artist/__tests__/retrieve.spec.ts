// Dependencies
import 'reflect-metadata';

// Dto's
import { RetrieveArtist } from "../retrieve";

// Mocks
import { transformerPlainToClass } from "../../../../../__mocks__/plain-class";

describe('RetrieveArtist', () => {

  it('should get the model of retrieve artist', () => {
    const response = transformerPlainToClass(RetrieveArtist, { id: '1', key: 'fake key'});
    expect(response).toHaveProperty('id', '1')
  });
});
