export const mockRequest = (data: any) => ({
	...data,
});

export const mockResponse = () => {
	const res: any = {};
	res.status = jest.fn().mockReturnValue(res);
	res.json = jest.fn().mockReturnValue(res);
	return res;
};
