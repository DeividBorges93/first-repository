const num = (num) => {
  console.log(`${num}! = ${num} * ${num - 1} * ${num - 2} * ${num - 3} * ${num - 4} = ${num*(num - 1)*(num - 2)*(num - 3)*(num - 4)}`);
}

num(5);

// const factorial = number => {
//   let result = 1;

//   for (let index = 2; index <= number; index += 1) {
//       result *= index;
//   }

//   return result;
// }

// console.log(factorial(5));
