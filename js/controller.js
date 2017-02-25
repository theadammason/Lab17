var app = angular.module('myMod');

app.controller('getReddit', function($scope, $http){

  $scope.pulledData={};

  function getData() {
      $http({
        url: 'https://www.reddit.com/r/awww/.json',
        method: 'GET'
      }).then(function success(response){
        console.log(response);
        $scope.pulledData = response;
      }, function(error) {
        console.log(error);
      });
    };

  return getData();




});
