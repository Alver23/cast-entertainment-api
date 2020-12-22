// Dependencies
import express from "express";
import supertest from 'supertest';

// Midlewares
import { authorization } from "./index";

// Mocks
jest.unmock('@core/middlewares/guards/authorization');

describe('Authorization', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  })

  describe('Case One', () => {
    const server = express();
    beforeEach(() => {
      server.use((req, res, next) => {
        req.user = {
          roles: ['user']
        };
        next();
      });
    });

    it('should get status code 401', () => {
      server.get('/users', authorization.handler('admin'), (req, res) => {
        res
          .status(200)
          .send('finally');
      });
      return supertest(server)
        .get('/users')
        .set('Accept', 'application/json')
        .expect(401);
    });
  });

  describe('Case two', () => {
    const server = express();

    beforeEach(() => {
      server.use((req, res, next) => {
        req.user = {
          roles: ['admin']
        };
        next();
      });
    })


    it('should get status code 200', () => {
      server.get('/users', authorization.handler('admin'), (req, res) => {
        res
          .status(200)
          .send('finally');
      });
      return supertest(server)
        .get('/users')
        .set('Accept', 'application/json')
        .expect(200);
    });
  });

});
