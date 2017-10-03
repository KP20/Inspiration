(function () {
var app = angular.module('myinspiration', []);
    app.controller('myinspirationController', ['$scope','$http',function ($scope,$http) {
        
        $scope.myWelcome = 'You Only Live Once!! #YOLO !!'
        
         $scope.search = function () {
          $http.get('https://random-quote-generator.herokuapp.com/api/quotes/random')
    .then(function(response) {
        //First function handles success
        $scope.myWelcome = response.data.quote;
    }, function(response) {
        //Second function handles error
        $scope.myWelcome = "Something went wrong";
    });
    }
    }]);
})();

//'https://random-quote-generator.herokuapp.com/api/quotes/random'