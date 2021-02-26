import singleNumber, {errorMessages} from ".";

test('Error on missing argument', () => {
  expect(() => singleNumber()).toThrow(errorMessages.missingArgument);
});

test('Error on invalid argument', () => {
  expect(() => singleNumber({})).toThrow(errorMessages.invalidArgument);
});

test('[2,2,1] return 1', () => {
  expect(singleNumber([2,2,1])).toBe(1);
});

test('[4,1,2,1,2] return 4', () => {
  expect(singleNumber([4,1,2,1,2])).toBe(4);
});

test('[1] return 1', () => {
  expect(singleNumber([1])).toBe(1);
});