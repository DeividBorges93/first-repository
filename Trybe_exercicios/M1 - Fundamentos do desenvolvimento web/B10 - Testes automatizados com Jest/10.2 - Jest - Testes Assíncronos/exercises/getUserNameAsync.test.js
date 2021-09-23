const getUserName = require('./getUserName');

describe('verifica getUserName', () => {
  describe('verifica retorno quando ID existe', () => {
    it('retorna o usarName', async () => {
      const data = await getUserName(1);
      expect(data).toEqual('Mark');
    });
  });
  describe('verifica retorno quando ID não existe', () => {
    it('retorna um erro', async () => {
      expect.assertions(1);
      try {
        await getUserName(3);
      } catch (error) {
        expect(error.message).toMatch('User with 3 not found.');
      }
    });
  });
});

