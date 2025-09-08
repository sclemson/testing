const { isPrime, sumPrimes } = require('./index')

test('checks if 3 is a prime number', () => {
    expect(isPrime(3)).toBe(true);
})

test('checks if 4 is a prime number', () => {
    expect(isPrime(4)).toBe(false);
})

test('checks if the sum of the first 10 prime numbers is 129',() => {
    expect(sumPrimes(10)).toBe(129);
}) 
