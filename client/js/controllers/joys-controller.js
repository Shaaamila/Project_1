app.controller('joysController' , ['$scope','$resource', 

	function ($scope, $resource){

		var Joy = $resource('/api/joys');

		$scope.joys = [
			{ name: "The tree blossomed today!"},
			{ name: "The sky is clear!"}

		]
		$scope.createJoy = function() {
			// $scope.joys.push({ name: $scope.joyName });
			// $scope.joyName = '';
			var joy = new Joy();
			joy.name = $scope.joyName; 
			joy.$save();
		}

}]);


