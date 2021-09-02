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

const checarSorteio = (playerNum, drawnNum) => playerNum === drawnNum;

const generateRandomNumber = (playerNum, checaSorteio) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return checaSorteio(playerNum, number) ? 'Parabéns, você ganhou!!' : 'Não foi dessa vez!'
};

console.log(generateRandomNumber(2, checarSorteio));

// Exercício 3

const right_answers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const student_answers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const sumNote = (rigthAnswers, studentAnswers, action) => {
  let nota = 0;
  for (let index = 0; index <= rigthAnswers.length; index += 1) {
    const actionReturn = action(rigthAnswers[index], studentAnswers[index]);
    nota += actionReturn;
  }
  return `Resultado: ${nota} questões correstas.`
}
console.log(sumNote(right_answers, student_answers, (rAnswers, uAnswers) => {
  if (rAnswers === uAnswers) {
    return 1;
  } if (uAnswers === 'N.A') {
    return 0;
  } 
  return -0.5;
}));
