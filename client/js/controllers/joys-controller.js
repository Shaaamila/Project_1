app.controller('joysController' , ['$scope','$resource', function ($scope, $resource){
	var Joy = $resource('/api/joys');

	Joy.query(function (result){
		$scope.joys = result;
	})
		$scope.joys = []
		
		$scope.createJoy = function() {
			// $scope.joys.push({ name: $scope.joyName });
			// $scope.joyName = '';
			var joy = new Joy();
			joy.name = $scope.joyName; 
			joy.$save(function (result){
				$scope.joys.push(result);
				$scope.joyName = '';
			});
		}

}]);


