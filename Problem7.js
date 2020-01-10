<!-- https://projecteuler.net/problem=7 -->
const isPrime = (n) => {
	let primes = [];
	if(n==2){
		return true;
	}
	if(n == 1){
		return true;
	}
	//Gett all the 2s out
	while(n%2==0)
	{
		n = n/2;
		return false;
	}
	for(let i=3; i <= Math.sqrt(n); i=i+2)
	{
		while( n%i==0 )
		{
			n = n/i;
			primes.push(i);
		}
	}
	primes.push(n)
	if(primes.length>1){
		return false
	}
	return true;
}

const listOfPrime =  (place) =>
{
	let primes = [];
	for ( let i = 0; primes.length <= place; i++ )
	{
		if( isPrime(i) )
		{
			primes.push(i)
		}
	}
	console.log(primes[primes.length - 1])
}

listOfPrime(10001)
