<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> erathosthenes
const gp = require('../src/GetPrimes')
const getPrimes = gp.getPrimes;
describe('Get Prime Numbers Test', function(){

	describe("For edge cases", function(){

		it('should return X for Y', function(){
			expect(getPrimes(-2)).toEqual('invalid input');
		});
		it('should return X for Y', function(){
			expect(getPrimes('prime')).toEqual('invalid input');
		});
		it('should return X for Y', function(){
			expect(getPrimes(0)).toEqual('invalid input');
		});
		it('should return X for Y', function(){
			expect(getPrimes(2.5)).toEqual('invalid input');
		});
	});
	describe('For correct integer inputs', function(){
		it('should return X for Y', function(){
			expect(getPrimes(20)).toEqual([2,3,5,7,11,13,17,19]);
		});
		it('should return X for Y', function(){
			expect(getPrimes(1)).toEqual([]);
		});
		it('should return X for Y', function(){
			expect(getPrimes(8)).toEqual([2,3,5,7]);
		});
	});
<<<<<<< HEAD
});
=======
describe("Get Prime Numbers Test"){
	describe("For edge cases", function(){
		it('should return X for Y', function(){

		});
		it('should return X for Y', function(){

		});
		it('should return X for Y', function(){

		}),
	});
	describe('For correct integer inputs', function(){
		it('should return X for Y', function(){

		});
		it('should return X for Y', function(){

		});
		it('should return X for Y', function(){

		});
		it('should return X for Y', function(){

		});
	});
};
>>>>>>> tests
=======
});
>>>>>>> erathosthenes
