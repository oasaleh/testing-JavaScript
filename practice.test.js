import {
  sum,
  capitalize,
  reverseString,
  calculate,
  caesarCipher,
  arrayAnalysis,
} from './practice.js';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('capitalize first character of a string', () => {
  expect(capitalize('omar')).toBe('Omar');
});

test('reverse a string', () => {
  expect(reverseString('omar')).toBe('ramo');
});

test('calculate', () => {
  expect(calculate.add(8, 3)).toBe(11);
});
test('calculate', () => {
  expect(calculate.div(8, 2)).toBe(4);
});
test('calculate', () => {
  expect(calculate.mul(8, 3)).toBe(24);
});
test('calculate', () => {
  expect(calculate.sub(8, 3)).toBe(5);
});

test('caesarCipher', () => {
  expect(caesarCipher('omar', 3)).toBe('rpdu');
});
test('caesarCipher', () => {
  expect(caesarCipher('Hello, world!', 3)).toBe('Khoor, zruog!');
});
test('caesarCipher', () => {
  expect(caesarCipher("His name is Ma'moun", 12)).toBe("Tue zmyq ue Ym'yagz");
});

test('Array Analysis', () => {
  const array = [1, 8, 3, 4, 2, 6];
  const object =
    {
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    };
  expect(arrayAnalysis(array)).toEqual(object);
});
