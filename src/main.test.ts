function add(x: number, y: number): number {
	return Math.ceil((x * 10) + (y * 10)) / 10;
}

const context = describe;

describe('add 함수는', () => {
	context('두 개의 양수가 주어졌을 때', () => {
		it('항상 하나의 양수보다 큰 값을 돌려준다', () => {
			expect(add(1, 2)).toBeGreaterThan(2);
		});
	});

	context('0.1과 0.2가 주어지면', () => {
		it('이상한 값을 돌려주지 않는다', () => {
			expect(add(0.1, 0.2)).toBeLessThan(1);
		});
	});
});
