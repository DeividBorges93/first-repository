const newPerson = (nome) => {
  return {
    name: nome, 
    email: `${nome.toLowerCase().split(' ').join('_')}@trybe.com`};
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees(newPerson));

// Exercício 2

const checaSorteio = (playerNum, drawnNum) => playerNum === drawnNum;

const generateRandomNumber = (playerNum, checaSorteio) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return checaSorteio(playerNum, number) ? 'Parabéns, você ganhou!!' : 'Não foi dessa vez!'
};

console.log(generateRandomNumber(2, checaSorteio));