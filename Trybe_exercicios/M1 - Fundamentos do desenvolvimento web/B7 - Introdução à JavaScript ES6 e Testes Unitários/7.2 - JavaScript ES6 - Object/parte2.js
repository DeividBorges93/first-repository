const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
// Exercício 1
const addMorningShift = (obj, key, value) => obj[key] = value;

console.log(addMorningShift(lesson2, 'turno', 'manhã'));

// Exercício 2
const listingKeys = (obj) => Object.keys(obj);

console.log(listingKeys(lesson2));

// Exercício 3
const sizeObj = (obj) => Object.keys(obj).length;

console.log(sizeObj(lesson2));

// Exercício 4
const valuesObj = (obj) => Object.values(obj);

console.log(valuesObj(lesson2));

// Exercício 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

// Exercício 6
const sumStudents = (obj) => {
  const keys = Object.keys(obj);
  let totalStudents = 0;

  for (let index = 0; index < keys.length; index += 1) {
    const currentKey = keys[index];
    totalStudents += obj[currentKey].numeroEstudantes;
  }
  return totalStudents;
}

console.log(sumStudents(allLessons));

// Exercício 7
const getValueByNumber = (obj,number) => {
  Object.values(obj)[number];
}

console.log(getValueByNumber);