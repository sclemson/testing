function sumPrimesMessage(n) {
  if (n <= 0) return `Sum of first ${n} prime numbers is 0`;

  let found = 0;
  let i = 2;
  let sum = 0;

  while (found < n) {

    let prime = i >= 2;
    if (i > 2) {
      for (let d = 2; d <= Math.sqrt(i); d++) {
        if (i % d === 0) { prime = false; break; }
      }
    }
    if (prime) { found++; sum += i; }
    i++;
  }

  return `Sum of first ${n} prime numbers is ${sum}`;
}

module.exports = sumPrimesMessage;