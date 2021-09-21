const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

test('verifica se a chamada "myRemoveWithoutCopy([1, 2, 3, 4], 3)" retorna o array esperado', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});
test('verifica se a chamada "myRemoveWithoutCopy([1, 2, 3, 4], 3)" não retorna o array [1, 2, 3, 4]', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});
test('verifica se o array passado por parâmetro não sofreu alterações', () => {
  const myArray = [1, 2, 3, 4];
  myRemoveWithoutCopy(myArray, 2);
  expect(myArray).not.toEqual([1, 2, 3, 4]);
});
test('Verifique se a chamada "myRemoveWithoutCopy([1, 2, 3, 4], 5)" retorna o array esperado', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});