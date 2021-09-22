const uppercase = require('./upperCase');

test('verifica se passando uma string a transforma em letra maiúscula', (done) => {
  uppercase('deivid', (str) => {
    try {
      expect(str).toBe('DEIVID');
      done();
    } catch (error) {
      done(error);
    }
  });
});