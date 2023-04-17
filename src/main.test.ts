// TDD: 테스트 코드를 두고, 테스트를 하면서 코딩을 하는 것

function add(x: number, y: number):number{
    return x + y;
}

// test('add function test', () => {
//     expect(add(1, 2)).toBe(3);
// });

const context = describe;

describe('add 함수는', () => {
    context('두 개의 양수가 주어졌을 때', () => {
        it('두 숫자의 합을 리턴한다.', () => {
            expect(add(1, 2)).toBe(3);
        });
    });

    context('두 개의 양수가 주어졌을 때', () => {
        it('항상 두 개의 숫자보다 큰 값을 돌려준다.', () => {
            expect(add(1, 2)).toBeGreaterThan(1);
            expect(add(1, 2)).toBeGreaterThan(2);
        });
    });
});