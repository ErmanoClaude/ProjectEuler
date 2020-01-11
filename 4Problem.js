<!-- https://projecteuler.net/problem=4 -->
//Largest Palindrome Product
//Finds largest Palindrome between two numbers
const palindromeProduct = () =>
{
	let found = 0;
	let solution = [];
	for ( var i=836; i<=999; i++ )
	{
		for(var j=i; j<=999; j++ )
		{
			let product = j*i;
			let stringProd = product.toString().split("").reverse().join("");
			if( product.toString() == stringProd && i*j> found ){
				solution = [i,j];
				found = i*j
			}
		}
	}
	return solution;
}

console.log(palindromeProduct());
