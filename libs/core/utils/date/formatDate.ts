export const formatDate = (date: Date): string => {
	const day = date.getDate();
	const month = date.getMonth();

	return `${day <= 9 ? "0" + day : day}. ${month}. ${date.getFullYear()}`;
};
