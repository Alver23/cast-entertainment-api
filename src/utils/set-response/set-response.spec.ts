import { setResponse } from './set-response';

describe('SetResponse Method', () => {
	it('should get an response when status code is 200', () => {
		expect(setResponse({ data: [], message: 'fake message' })).toEqual(
			expect.objectContaining({
				data: expect.any(Array),
				message: expect.any(String),
				status: expect.any(Number),
			}),
		);
	});

	it('should get an response when status code is 201', () => {
		expect(
			setResponse({
				status: 201,
			}),
		).toHaveProperty('status', 201);
	});

	it('should get an response when send options', () => {
		expect(setResponse({ options: { error: 'fake error' } })).toHaveProperty('error', 'fake error');
	});
});
