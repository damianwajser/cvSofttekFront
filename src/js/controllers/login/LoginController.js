angular.module('RDash')
    .controller('LoginCtrl', ['$scope','$rootScope','$state',"$window","$location","$http", 'SecurityService',
    LoginCtrl]);

function LoginCtrl($scope, $rootScope ,$state, $window, $location, $http, SecurityService) {
    $scope.loginButton = true;
    function init(){

      var code = window.location.search.replace("?code=","");
      console.log(code);
      if(code){
        $scope.loginButton = false;
        SecurityService.login(code).then(function(result){
            $rootScope.session = result;
            $http.defaults.headers.common.Authorization = result.token;
            console.log(result);
            console.log("log ok");
            $state.go("base.tecnologias");
        }, function(err){
          $scope.loginButton = true;
          console.log(err);
        });
      }
    };


    $scope.redirect = function(){
      SecurityService.getUrl().then(function(result){
        console.log(result);
        $window.location.href = result;
      });
    };
    init();
}
