const funcoes = require('./randomNum');

describe('Testando função "randomNum"', () => {
  it('verifica se a função foi chamada', () => {
    funcoes.randomNum = jest.fn().mockReturnValue(10);
    
    expect(funcoes.randomNum()).toBe(10);
    expect(funcoes.randomNum).toHaveBeenCalled();
    expect(funcoes.randomNum).toHaveBeenCalledTimes(1);
  })
})
