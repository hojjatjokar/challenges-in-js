import validAnagram from './index';

test('Is car anagram of rat', () => {
  expect(validAnagram('rat', 'car')).toBe(false);
});

test('Is nagaram anagram of anagram', () => {
  expect(validAnagram('anagram', 'nagaram')).toBe(true);
});

test('Is hell anagram of hello', () => {
  expect(validAnagram('hello', 'hell')).toBe(true);
});