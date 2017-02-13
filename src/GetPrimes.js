module.exports = {
	getPrimes(n){
		if(isNaN(n)){
			return 'invalid input';
		} else if (n <= 0){
			return 'invalid input';
		} else if(n % 1 != 0){
			return 'invalid input';
		}

		const upperLimit = Math.sqrt(n);
		const fullList = [];
		const result = [];
		for(var i = 0; i < n; i++){
			fullList.push(true);
		}
		for(var m = 2; m < upperLimit; m++){
			if(fullList[m]){
				for(j = m*m; j < n; j+=m){
					fullList[j] = false;
				}
			}
		}
		for(var k = 2; k < n; k++){
			if(fullList[k]){
				result.push(k);
			}
		}
		return result;
	}
};