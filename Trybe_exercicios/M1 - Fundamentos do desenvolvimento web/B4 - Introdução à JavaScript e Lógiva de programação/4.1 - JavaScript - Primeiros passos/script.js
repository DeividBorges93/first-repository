                      // EXERCÍCIO 1
// let a = 55;
// let b = 125;

// console.log(a + b);

// console.log(a - b);

// console.log(a * b);

// console.log(a / b);

// console.log(a % b);

                      // EXERCÍCIO 2

// let compare1 = 180;
// let compare2 = 160;

// if (compare1 > compare2) {
//     console.log(compare1);
// }
// else {
//     console.log(compare2);
// }

                      // EXERCÍCIO 3

// let compare1 = 18000;
// let compare2 = 2500;
// let compare3 = 2000;

// if (compare1 > compare2 && compare1 > compare3) {
//     console.log(compare1);
// }
// else if (compare2 > compare1 && compare2 > compare3){
//     console.log(compare2);
// }
// else {
//     console.log(compare3);
// }

                      // EXERCÍCIO 4

// let numero = 0;

// if (numero > 0) {
//     console.log("Positive");
// }
// else if (numero < 0) {
//     console.log("Negative");
// }
// else {
//     console.log(0);
// }

                      // EXERCÍCIO 5

// let angleA = 60;
// let angleB = 60;
// let angleC = 60;

// if (angleA < 0 || angleB < 0 || angleC < 0) {
//     console.log('Valor inválido!!');
// }
// else {

//     if (angleA + angleB + angleC === 180) {
//         console.log(true);
//     }
//     else if (angleA + angleB + angleC < 180 || angleA + angleB + angleC > 180) {
//         console.log(false);
//     }
//     else {
//         console.log('Ângulo inválido');
//     }
// }    

                      // EXERCÍCIO 6

// let chessPiece1 = 'hoRse'.toLowerCase();

// if (chessPiece1 === 'horse') {
//     console.log("Movimenta em L");
// }
// else {
//     console.log('Invalid piece');
// }

                      // EXERCÍCIO 7

// let nota = -5;

// if (nota > 100 || nota < 0) {
//     console.log('Nota inválida');
// }
// else if (nota >= 90) {
//     console.log('A');
// }
// else if (nota >= 80) {
//     console.log('B');
// }
// else if (nota >= 70) {
//     console.log('C');
// }
// else if (nota >= 60) {
//     console.log('D');
// }
// else if (nota >= 50) {
//     console.log('E');
// }
// else {
//     console.log('F');
// }
    

                      // EXERCÍCIO 8
                      
// let num1 = 5;
// let num2 = 9;
// let num3 = 7;

// if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }

                      // EXERCÍCIO 9

// let num1 = 2;
// let num2 = 6;
// let num3 = 8;

// if (num1 % 2 === 1 || num2 % 2 === 1 || num3 % 2 === 1) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }

                      // EXERCÍCIO 10

// let custoProduto = 100;
// let valorDeVenda = 200;
// let impostoSobreCusto = (20 / 100) * custoProduto; //20
// let custoFinalDoProduto = custoProduto + impostoSobreCusto; //120
// let lucroProduto = valorDeVenda - custoFinalDoProduto;

// if (custoProduto < 0 || valorDeVenda < 0) {
//     console.log('Valor 0 não permitido');
// }
// else {
//     console.log(lucroProduto * 1000);
// }

                      // EXERCÍCIO 11


let salarioBruto = 3000;
let inss = (11 / 100) * salarioBruto;
let salarioBase = salarioBruto - inss;
let aliquotaIr = (7.5 / 100) * salarioBase;
let parcelaDeduzir = 142.80;
let impostoRenda = aliquotaIr - parcelaDeduzir;
let salarioLiquido = salarioBase - impostoRenda;

console.log(salarioLiquido);





