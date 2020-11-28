// Dependencies
import { getMockReq, getMockRes } from '@jest-mock/express'

// Controller
import { BaseController } from "./base-controller";

// Mocks
import { baseCrudServiceMock, errorServiceMessage } from "../../application/base-crud-service-mock";

class FakeClass extends BaseController<any, any, any> {
  constructor(service) {
    super(service);
  }
}

describe('BaseController', () => {
  let controller;
  const { res, next, clearMockRes } = getMockRes();

  beforeEach(() => {
    clearMockRes()
    controller = new FakeClass(baseCrudServiceMock);
  });

  describe('getAll method', () => {

    const req = getMockReq();

    it('should get the data correctly', async () => {
      await controller.getAll(req, res, next);
      expect(res.json).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
    });

  });

  describe('getById method', () => {
    const req = getMockReq({
      params: { id: 564 },
    });

    it('should get the data correctly', async() => {
      await controller.getById(req, res, next);
      expect(res.json).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
    });

    it('should return 404 when data not found', async () => {
      const response: any = {status: 404};
      await controller.getById(req, res, next);
      expect(response.status).toEqual(404);
    });

  });

  describe('create method', () => {

    const req = getMockReq({
      body: { firstName: 'James', lastName: 'Smith' },
    });

    it('should create a resource correctly', async () => {
      await controller.create(req, res, next);
      expect(res.json).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
    });

  });

  describe('update method', () => {

    const req = getMockReq({
      params: { id: 564 },
      body: { firstName: 'James', lastName: 'Smith' },
    });

    it('should update a resource correctly', async () => {
      await controller.update(req, res, next);
      expect(res.json).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
    });

  });

  describe('delete method', () => {

    const req = getMockReq({
      params: { id: 1 },
    });

    it('should delete a resource correctly', async () => {
      await controller.delete(req, res, next);
      expect(res.json).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
    });

  });


});
