import countOfEachCharacter, {errorMessages} from ".";

test('Expect a argument', ()=>{
  expect(() => countOfEachCharacter()).toThrow(errorMessages.missingArgument);
});

test('Expect a argument of string type', ()=>{
  expect(() => countOfEachCharacter([])).toThrow(errorMessages.wrongArgument);
});

test('Expect a argument of string type', ()=>{
  expect(() => countOfEachCharacter({})).toThrow(errorMessages.wrongArgument)
});

test('Output {a: 1} for \'a\'', () =>{
  expect(countOfEachCharacter('a')).toMatchObject({a: 1});
});

test('Output {a: 1} for \'Hello challenge count of each character\'', () =>{
  expect(countOfEachCharacter('Hello challenge count of each character')).toMatchObject({
    H: 1,
    h: 3,
    e: 5,
    l: 4,
    o: 3,
    c: 5,
    a: 4,
    n: 2,
    g: 1,
    u: 1,
    t: 2,
    f: 1,
    r: 2,
  });
});
