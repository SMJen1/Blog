var myApp = angular.module('myApp', []);

myApp.controller('commentController', function($scope, $http) {
	
	var http = $http;

	$scope.commentList = [];

	$scope.Count = 0;

	$scope.getComments = function(commentPage) {
		$scope.$broadcast("getComments", {'page': commentPage})
	};

	$scope.$on('getComments', function(data) {
		http.get('/api/iife').then(function(response) {
			$scope.commentAvailable = true;
			$scope.commentList = response.data;
			$scope.Count = $scope.commentList.length;
		});
	})

	var initilizeData = function() {
		$scope.commentData = {
			user: '',
			email: '',
			message: ''
		};
	}

	$scope.commentAvailable = false;

	$scope.addComment = function() {
		http.post('/api/comment', $scope.commentData).then(function(commentData) {
			$scope.commentAvailable = true;
			$scope.commentList.push($scope.commentData);
			$scope.Count = $scope.commentList.length;
			initilizeData();
		});
	}
})