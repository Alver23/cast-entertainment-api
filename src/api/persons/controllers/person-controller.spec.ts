// Controllers
import { PersonController } from "./person-controller";

// Services
import { personServiceInstance } from "@api/persons/services";

// Mocks
import mocks from '@api/persons/mocks.json';
import { mockRequest, mockResponse } from '@mocks/fake-request';

jest.mock('@api/persons/services', () => require('@api/persons/services/person-service-mock').personServiceMock);

describe('PersonController', () => {
  let controller: PersonController;

  beforeEach(() => {
    controller = new PersonController(personServiceInstance);
  });

  describe('getPersons method', () => {

    it('should get all persons', async () => {
      const request = mockRequest({});
      const response = mockResponse();
      const next = jest.fn();
      await controller.getPersons(request, response, next);
      expect(response.json).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
    });

    it('should return an error', async () => {
      const errorMessage: Error = new Error('Network Error');
      jest.spyOn(personServiceInstance, 'findAll').mockRejectedValue(errorMessage);
      const request: any = mockRequest({ body: {} });
      const response: any = mockResponse();
      const next: any = jest.fn();
      await controller.getPersons(request, response, next);
      expect(next).toHaveBeenCalledWith(errorMessage);
      expect(response.json).not.toHaveBeenCalled();
    });
  });

  describe('getPersonById method', () => {

    it('should get a person by id', async () => {
      const request = mockRequest({ params: { id: 1 } });
      const response = mockResponse();
      const next = jest.fn();
      await controller.getPersonById(request, response, next);
      expect(response.json).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
    });

    it('should return 404 when person not found', async () => {
      jest.spyOn(personServiceInstance, 'findOne').mockResolvedValue(null);
      const request = mockRequest({ params: { id: 1 } });
      const response: any = {status: 404};
      const next = jest.fn();
      await controller.getPersonById(request, response, next);
      expect(response.status).toEqual(404);
    });

    it('should return an error', async () => {
      const errorMessage: Error = new Error('Network Error');
      jest.spyOn(personServiceInstance, 'findOne').mockRejectedValue(errorMessage);
      const request: any = mockRequest({ params: {} });
      const response: any = mockResponse();
      const next: any = jest.fn();
      await controller.getPersonById(request, response, next);
      expect(next).toHaveBeenCalledWith(errorMessage);
      expect(response.json).not.toHaveBeenCalled();
    });
  });

  describe('createPerson method', () => {
    it('should create an new person', async () => {
      const request = mockRequest({ body: mocks });
      const response = mockResponse();
      const next = jest.fn();
      await controller.createPerson(request, response, next);
      expect(response.json).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
    });

    it('should return an error', async () => {
      const errorMessage: Error = new Error('Network Error');
      jest.spyOn(personServiceInstance, 'create').mockRejectedValue(errorMessage);
      const request: any = mockRequest({ body: {} });
      const response: any = mockResponse();
      const next: any = jest.fn();
      await controller.createPerson(request, response, next);
      expect(next).toHaveBeenCalledWith(errorMessage);
      expect(response.json).not.toHaveBeenCalled();
    });
  });

  describe('updateEvent method', () => {
    it('should updated person', async () => {
      const request = mockRequest({ body: mocks, params: { id: '2' } });
      const response = mockResponse();
      const next = jest.fn();
      await controller.updatePerson(request, response, next);
      expect(response.json).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
    });

    it('should return an error', async () => {
      const errorMessage: Error = new Error('Network Error');
      jest.spyOn(personServiceInstance, 'update').mockRejectedValue(errorMessage);
      const request: any = mockRequest({ body: {}, params: {}});
      const response: any = mockResponse();
      const next: any = jest.fn();
      await controller.updatePerson(request, response, next);
      expect(next).toHaveBeenCalledWith(errorMessage);
      expect(response.json).not.toHaveBeenCalled();
    });
  });

  describe('deletePerson method', () => {

    it('should remove a person by id', async () => {
      jest.spyOn(personServiceInstance, 'deleteOne').mockResolvedValue(1)
      const request = mockRequest({ params: { id: 1 } });
      const response = mockResponse();
      const next = jest.fn();
      await controller.deletePerson(request, response, next);
      expect(response.json).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
    });

    it('should return an error', async () => {
      const errorMessage: Error = new Error('Network Error');
      jest.spyOn(personServiceInstance, 'deleteOne').mockRejectedValue(errorMessage);
      const request: any = mockRequest({ params: {} });
      const response: any = mockResponse();
      const next: any = jest.fn();
      await controller.deletePerson(request, response, next);
      expect(next).toHaveBeenCalledWith(errorMessage);
      expect(response.json).not.toHaveBeenCalled();
    });
  });
});
