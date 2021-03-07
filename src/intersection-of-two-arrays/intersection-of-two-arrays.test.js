import intersection, {errorMessages} from ".";

test('itersection of [1,2,2,1] and [2,2] should return [2]', () => {
  expect(intersection([1,2,2,1], [2,2])).toEqual([2]);
})

test('itersection of [4,9,5] and [9,4,9,8,4] should return [9,4]', () => {
  expect(intersection([4,9,5], [9,4,9,8,4])).toEqual([9,4]);
});

test('itersection of [] and [1,2,3,4] should return []', () => {
  expect(intersection([], [1,2,3,4])).toEqual([]);
});

test('Error on missing argument', () => {
  expect(() => intersection()).toThrow(errorMessages.missingArgument);
});

test('Error on invalid argument', () => {
  expect(() => intersection('1,2,3,4', {})).toThrow(errorMessages.invalidArgument);
});