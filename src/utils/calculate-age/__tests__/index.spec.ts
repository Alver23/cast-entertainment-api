import { calculateAge } from "../index";

describe('calculateAge', () => {

  it('should return 30 age', () => {
    expect(
      calculateAge(new Date(1990, 11, 1))
    ).toBe(30)
  });
});
