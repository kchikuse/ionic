angular.module('mhuri.controllers', [])

.controller('AppCtrl', function($scope, $timeout) {
	$scope.$on('$ionicView.loaded', function() {
	  ionic.Platform.ready( function() {
	    if(navigator && navigator.splashscreen) $timeout(navigator.splashscreen.hide, 1000);
	  });
	});
})

.controller('SearchCtrl', function($scope, People) {
	$scope.data = { query: '' };
	$scope.doSearch = function() {
		var query = $scope.data.query.trim();
		if(query.length) {
			$scope.results = People.search(query);			
			$scope.results.forEach(function(e) {
				e.parent = People.get(e.pid).name;
				e.count = People.children(e.id).length;				
			});
		}
		else {
			$scope.results = [];
		}
	};
})

.controller('ChildCtrl', function($scope, $stateParams, People) {
	var id = $stateParams.parent;
	$scope.person = People.get(id);
	$scope.children = People.children(id);
	$scope.children.forEach(function(e) {
		e.count = People.children(e.id).length;
	});
});