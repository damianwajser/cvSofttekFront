angular.module('RDash')
    .controller('TecnologiasController', ['$scope','$rootScope','$state',TecnologiasController]);

function TecnologiasController($scope, $rootScope, $state) {
    $rootScope.title = "Tecnologias";
    $rootScope.route = "Tecnologias";

    $scope.elegirNivel = function(tecno){
      $state.go("base.tecnologiasNivel", {tecno:tecno});
    }

    $scope.tecnologias=[
      {
        name:"ruby",
        img: "https://hackealo.co/static/images/xico-ruby.png.pagespeed.ic.6ME5yJsBlu.png",
        id:1
      },
      {
        name:"java",
        img: "https://hackealo.co/static/images/xico-java.png.pagespeed.ic.Do73r2nxgS.png",
        id:2
      },
      {
        name:"python",
        img: "https://hackealo.co/static/images/xico-python.png.pagespeed.ic.bSbUc4EGg6.png",
        id:3
      },
      {
        name:"php",
        img: "https://hackealo.co/static/images/xico-php.png.pagespeed.ic.x-Jwg6oSO0.png",
        id:4
      }
    ];
}
