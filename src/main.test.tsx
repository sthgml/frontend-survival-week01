function add(x: number, y: number): number {
	return x + y;
}

describe('add', () => {
	it('returns sum of two numbers', () => {
		expect(add(1, 2)).toBe(3);
	});
});

test('숫자 더하기', () => {
	expect(add(1, 2)).toBe(3);
});
