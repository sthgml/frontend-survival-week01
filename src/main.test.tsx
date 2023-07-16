function add(x: number, y: number): number {
	return x + y;
}

const context = describe;

describe('add함수는', () => {
	context('두개의 양수가 주어졌을때', () => {
		it('두숫자의 합을 돌려준다.', () => {
			expect(1 + 2).toBe(3);
		});
	});

	context('두개의 양수가 주어졌을때', () => {
		it('항상 두개의 숫자보다 큰값을 돌려준다.', () => {
			expect(add(1, 2)).toBeGreaterThan(1);
		});
	});
	context('하나의 양수와 음수가 주어지면', () => {
		it('항상 하나의양수 보다 작은값을 돌려준다.', () => {
			expect(add(1, -2)).toBeLessThan(1);
		});
	});
});
