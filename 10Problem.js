<!-- https://projecteuler.net/problem=10 -->

// Check is to see if number is prime
// Returns boolean
const isPrime = (n) =>
{
	let primes = [];
	// Checks for 1 and 2 returns true
	// Checks if divisible by 2 return false 
	if( n == 2 || n == 1)
		return true
	else if( n%2 == 0 )
	{
		return false;
	}

	// Start at 3
	for( let i = 3; i <= Math.sqrt(n); i = i+2 )
	{
		while( n % i == 0 )
		{
			n = n/i;
			primes.push(i);
			if(primes.length > 1)
			{
				return false;
				break;
			}
		}
		if( primes.length > 1 )
		{
			return false;
		}
	}
	primes.push(n);

	if(primes.length > 1){
		return false
	} else {
		return true
	}
}

const summationOfPrimes = (n) =>{
	let primeTotal = 2;
	for (let i=3; i <= n; i+=2)
	{
		if (isPrime(i))
		{
			primeTotal += i;
		}
		console.log(primeTotal);
	}
	return primeTotal;
}

//2 000 000
summationOfPrimes(2000000)
