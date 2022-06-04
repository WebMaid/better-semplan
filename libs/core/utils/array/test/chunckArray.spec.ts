import { chunckArray } from "../chunckArray";

describe("Convert long array in array with many subarrays of specific lenght", () => {
	test("ChunckArray with lenght of 7", () => {
		const chunkedArray = chunckArray([0, 1, 2, 3, 4, 5, 6, 7], 7);
		expect(chunkedArray.length).toBe(2);
		expect(chunkedArray[0]).toBeDefined();
		expect(chunkedArray[0].length).toBe(7);
		expect(chunkedArray[1]).toBeDefined();
		expect(chunkedArray[1].length).toBe(1);
	});

	test("ChunckArray with lenght of 9", () => {
		const chunkedArray = chunckArray([0, 1, 2, 3, 4, 5, 6, 7], 9);
		expect(chunkedArray.length).toBe(1);
		expect(chunkedArray[0]).toBeDefined();
		expect(chunkedArray[0].length).toBe(8);
	});

	test("ChunckArray with negative attribute should throw an error", () => {
		const chunkedArray = () => chunckArray([0, 1, 2, 3, 4, 5, 6, 7], -5);
		expect(chunkedArray).toThrowError();
	});

	test("ChunckArray with attribute zero should throw an error", () => {
		const chunkedArray = () => chunckArray([0, 1, 2, 3, 4, 5, 6, 7], 0);
		expect(chunkedArray).toThrowError();
	});
});
