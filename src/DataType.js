module.exports = {
	dataTypes (data){
		if(data === undefined || data === null){
			return 'no value';
		}

		const type = typeof data;
		const array = data instanceof Array;

		switch(type){
			case 'boolean':
				if(data === true){
					return true;
				} else {
					return false;
				}
				break;
			case 'number':
				if(data < 100){
					return 'less than 100';
				} else if (data >  100){
					return 'more than 100';
				} else {
					return 'equal to 100'
				}
				break;
			case 'string':
				return data.length;
			case 'function':
				return data(true);
			case 'object':
				if(array){
					return data[2];
				} 
		}
	}
}

