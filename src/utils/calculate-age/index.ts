export const calculateAge = (dateOfBirth: Date): number => {
	const diff = Date.now() - dateOfBirth.getTime();
	const age = new Date(diff);

	return Math.abs(age.getUTCFullYear() - 1970);
};
