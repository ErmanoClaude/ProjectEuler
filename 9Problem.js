<!-- https://projecteuler.net/problem=9 -->

const pythagoreanTriplet = (n) =>
{
	let a = 3;
	let end = n;
	let rights = [];
	// A to 1000
	for (a; a<end; a++)
	{
		for (let b = a; b<end; b++)
		{
			// c = √(A^2 + B^2)
			let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
			if(a + b + c > 1000){
				break;
			}
			// if C is whole number means
			// a^2 + b^2 = c^2 and check if adds to 1000
			if( c % 1 == 0 && a + b + c == 1000 )
			{
				rights.push(...[a,b,c]);
				// makes "a" higher then end to break loop
				// and breaks this loop
				a = 10000;
				break;
			}
		}
	}
	return rights;
}

let rights = pythagoreanTriplet(1000);
let product = rights[0] * rights[1] * rights[2];
console.log(product)

