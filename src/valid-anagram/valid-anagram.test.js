import validAnagram from './index';

test('is rat anagram of car', () => {
  expect(validAnagram('rat', 'car')).toBe(false);
});

test('Is anagram anagram of nagaram', () => {
  expect(validAnagram('anagram', 'nagaram')).toBe(true);
});
