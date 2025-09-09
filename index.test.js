const { isPrime, sumPrimes, printAnswer } = require('./index')

// isPrime function tests
describe('isPrime function', () => {
    test('checks if 2 is a prime number', () => {
        expect(isPrime(2)).toBe(true);
    });
    test('checks if 3 is a prime number', () => {
        expect(isPrime(3)).toBe(true);
    });
    test('checks if 4 is a prime number', () => {
        expect(isPrime(4)).toBe(false);
    });
    test('checks if 7 is a prime number', () => {
        expect(isPrime(7)).toBe(true);
    });
    test('checks if 15 is a prime number', () => {
        expect(isPrime(15)).toBe(false);
    });
    test('checks if 0 is a prime number', () => {
        expect(isPrime(0)).toBe(false);
    });
    test('checks if 1 is a prime number', () => {
        expect(isPrime(1)).toBe(false);
    });
    test('checks if negative numbers are prime', () => {
        expect(isPrime(-7)).toBe(false);
    });
});

// sumPrimes function tests
describe('sumPrimes function', () => {
    test('checks if the sum of the first 10 prime numbers is 129', () => {
        expect(sumPrimes(10)).toBe(129);
    });
    test('checks sum of first 5 prime numbers', () => {
        expect(sumPrimes(5)).toBe(28);
    });
    test('checks sum of first 1 prime number', () => {
        expect(sumPrimes(1)).toBe(2);
    });
    test('checks sum of first 0 prime numbers', () => {
        expect(sumPrimes(0)).toBe(0);
    });
    test('checks sum of first 15 prime numbers', () => {
        expect(sumPrimes(15)).toBe(328);
    });
});

// printAnswer function tests
describe('printAnswer function', () => {
    test('checks if the answer is returned for first 5 prime numbers', () => {
        expect(printAnswer(5)).toBe("Sum of first 5 prime numbers is 28");
    });
    test('checks if the answer is returned for first 10 prime numbers', () => {
        expect(printAnswer(10)).toBe("Sum of first 10 prime numbers is 129");
    });
    test('checks if the answer is returned for first 1 prime number', () => {
        expect(printAnswer(1)).toBe("Sum of first 1 prime numbers is 2");
    });
    test('checks if the answer is returned for first 0 prime numbers', () => {
        expect(printAnswer(0)).toBe("Sum of first 0 prime numbers is 0");
    });
});
