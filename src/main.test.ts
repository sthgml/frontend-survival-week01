// 2. 구현부 작성
function add(x: number, y: number): number {
	return x + y;
}

// 1. 테스트부 먼저 작성
const context = describe;
describe('add 함수는', () => {
	it('두 숫자의 합을 리턴한다', () => {
		expect(add(1, 2)).toBe(3);
	});
	context('두 개의 양수가 주어졌을 때', () => {
		it('항상 두 개의 숫자 중 큰 값을 리턴한다', () => {
			expect(add(1, 2)).toBeGreaterThan(2);
		});
	});
	context('하나의 양수와 음수가 주어졌을 때', () => {
		it('항상 하나의 양수보다 작은 값을 리턴한다', () => {
			expect(add(1, -2)).toBeLessThan(1);
		});
	});
});
