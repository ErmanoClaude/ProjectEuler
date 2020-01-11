<!-- https://projecteuler.net/problem=5 -->

/* https://projecteuler.net/problem=3 */
// A function to return a array of prime factors
// factors of a given number
const primeFactors = (number) => 
{
	let primes = [];
	if(number == 1)
	{
		primes.push(1);
		return primes;
	}
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
	for (let i=3; i <= Math.sqrt(number); i+=2 )
	{
		
		//Keep dividing by the same number while divisible
		while ( number % i == 0 )
		{
			number = number/i;
			primes.push(i);
		}
	}
	if(number==1){
		return primes;
	}
	primes.push(number);
	return primes;
}


const smallestMultiple = (n) =>
{
	//Creates Array from 1,2,3,4,5,..n
	let arr = Array(n).fill().map((v,i)=>i+1);
	let primes = {};
	let pool = {};
	let unionPool = {};
	let smallPool = {};
	let smallestMultiples = 1;
	for (const element of arr)
	{
		//Returns Prime Factors of a Number 9 = [3,3]
		let factors = [...primeFactors(element)];
		smallPool = {};
		// Returns number of factors for each number
		// '10': {'2':1, '5':1}
		// Stores all factors to a pool
		for ( const val of factors )
		{
			// Counts Duplicates and stores in Object
			if(smallPool[val]){
				smallPool[val]++;
			} else {
				smallPool[val] = 1;
			}
		}
		// duplicate primes of an element stored in pool
		// \w a count 
		pool[element] = smallPool;
	}

	// sets highest amount of prime to union pool
	// 
	for ( const element in pool )
	{
		for ( const value in pool[element] )
		{
			//if we have value check if it higher
			// if its not set new highest
			if(unionPool[value])
			{
				if( unionPool[value] < pool[element][value] )
				{
					unionPool[value] = pool[element][value];
				}
			} else {
				unionPool[value] = pool[element][value];
			}
		}
	}
	for ( const element in unionPool )
	{
		smallestMultiples = smallestMultiples * Math.pow(element,unionPool[element])		
	}
	console.log(smallestMultiples)
}

smallestMultiple(20);

