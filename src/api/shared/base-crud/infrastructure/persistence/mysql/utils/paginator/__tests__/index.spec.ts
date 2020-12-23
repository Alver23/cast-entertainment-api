import { paginator } from "../index";

describe('Paginator', () => {

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
