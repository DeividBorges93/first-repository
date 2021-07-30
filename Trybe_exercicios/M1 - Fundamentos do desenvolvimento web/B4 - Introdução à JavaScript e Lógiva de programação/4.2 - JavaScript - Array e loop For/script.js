                            // Exercício 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

                            // Exercício 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
    soma = soma + numbers[i];
}

console.log(soma);

                            // Exercício 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaAritmetica;

for (let i = 0; i < numbers.length; i += 1) {
    soma = soma + numbers[i];
    mediaAritmetica = soma / numbers.length;
}

console.log(mediaAritmetica);

                            // Exercício 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaAritmetica;

for (let i = 0; i < numbers.length; i += 1) {
    soma = soma + numbers[i];
    mediaAritmetica = soma / numbers.length;
}
if(mediaAritmetica > 20) {
    console.log('valor maior que 20');
}
else {
    console.log('valor menor que 20');
}

                            // Exercício 5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var numeroMaior = 0;

for (var i = 0; i < numbers.length; i += 1) {
   if ( numbers[i] > numeroMaior ) {
      numeroMaior = numbers[i];
   }
}

console.log(numeroMaior);

                            // Exercício 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
 let divisao = numbers[i] % 2 
    if (divisao === 1) {
        console.log(numbers[i])
    }
    else {
        console.log("nenhum valor ímpar encontrado");
    }
}

                            // Exercício 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var numeroMenor = numbers.length + 1;

for (var i = 0; i < numbers.length; i += 1) {
   if ( numbers[i] < numeroMenor ) {
      numeroMenor = numbers[i];
   }
}
console.log(numeroMenor);

                            Exercício 8

let sequencia = [];

for ( let i = 1; i <= 25; i += 1) {
    sequencia.push(i);
}
console.log(sequencia);

                          // Exercício 9

let sequencia = [];
let resultado;

for ( let i = 1; i <= 25; i += 1) {
    sequencia.push(i);
    for (i = 0; i < sequencia.length; i += 1) {
        resultado = sequencia[i] / 2;
    }
    console.log(resultado);
}
                            // Exercício 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaAritmetica;

for (let i = 0; i < numbers.length; i += 1) {
    soma = soma + numbers[i];
    mediaAritmetica = soma / numbers.length;
}

console.log(mediaAritmetica);

                            // Exercício 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaAritmetica;

for (let i = 0; i < numbers.length; i += 1) {
    soma = soma + numbers[i];
    mediaAritmetica = soma / numbers.length;
}
if(mediaAritmetica > 20) {
    console.log('valor maior que 20');
}
else {
    console.log('valor menor que 20');
}

                            // Exercício 5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var numeroMaior = 0;

for (var i = 0; i < numbers.length; i += 1) {
   if ( numbers[i] > numeroMaior ) {
      numeroMaior = numbers[i];
   }
}

console.log(numeroMaior);

                            // Exercício 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
 let divisao = numbers[i] % 2 
    if (divisao === 1) {
        console.log(numbers[i])
    }
    else {
        console.log("nenhum valor ímpar encontrado");
    }
}

                            // Exercício 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var numeroMenor = numbers.length + 1;

for (var i = 0; i < numbers.length; i += 1) {
   if ( numbers[i] < numeroMenor ) {
      numeroMenor = numbers[i];
   }
}
console.log(numeroMenor);

                            // Exercício 8

let sequencia = [];

for ( let i = 1; i <= 25; i += 1) {
    sequencia.push(i);
}
console.log(sequencia);
                          // Exercício 9

let sequencia = [];
let resultado;

for ( let i = 1; i <= 25; i += 1) {
    sequencia.push(i);
    for (i = 0; i < sequencia.length; i += 1) {
        resultado = sequencia[i] / 2;
    }
    console.log(resultado);
}
