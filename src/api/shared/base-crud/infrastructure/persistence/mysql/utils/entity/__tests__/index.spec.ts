import { EntityUtils } from "../index";
import { EntityNotFoundError } from "../exceptions/entity-not-found";

describe('EntityUtils', () => {

  let entity: EntityUtils;

  beforeEach(() => {
    entity = new EntityUtils();
  });

  it('should get an array empty', async () => {
    const model = {
      findOne: jest.fn().mockResolvedValue([])
    }

    const response = await entity.findEntityOrThrow(model, {});
    expect(model.findOne).toHaveBeenCalledWith({where: {}})
    expect(response)
      .toEqual([])
  });

  it('should get an error when no results found', async () => {
    const model = {
      findOne: jest.fn()
        .mockResolvedValue(null)
    }

    entity.findEntityOrThrow(model, {})
      .catch((error) => {
        expect(error).toBeInstanceOf(EntityNotFoundError)
      })
  });

});
