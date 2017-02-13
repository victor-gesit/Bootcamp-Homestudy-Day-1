const gp = require('../src/GetPrimes')
const getPrimes = gp.getPrimes;
describe('Get Prime Numbers Test', function(){

	describe("For edge cases", function(){
		
		it('should return X for Y', function(){
			expect(getPrimes(-2)).toBe('invalid input');
		});
		it('should return X for Y', function(){
			expect(getPrimes('prime')).toBe('invalid input');
		});
		it('should return X for Y', function(){
			expect(getPrimes(0)).toBe('invalid input');
		});
		it('should return X for Y', function(){
			expect(getPrimes(2.5)).toBe('invalid input');
		});
	});
	describe('For correct integer inputs', function(){
		it('should return X for Y', function(){
			expect(getPrimes(20)).toBe([2,3,5,7,11,13,17,19]);
		});
		it('should return X for Y', function(){
			expect(getPrimes(1)).toBe([]);
		});
		it('should return X for Y', function(){
			expect(getPrimes(8)).toBe([2,3,5,7]);
		});
	});
});