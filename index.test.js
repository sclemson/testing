const { isPrime, sumPrimes, printAnswer } = require('./index')

test('checks if 3 is a prime number', () => {
    expect(isPrime(3)).toBe(true);
})

test('checks if 4 is a prime number', () => {
    expect(isPrime(4)).toBe(false);
})

test('checks if the sum of the first 10 prime numbers is 129',() => {
    expect(sumPrimes(10)).toBe(129);
}) 

test('checks if the answer is returned in the printAnswer function',() => {
    expect(printAnswer(5)).toBe("Sum of first 5 prime numbers is 28")
})
