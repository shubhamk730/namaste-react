import { sum } from "../sum"

test('Sum fn should return sum of 2 numbers', () => {
    const result = sum(8,9)
    const result2 = sum(9,9)

    // assertion
    expect(result).toBe(17);
    expect(result2).toBe(18);

})