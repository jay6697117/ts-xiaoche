import { sum } from '../fn';
console.log(`sum:`, sum);

test('basic', () => {
  expect(sum(1, 2)).toBe(3);
});