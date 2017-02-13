module.exports = {
	getPrimes(n){
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