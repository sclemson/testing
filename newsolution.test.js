const sumPrimesMessage = require('./newsolution')

describe('sumPrimesMessage function', () => {
  test('checks if the answer is returned for first 1 prime number', () => {
    expect(sumPrimesMessage(1)).toBe("Sum of first 1 prime numbers is 2");
  });

  test('checks if the answer is returned for first 0 prime numbers', () => {
    expect(sumPrimesMessage(0)).toBe("Sum of first 0 prime numbers is 0");
  });

  test('checks if the answer is returned for negative numbers', () => {
    expect(sumPrimesMessage(-5)).toBe("Sum of first -5 prime numbers is 0");
    expect(sumPrimesMessage(-1)).toBe("Sum of first -1 prime numbers is 0");
  });

  test('checks if the answer is returned for first 5 prime numbers', () => {
    expect(sumPrimesMessage(5)).toBe("Sum of first 5 prime numbers is 28");
  });

  test('checks if the answer is returned for first 10 prime numbers', () => {
    expect(sumPrimesMessage(10)).toBe("Sum of first 10 prime numbers is 129");
  });

  test('checks if the answer is returned for first 15 prime numbers', () => {
    expect(sumPrimesMessage(15)).toBe("Sum of first 15 prime numbers is 328");
  });
});


