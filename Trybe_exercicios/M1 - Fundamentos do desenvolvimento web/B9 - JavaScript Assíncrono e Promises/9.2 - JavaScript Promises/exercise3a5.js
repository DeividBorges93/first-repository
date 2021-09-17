const fetchPromise = () => {
const promise = new Promise ((resolve, reject) => {
  const numbersArray = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50) + 1,
  );
  const sum = numbersArray.map((number) => number * number)
  .reduce((sum, number) => sum + number);

  (sum < 8000) ? resolve(sum) : reject(sum);
  });
  promise
    .then(sum => [2, 3, 5, 10].map(number => Math.floor(sum / number)))
    .then(result => result.reduce((acc, current) => acc + current), 0)
    .then(result => console.log(`A soma dos 4 valores é: ${result}`))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}

fetchPromise();