/* https://projecteuler.net/problem=3 */
// A function to return a array of prime factors
// factors of a given number
const primeFactors = (number) => 
{
	let primes = [];
	// First get all the 2s in a number
	if(number==2)
	{
		primes.push(2);
		return primes;
	}
	while( number % 2 == 0 )
	{
		number = number/2;
		primes.push(2);
	}

	//Start with 3 keeps dividing by same number
	//Then move up by 2 Till we reach sqrt of number
	for (let i=3; i < Math.sqrt(number); i+=2 )
	{
		//Keep dividing by the same number while divisible
		while ( number % i == 0 )
		{
			number = number/i;
			primes.push(i);
		}
	}
	primes.push(number);
	return primes;
}

//Gets the Max Prime Factor of number
console.log(Math.max(...primeFactors(900)))
