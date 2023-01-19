function countPrimeNumbers () {
  let numberOfPrimeNumber = 0;
  for (let num = 2; num <= 100; num++) {
    let notPrime = false;
    for (let div = 2; div <= 100; div++) {
      if (num % div === 0 && div !== num) {
        notPrime = true;
      }
    }
    if (notPrime === false) {
      numberOfPrimeNumber += 1;
    }
  }
  return (numberOfPrimeNumber);
}

let startTime = performance.now();
for (let times = 0; times < 100; times++) {
  setTimeout(() => {
    countPrimeNumbers();
  }, 0);
};
let timeUsed = performance.now();
console.log('Execution time of printing countPrimeNumbers was ' + (timeUsed - startTime) + ' milliseconds.');
