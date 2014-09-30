'use strict';

/**
 * @ngdoc function
 * @name calcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the calcApp
 */
angular.module('calcApp')
  .controller('AboutCtrl', function ($scope, CalcFactory) {
    
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    console.log('here');

		// Creates canvas 320 x 200 at 10, 50
		var paper = Raphael(10, 50, 320, 200);

		// Creates circle at x = 50, y = 40, with radius 10
		var circle = paper.circle(50, 40, 10);
	
		// Sets the fill attribute of the circle to red(#f00)
		circle.attr('fill', '#f00');	

		// Set the stroke attribute of the circle to white
		circle.attr('stroke', '#fff');
		
		$scope.evaluate = function() {
			// Evaluate #tex with mathJax
			MathJax.Hub.Queue(["Typeset",MathJax.Hub,"tex"]);
		}
		
		CalcFactory.calculate(function(result) {
			console.log(result);
			$scope.image = result[0].subpods[0].image;
			console.log($scope.image);
		});
		
  });
