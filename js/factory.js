var app = angular.factory('getReddit', function($http){
  var pulledData = {};

  return {
    getData: function() {
      $http({
        url: 'https://www.reddit.com/r/awww/.json',
        method: 'GET'
      });
    }
  }
});
