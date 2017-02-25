var app = angular.module('myMod');

app.controller('getReddit', function($scope, $http) {
    function getData() {
        $http({
            url: 'https://www.reddit.com/r/awww/top/.json',
            method: 'GET'
        }).then(function success(response) {
            $scope.pulledData = response;
            console.log(response);
            $scope.posts = $scope.pulledData.data.data.children;
        }, function(error) {
            console.log(error);
        });
    };
  getData();
});
