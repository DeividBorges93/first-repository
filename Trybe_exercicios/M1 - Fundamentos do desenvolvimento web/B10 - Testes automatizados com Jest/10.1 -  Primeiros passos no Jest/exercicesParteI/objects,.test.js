const {obj1, obj2, obj3} = require('./objects');

test('verifica se um obj é igual ao outro', () => {
  expect(obj1).toEqual(obj2);
});
test('verificar se um obj não é igual ao outro', () => {
  expect(obj1).not.toEqual(obj3);
});