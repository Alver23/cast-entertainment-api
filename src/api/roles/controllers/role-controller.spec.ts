// Controllers
import { roleController } from "./role-controller";

// Services
import { roleServiceInstance } from "../services";

// Mocks
import { mockRequest, mockResponse } from '@mocks/fake-request';

jest.mock('@api/roles/services', () => require('@api/roles/services/role-service-mock').roleServiceMock);

describe('RoleController', () => {

  describe('getRoles method', () => {

    it('should get all roles', async () => {
      const request = mockRequest({});
      const response = mockResponse();
      const next = jest.fn();
      await roleController.getRoles(request, response, next);
      expect(response.json).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
    });

    it('should return an error', async () => {
      const errorMessage: Error = new Error('Network Error');
      jest.spyOn(roleServiceInstance, 'findAll').mockRejectedValue(errorMessage);
      const request: any = mockRequest({ body: {} });
      const response: any = mockResponse();
      const next: any = jest.fn();
      await roleController.getRoles(request, response, next);
      expect(next).toHaveBeenCalledWith(errorMessage);
      expect(response.json).not.toHaveBeenCalled();
    });
  });

  describe('getRole method', () => {

    it('should get a role by id', async () => {
      const request = mockRequest({ params: { id: 1 } });
      const response = mockResponse();
      const next = jest.fn();
      await roleController.getRole(request, response, next);
      expect(response.json).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
    });

    it('should return 404 when user not found', async () => {
      jest.spyOn(roleServiceInstance, 'findOne').mockResolvedValue(null);
      const request = mockRequest({ params: { id: 1 } });
      const response: any = {status: 404};
      const next = jest.fn();
      await roleController.getRole(request, response, next);
      expect(response.status).toEqual(404);
    });

    it('should return an error', async () => {
      const errorMessage: Error = new Error('Network Error');
      jest.spyOn(roleServiceInstance, 'findOne').mockRejectedValue(errorMessage);
      const request = mockRequest({ params: { id: 1 } });
      const response = mockResponse();
      const next = jest.fn();
      await roleController.getRole(request, response, next);
      expect(next).toHaveBeenCalledWith(errorMessage);
      expect(response.json).not.toHaveBeenCalled();
    });

  });


});
