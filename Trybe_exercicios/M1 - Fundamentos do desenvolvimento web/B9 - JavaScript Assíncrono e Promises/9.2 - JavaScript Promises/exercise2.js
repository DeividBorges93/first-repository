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
    .then((sum) => console.log(`Promise resolvida, valor: ${sum}`))
    .catch((sum) => console.log(`Promise rejeitada, valor: ${sum}`));
}

fetchPromise();