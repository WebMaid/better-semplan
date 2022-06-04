import { jwtDecode } from "../decodeJwt";

describe("should decode a jwt token to the included data", () => {
	test("empty jwt token", () => {
		const check = () => jwtDecode("");
		expect(check).toThrowError();
	});

	test("random character jwt token", () => {
		const check = () => jwtDecode("wahfjojaiwf");
		expect(check).toThrowError();
	});

	test("invalid character combination with 2 dots", () => {
		const check = () => jwtDecode("w.w.w");
		expect(check).toThrowError();
	});

	test("valid jwt token", () => {
		const decoded = jwtDecode(
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
		);
		expect(decoded).toBeDefined();
		expect(decoded).toEqual({
			sub: "1234567890",
			name: "John Doe",
			iat: 1516239022,
		});
	});
});
