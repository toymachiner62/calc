var wolframAppId = 'QAH7L9-76P28363U4';

angular.module('calcApp').factory('CalcFactory', function($resource) {
	
	return $resource('http://localhost:3000/wolfram/:equation', {}, 
	{
		calculate: {
			method: 'GET',
			isArray: true
		}
	});
});