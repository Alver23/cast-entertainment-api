// Dependencies
import supertest from 'supertest';

// Mocks
import { fakeServer } from "@mocks/fake-server";

// Router
import { teacherRouter } from "../index";

jest.mock('@api/teachers/infrastructure/dto/teacher', () => jest.fn());
jest.mock('@api/teachers/infrastructure/dto/teacher/updater', () => jest.fn());
jest.mock('@api/teachers/infrastructure/dto/teacher/teacher-artist-creator', () => jest.fn());


jest.mock('@api/teachers/infrastructure/persistence/teacher', () => ({
  TeacherRepository: require('@mocks/fake-repository').default,
}));

jest.mock('@api/teachers/infrastructure/controllers/teacher', () => ({
  TeacherController: require('@mocks/fake-controller').default,
}));

jest.mock('@api/teachers/application/teacher-service', () => ({
  TeacherService: require('@mocks/fake-service').default,
}))


describe('Teacher routes', () => {
  const path = '/teachers';
  teacherRouter(fakeServer);

  it('POST /teachers/artist', async () => {
    const response = await supertest(fakeServer)
      .post(`${path}/artist`)
      .set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });

  it('/ GET', async () => {
    const response = await supertest(fakeServer).get(path).set('Accept', 'application/json');
    expect(response.status).toEqual(200);
  });

});
