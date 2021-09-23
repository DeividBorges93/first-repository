const getUserName = require('./getUserName');

describe('verifica getUserName', () => {
  describe('verifica retorno quando ID existe', () => {
    it('retorna o usarName', () => (
      getUserName(1).then((data) => expect(data).toEqual('Mark'))
    ));
  });
  describe('verifica retorno quando ID não existe', () => {
    it('retorna um erro', () => {
      expect.assertions(1);
      return getUserName(3).catch((error) => expect(error.message).toMatch('User with 3 not found.'));
    });
  });
});

