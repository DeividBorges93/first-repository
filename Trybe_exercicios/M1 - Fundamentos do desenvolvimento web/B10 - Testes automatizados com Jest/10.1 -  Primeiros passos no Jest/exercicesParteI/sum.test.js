const sum = require('./sum');

test('soma 2 valores', () => {
  expect(sum(4, 5)).toBe(9);
});
test('verifica se 0 + 0 é igual a 0', () => {
  expect(sum(0, 0)).toBe(0);
})
test('verifica se lança um erro quando os parâmetros são 4 e "5"', () => {
  expect(() => {sum(4, '5')}).toThrow();
})
test('verifica se a mensagem de erro é "parameters must be numbers"', () => {
  expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
})