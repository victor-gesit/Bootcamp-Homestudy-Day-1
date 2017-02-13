const gp = require('../src/GetPrimes')
const getPrimes = gp.getPrimes;
describe('Get Prime Numbers Test', function(){

	describe("For edge cases", function(){

		it('should return "invalid input" for -2 ', function(){
			expect(getPrimes(-2)).toEqual('invalid input');
		});
		it('should return "invalid input" for "prime" for Y', function(){
			expect(getPrimes('prime')).toEqual('invalid input');
		});
		it('should return "invalid input" for 0', function(){
			expect(getPrimes(0)).toEqual('invalid input');
		});
		it('should return "invalid input" for 2.5', function(){
			expect(getPrimes(2.5)).toEqual('invalid input');
		});
	});
	describe('For correct integer inputs', function(){
		it('should return [2,3,5,7,11,13,17,19] for 20', function(){
			expect(getPrimes(20)).toEqual([2,3,5,7,11,13,17,19]);
		});
		it('should return [] for 1', function(){
			expect(getPrimes(1)).toEqual([]);
		});
		it('should return [2,3,5,7] for 8', function(){
			expect(getPrimes(8)).toEqual([2,3,5,7]);
		});
		it('should return [2,3,5,7,11] for 11', function(){
			expect(getPrimes(11)).toEqual([2,3,5,7,11]);
		});
	});
});