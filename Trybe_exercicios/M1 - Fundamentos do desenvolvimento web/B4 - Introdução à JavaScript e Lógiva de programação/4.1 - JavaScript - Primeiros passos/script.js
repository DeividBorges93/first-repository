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
//     console.log("Positive")
// }
// else if (numero < 0) {
//     console.log("Negative")
// }
// else {
//     console.log(0)
// }

                      // EXERCÍCIO 5

let angleA = 60;
let angleB = 60;
let angleC = 60;

if (angleA < 0 || angleB < 0 || angleC < 0) {
    console.log('Valor inválido!!')
}
else {

    if (angleA + angleB + angleC === 180) {
        console.log(true);
    }
    else if (angleA + angleB + angleC < 180 || angleA + angleB + angleC > 180) {
        console.log(false);
    }
    else {
        console.log('Ângulo inválido');
    }
}    