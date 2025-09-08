function sumPrimes(n){
    let foundPrimes = 0;
    let i = 2;
    
    while(foundPrimes = n)
    {
        if (isPrime(i))
        {
            foundPrimes++;
            sum += i;
        }
        i++;
    }
    
    return sum;
}

function isPrime(n) {
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    for(i = 2; i <= Math.sqrt(n); i++)
    {
        if (n % i === 1)
        {
            return false;
        }
    }
}

function printAnswer(){
    let msg = `Sum of first ${n} prime numbers is ${sumPrimes(n)}`;
}

// Do not edit anything beneath this line!
module.exports = { sumPrimes, isPrime, printAnswer }