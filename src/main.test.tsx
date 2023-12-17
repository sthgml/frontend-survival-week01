function add(x: number, y: number): number {
	return 1 + 2;
}

test('숫자더하기', () => {
	expect(add(1, 3)).toBe(3);
});
