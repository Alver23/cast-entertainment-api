// Dependencies
import supertest from 'supertest';

// Mocks
import { fakeServer } from "@mocks/fake-server";

// Router
import { studentRouter } from "../student";
// Mocks
jest.mock('@api/students/infrastructure/dto/student', () => jest.fn());
jest.mock('@api/students/infrastructure/dto/student/updater', () => jest.fn());
jest.mock('@api/students/infrastructure/persistence/student', () => ({
  StudentRepository: require('@mocks/fake-service').default,
}));
jest.mock('@api/students/application/student-service', () => ({
  StudentService: require('@mocks/fake-service').default,
}))
jest.mock('@api/students/infrastructure/controllers/student', () => ({
  StudentController: require('@mocks/fake-controller').default,
}));


describe('Student routes', () => {
  const path = '/students';
  studentRouter(fakeServer);

  it('/ GET', async () => {
    const response = await supertest(fakeServer).get(path).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });
});
