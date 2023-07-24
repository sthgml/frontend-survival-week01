function add(x: number, y: number): number {
	return ((x * 10) + (y * 10)) / 10;
}

const context = describe;

describe('add 함수는', () => {
	context('두 개의 양수가 주어졌을 때', () => {
		it('두 숫자의 합을 리턴한다.', () => {
			expect(add(1, 2)).toBe(3);
		});
	});

	context('0.1과 0.2가 주어져도', () => {
		it('이상한 값을 리턴하지 않는다.', () => {
			expect(add(0.1, 0.2)).toBe(0.3);
		});
	});
});
