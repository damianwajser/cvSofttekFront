angular.module('RDash')
    .controller('TecnologiasNivelController', ['$scope','$rootScope','$state','$stateParams',TecnologiasNivelController]);

function TecnologiasNivelController($scope, $rootScope, $state, $stateParams) {
    $rootScope.title = "Tecnologias";
    $rootScope.route = "Tecnologias / "+ $stateParams.tecno.name +" / Nivel";
    
    $scope.niveles=[
      {
        label:"Principiante",
        id:1
      },
      {
        label:"Intermedio",
        id:1
      },
      {
        label:"Avanzado",
        id:1
      }
    ];
}
