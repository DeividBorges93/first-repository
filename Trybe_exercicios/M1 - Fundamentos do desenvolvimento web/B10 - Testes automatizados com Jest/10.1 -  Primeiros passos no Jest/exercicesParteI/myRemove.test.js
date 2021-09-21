const myRemove = require('./myRemove');

test('verifica se passado "myRemove([1, 2, 3, 4], 3)" remove o 3 do array', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});
test('verifica se a chamada "myRemove([1, 2, 3, 4], 3)" não retorna o array [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});
test('verifica se o array passado por parâmetro não sofreu alterações', () => {
  const myArray = [1, 2, 3, 4];
  myRemove(myArray, 2);
  expect(myArray).toEqual([1, 2, 3, 4]);
});
test('verifica se a chamada "myRemove([1, 2, 3, 4], 5)" retorna o array esperado', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});
