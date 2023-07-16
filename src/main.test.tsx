function add(x: number, y: number): number {
	return x + y;
}

test('add 함수 테스트', () => {
	expect(add(1, 2)).toBe(3);
});
