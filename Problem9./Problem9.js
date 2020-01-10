<!-- https://projecteuler.net/problem=9 -->

const pythagoreanTriplet = (n) =>
{
	let a = 3;
	let end = n;
	let rights = [];
	for (a; a<end; a++)
	{
		for (let b = a; b<end; b++)
		{
			let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
			if(a + b + c > 1000){
				break;
			}
			if( c%1 == 0 && a + b + c == 1000 )
			{
				rights.push(...[a,b,c]);
			}
		}
	}
	return rights;
}

let rights = pythagoreanTriplet(1000);
let product = rights[0] * rights[1] * rights[2];
console.log(product)

