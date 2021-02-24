import containsDuplicate, {errorMessages} from './index';

test('Does [1,2,3,1] contain duplicate', () => {
  expect(containsDuplicate([1,2,3,1])).toBe(true);
});

test('Does [1,1,1,3,3,4,3,2,4,2] contain duplicate', () => {
  expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true);
});

test('Does [1,2,3,4] contain duplicate', () => {
  expect(containsDuplicate([1,2,3,4])).toBe(false);
});

test('Does throw proper error for empty argument', () => {
  expect(() => containsDuplicate()).toThrow(errorMessages.argumentType);
});

test('Does throw proper error for wrong type of argument', () => {
  expect(() => containsDuplicate('123456')).toThrow(errorMessages.argumentType);
});

test('Does throw proper error for wrong type of content of argument', () => {
  expect(() => containsDuplicate([1,2,6,'6'])).toThrow(errorMessages.argumentContent);
});

test('Does throw proper error for wrong type of content of argument', () => {
  expect(() => containsDuplicate([NaN])).toThrow(errorMessages.argumentContent);
});