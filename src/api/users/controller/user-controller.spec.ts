// Controllers
import { UserController } from "./user-controller";

// Services
import { userServiceInstance } from "../services";
import { personServiceInstance } from "../../persons/services";

// Mocks
import mocks from '../mocks.json';
import { mockRequest, mockResponse } from '../../__mocks__/fake-request';

jest.mock('./../services', () => require('../services/user-service-mock').mockUserService);
jest.mock('./../../persons/services', () => require('../../persons/services/person-service-mock').mockPersonService);

describe('UserController', () => {
  let controller: UserController;

  beforeEach(() => {
    controller = new UserController(userServiceInstance, personServiceInstance);
  });

  describe('getUsers method', () => {

    it('should get all users', async () => {
      const request = mockRequest({});
      const response = mockResponse();
      const next = jest.fn();
      await controller.getUsers(request, response, next);
      expect(response.json).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
    });

    it('should return an error', async () => {
      const errorMessage: Error = new Error('Network Error');
      jest.spyOn(userServiceInstance, 'findAll').mockRejectedValue(errorMessage);
      const request: any = mockRequest({ body: {} });
      const response: any = mockResponse();
      const next: any = jest.fn();
      await controller.getUsers(request, response, next);
      expect(next).toHaveBeenCalledWith(errorMessage);
      expect(response.json).not.toHaveBeenCalled();
    });
  });

  describe('getUser method', () => {

    it('should get a user by id', async () => {
      const request = mockRequest({ params: { id: 1 } });
      const response = mockResponse();
      const next = jest.fn();
      await controller.getUser(request, response, next);
      expect(response.json).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
    });

    it('should return 404 when user not found', async () => {
      jest.spyOn(userServiceInstance, 'findOne').mockResolvedValue(null);
      const request = mockRequest({ params: { id: 1 } });
      const response: any = {status: 404};
      const next = jest.fn();
      await controller.getUser(request, response, next);
      expect(response.status).toEqual(404);
    });

    it('should return an error', async () => {
      const errorMessage: Error = new Error('Network Error');
      jest.spyOn(userServiceInstance, 'findAll').mockRejectedValue(errorMessage);
      const request = mockRequest({ params: { id: 1 } });
      const response = mockResponse();
      const next = jest.fn();
      await controller.getUsers(request, response, next);
      expect(next).toHaveBeenCalledWith(errorMessage);
      expect(response.json).not.toHaveBeenCalled();
    });

  });

  describe('createUser method', () => {

    it('should create an new user when user not exists', async () => {
      jest.spyOn(personServiceInstance, 'findOne').mockResolvedValue(false);
      const request = mockRequest({ body: mocks });
      const response = mockResponse();
      const next = jest.fn();
      await controller.createUser(request, response, next);
      expect(response.json).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
    });

    it('should get an error when create a new user', async () => {
      jest.spyOn(personServiceInstance, 'findOne').mockResolvedValue(true);
      const request = mockRequest({ body: mocks });
      const response = mockResponse();
      const next = jest.fn();
      await controller.createUser(request, response, next);
      expect(next).toHaveBeenCalled();
      expect(response.json).not.toHaveBeenCalled();
    });

    it('should return an error', async () => {
      const errorMessage: Error = new Error('Network Error');
      jest.spyOn(personServiceInstance, 'findOne').mockResolvedValue(false);
      jest.spyOn(userServiceInstance, 'create').mockRejectedValue(errorMessage);
      const request: any = mockRequest({ body: {} });
      const response: any = mockResponse();
      const next: any = jest.fn();
      await controller.createUser(request, response, next);
      expect(next).toHaveBeenCalledWith(errorMessage);
      expect(response.json).not.toHaveBeenCalled();
    });
  });

});
