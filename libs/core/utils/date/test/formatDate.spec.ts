import { formatDate } from "../formatDate";

describe("Formatting of visible dates without time", () => {
	test("Checking format of 2021-12-20", () => {
		expect(formatDate(new Date(2021, 11, 20))).toBe("20. Dez. 2021");
	});

	test("Checking format of 2021-03-01", () => {
		expect(formatDate(new Date(2021, 2, 1))).toBe("01. Mrz. 2021");
	});

	test("Checking format of 2021-12-02", () => {
		expect(formatDate(new Date(2021, 11, 2))).toBe("02. Dez. 2021");
	});

	test("Checking format of 2021-03-20", () => {
		expect(formatDate(new Date(2021, 2, 20))).toBe("20. Mrz. 2021");
	});
});
