import containsDuplicate from './index';

test('Does [1,2,3,1] contain duplicate', () => {
  expect(containsDuplicate([1,2,3,1])).toBe(true);
});
test('Does [1,1,1,3,3,4,3,2,4,2] contain duplicate', () => {
  expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true);
});
test('Does [1,2,3,4] contain duplicate', () => {
  expect(containsDuplicate([1,2,3,4])).toBe(false);
});
