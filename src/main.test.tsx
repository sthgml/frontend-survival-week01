function add(x: number, y: number): number {
	return x + y;
}

const context = describe;

describe('add 함수', () => {
	context('두 개의 양수가 주어졌을 때', () => {
		it('returns sum of two numbers', () => {
			expect(add(1, 2)).toBe(3);
		});
	});
	it('두 수의 합을 돌려준다.', () => {
		expect(add(1, 2)).toBe(3);
	});

	it('returns numbers', () => {
		expect(typeof add(1, 2)).toBe('number');
	});
});
