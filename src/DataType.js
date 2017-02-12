const DataType = {
	dataTypes : function (data){
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
				break;
			case 'function':
				return data(true);
				break;
			case 'object':
				if(array){
					return data[2];
				} 
		}
	}
}

var a = DataType.dataTypes;
console.log(a("Hello"));