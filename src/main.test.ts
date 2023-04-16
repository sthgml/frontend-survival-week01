function add(x: number, y: number): number {
	return x + y;
}

test('test - expect : 기본 test', () => {
	expect(add(1, 2)).toBe(3);
});

describe('describe - it - expect : add 함수', () => {
	it('returns sum of two numbers', () => {
		expect(add(1, 2)).toBe(3);
	});

	it('returns number', () => {
		expect(typeof add(1, 2)).toBe('number');
	});
});
