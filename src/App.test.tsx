function add(x: number, y: number): number {
	return x + y;
}

const context = describe;
describe('add 함수를 테스트', () => {
	it('returns sum of two numbers', () => {
		expect(add(1, 2)).toBe(3);
	});
});
