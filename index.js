function sumPrimes(n)
{
    let foundPrimes = 0;
    let i = 2;
    let sum = 0;
    
    while(foundPrimes < n)
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

function isPrime(n)
{
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    for(let i = 2; i <= Math.sqrt(n); i++)
    {
        if (n % i === 0)
        {
            return false;
        }
    }
    
    return true;
}


module.exports = { sumPrimes, isPrime }