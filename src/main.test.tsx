function add1(x: number, y: number): number {
	return x + y;
}

test('테스트', () => {
	expect(add1(1, 2)).toBe(3);
});