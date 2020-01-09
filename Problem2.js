/* https://projecteuler.net/problem=2 */
var fibbo = () => {
	var start = [1,2];
	var total = 2;
	var even = [2]
	while(start[start.length-1] + start[start.length-2] < 4000000){
		var current = start[start.length-1] + start[start.length-2];
		start.push(current);
		if( current % 2 == 0){
			total = total + current;
			even.push(current)
		}
	}
}
fibbo();
