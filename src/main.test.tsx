function add(x: number, y: number): number {
	return (x + y);
}

const context = describe;

describe('add 함수는', () => {
	it('두 수의 합을 리턴한다.', () => {
		expect(add(1, 2)).toBe(3);
	});

	context('두 개의 양수가 주어졌을 때', () => {
		it('항상 두 개의 숫자보다 큰 값을 돌려준다.', () => {
			expect(add(1, 2)).toBeGreaterThan(2);
			expect(add(1, 2)).toBeGreaterThan(1);
		});
	});
	context('하나의 양수와 음수가 주어졌을 때', () => {
		it('항상 하나의 양수보다 작은 값을 돌려준다.', () => {
			expect(add(1, -2)).toBeLessThan(1);
		});
	});
});
