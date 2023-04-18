function mul(x: number, y: number): number {
	return x * y;
}

test('add 함수 테스트', () => {
	expect(mul(1, 2)).toBe(2);
});
