// Services
import { ArtistEmergencyContactService } from "../index";

// Mocks
import mocks from './mocks.json';

describe('ArtistEmergencyContactService', () => {
  let service: ArtistEmergencyContactService;

  beforeEach(() => {
    service = new ArtistEmergencyContactService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return data tarnformed', () => {
    expect(service.transformData(mocks)).toBeTruthy();
  })

  it('should return null', () => {
    expect(service.transformData(null)).toBeFalsy();
  })
});
