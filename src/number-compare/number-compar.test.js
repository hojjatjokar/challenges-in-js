import numberCompares from '.';

test('Number compares', () => {
  expect(numberCompares([4,2,6])).toEqual([2,4,6]);
});

test('Number compares', () => {
  expect(numberCompares(['4', '1', '6', '15', '10'])).toEqual(['1', '4', '6', '10', '15']);
});