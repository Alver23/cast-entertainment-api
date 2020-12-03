// Services
import { ArtistPassportService } from "../index";

describe('ArtistEmergencyContactService', () => {
  let service: ArtistPassportService;

  beforeEach(() => {
    service = new ArtistPassportService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return data tarnformed', () => {
    expect(service.transformData({dataValues: 1})).toBe(1);
  })

  it('should return null', () => {
    expect(service.transformData(null)).toBeFalsy();
  })
});
