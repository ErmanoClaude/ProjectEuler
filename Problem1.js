/* https://projecteuler.net/problem=1 */

const multiples = () => {
	let count = 1000;
	let total = 0;
	for ( var i=0; i<count; i++){
		if( i%3 == 0 || i%5 ==0 ){
			total = total + i;
		}
	}
	return total;
}
let Answer = multiples();
