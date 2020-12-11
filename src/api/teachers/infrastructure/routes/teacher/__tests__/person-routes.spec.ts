// Dependencies
import supertest from 'supertest';

// Mocks
import { fakeServer } from "@mocks/fake-server";

// Router
import { teacherRouter } from "../index";

// Mocks
jest.mock('@api/teachers/infrastructure/persistence/teacher', () => ({
  TeacherRepository: require('@mocks/fake-repository').default,
}));
jest.mock('@api/teachers/infrastructure/controllers/teacher', () => ({
  TeacherController: require('@mocks/fake-controller').default,
}));


describe('Teacher routes', () => {
  const path = '/teachers';
  teacherRouter(fakeServer);

  it('/ GET', async () => {
    const response = await supertest(fakeServer).get(path).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });
});
