module.exports = function zeros(expression) {
	// your solution
	
	let fact = expression.split("*"),
		two = 0,
		five = 0;
	
	fact.forEach(elem => {
		let stage,
			num;

		if (elem.slice(-2) == '!!') {
			stage = 2;
			num = +elem.slice(0, -2);
		} else {
			stage = 1;
			num = parseInt(elem.slice(0, -1));
		}
		
		for(; 0 < num ; num -= stage) {
			let temp = num;
			while (temp % 5 == 0) {
				five++;
				temp /= 5;
			}
			
			temp = num;
			
			while (temp % 2 == 0) {
				two++;
				temp /= 2;
			}
		}
	});
	
	return Math.min(two, five);
}