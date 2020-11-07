// Dependencies
import { getMockReq, getMockRes } from '@jest-mock/express'

// Controller
import { BaseController } from "./base-controller";

class FakeService {
  public findAll(): Promise<any> {
    return Promise.resolve();
  }
  public findOne({ query }: any): Promise<any> {
    return Promise.resolve();
  }
  public updateOne(id: number, data: any): Promise<any> {
    return Promise.resolve();
  }
  public deleteOne(id: number): Promise<any> {
    return Promise.resolve();
  }
  public create(data: any): Promise<any> {
    return Promise.resolve();
  }
}

class FakeClass extends BaseController<any> {
  constructor(service) {
    super(service);
  }
}

describe('BaseController', () => {
  let controller;
  const { res, next, clearMockRes } = getMockRes();

  const errorMessage: Error = new Error('Network Error');

  const mockServices = {
    findAll: jest.fn()
      .mockResolvedValueOnce([])
      .mockRejectedValueOnce(errorMessage),
    findOne: jest.fn()
      .mockResolvedValueOnce([])
      .mockResolvedValueOnce(null)
      .mockRejectedValueOnce(errorMessage),
    updateOne: jest.fn()
      .mockResolvedValueOnce([])
      .mockRejectedValueOnce(errorMessage),
    deleteOne: jest.fn()
      .mockResolvedValueOnce(1)
      .mockRejectedValueOnce(errorMessage),
    create: jest.fn()
      .mockResolvedValueOnce([])
      .mockRejectedValueOnce(errorMessage),
  }

  beforeEach(() => {
    clearMockRes()
    controller = new FakeClass(mockServices);
  });

  describe('getAll method', () => {

    const req = getMockReq();

    it('should get the data correctly', async () => {
      await controller.getAll(req, res, next);
      expect(res.json).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
    });

    it('should return an error', async () => {
      await controller.getAll(req, res, next);
      expect(next).toHaveBeenCalledWith(errorMessage);
      expect(res.json).not.toHaveBeenCalled();
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
      await controller.getById(req, response, next);
      expect(response.status).toEqual(404);
    });

    it('should return an error', async () => {
      await controller.getById(req, res, next);
      expect(next).toHaveBeenCalledWith(errorMessage);
      expect(res.json).not.toHaveBeenCalled();
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

    it('should return an error', async () => {
      await controller.create(req, res, next);
      expect(next).toHaveBeenCalledWith(errorMessage);
      expect(res.json).not.toHaveBeenCalled();
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

    it('should return an error', async () => {
      await controller.update(req, res, next);
      expect(next).toHaveBeenCalledWith(errorMessage);
      expect(res.json).not.toHaveBeenCalled();
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

    it('should return an error', async () => {
      await controller.delete(req, res, next);
      expect(next).toHaveBeenCalledWith(errorMessage);
      expect(res.json).not.toHaveBeenCalled();
    });
  });


});
