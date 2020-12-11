// Exceptions
import { EntityNotFoundError } from "../index";

// Utils
import {CustomError} from "@utils/custom-error";

describe('EntityNotFoundError', () => {
  it('should get an error instance', () => {
    const instance = new EntityNotFoundError('fake error');
    expect(instance).toBeInstanceOf(CustomError)
  });
});
