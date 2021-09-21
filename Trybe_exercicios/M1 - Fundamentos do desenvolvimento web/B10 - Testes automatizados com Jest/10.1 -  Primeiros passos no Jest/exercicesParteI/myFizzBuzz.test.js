const myFizzBuzz = require('./myFizzBuzz');

test('verifica se um número divisível por 3 e 5 retorna "fizzbuzz"', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});
test('verifica se um número divisível somente por 3 retorna "buzz"', () => {
  expect(myFizzBuzz(9)).toBe('fizz');
});
test('verifica se um número divisível apenas por 5 e retorna "fizz"', () => {
  expect(myFizzBuzz(5)).toBe('buzz');
});
test('verifica se um número não divisível por 3 ou 5 retorna o próprio número', () => {
  expect(myFizzBuzz(4)).toBe(4);
});
test('verifica se caso o parametro passado não seja um número, retorna false', () => {
  expect(myFizzBuzz('5')).toBe(false);
});