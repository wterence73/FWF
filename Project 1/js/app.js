var app= angular.module('theApp', [ ] );
app.controller('ListController', function($scope) {
		
		$scope.newItem;
		
		$scope.groceries=['Bread', 'Milk', 'Eggs', 'Apples', 'Grapes', 'Sausage'];
		
		$scope.addItem= function() {
				$scope.groceries.push($scope.newItem);
				$scope.newItem= ' ';
				
		}
		
		
		$scope.removeItem= function(item) {
				var idx= $scope.groceries.indexOf(item);
				$scope.groceries.splice(idx, 1);
		}
		
		});
