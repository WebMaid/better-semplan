export const chunckArray = (arr: any[], size: number): any[][] => {
	if (size <= 0) {
		throw new Error("Size can not be zero or negative");
	}
	return arr.reduce((resultArray, item, index) => {
		const chunkIndex = Math.floor(index / size);

		if (!resultArray[chunkIndex]) {
			resultArray[chunkIndex] = [];
		}

		resultArray[chunkIndex].push(item);

		return resultArray;
	}, []);
};
