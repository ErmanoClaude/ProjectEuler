const sumSquareDifference = (n) =>
{
	// Creates new Array [1, 2, 3, ..n]
	let arr = Array(n).fill().map((v,i)=>i+1);
	// 1^2 + 2^2 + 3^2 + 4^2 + n^2
	let sumSquare = arr.map(v => v*v).reduce((acc, curr) => acc+ curr);
	// ( 1 + 2 + 3 + 4 + 5 + ..n )^2
	let squareOfSum = Math.pow(arr.reduce((acc, curr) => acc + curr),2)

	// Diffence between the two
	// squareOfSum - sumSquare = sumSquareDifference
	let sumSquareDif = squareOfSum - sumSquare;
	console.log(sumSquareDif)
	return sumSquareDif;
}

let sumSquareDiff = sumSquareDifference(100)
