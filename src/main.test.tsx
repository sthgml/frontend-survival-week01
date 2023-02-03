function add(x: number, y: number): number {
  return x + y;
}

test('add', () => {
  expect(add(1, 2)).toBe(3);
});
