import { paginator } from "../index";

describe('Paginator', () => {

  describe('getPagination method', () => {
    it('should get the limit and offset', () => {
      const { limit, offset } = paginator.getPagination(2, 5);
      expect(limit).toBe(5);
      expect(offset).toBe(5);
    });

    it('should get the limit and offset by default', () => {
      const { limit, offset } = paginator.getPagination(0, 0);
      expect(limit).toBe(10);
      expect(offset).toBe(0);
    });
  });

  describe('getPagingData method' , () => {
    const data = {
      count: 10,
      rows: [],
    }

    const cases = [
      [null, 10],
      [1, 10]
    ]

    it.each(cases)('should get the data pagination when page to equal %s', (page, limit) => {
      const response = paginator.getPagingData(data, page, limit);
      expect(response)
        .toEqual(
          expect.objectContaining({
            items: expect.any(Array),
            totalItems: expect.any(Number),
            totalPages: expect.any(Number),
            currentPage: expect.any(Number),
          })
        )
    });
  });

});
