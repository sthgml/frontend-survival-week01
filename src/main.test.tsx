const add = (x: number, y: number): number => x + y;

const context = describe;

describe('add 함수는', () => {
	it('두 숫자의 합을 돌려준다', () => {
		expect(add(1, 2)).toBe(3);
	});
});
