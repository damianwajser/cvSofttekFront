angular.module('RDash')
    .controller('PersonasController', ['$scope', '$rootScope', '$state', 'PersonService', PersonasController]);

function PersonasController($scope, $rootScope, $state, PersonService) {
    $rootScope.title = "Personas";
    $rootScope.route = "";

    $scope.filter = "";
    $scope.orFilter = "";
    $scope.persons = {};
    $scope.count = {};
    $scope.actual = 1;

    $scope.info = function(id) {
        $state.go("base.persona", {
            id: id,
            tech:  $scope.orFilter
        });
    }
    $scope.filtrar = function() {
        $scope.orFilter = $scope.filter;
        PersonService.getCountByTechs($scope.actual, $scope.orFilter.split(",")).then(function(response) {
            $scope.count = response;
        });
        PersonService.getByTechs($scope.actual, $scope.orFilter.split(",")).then(function(response) {
            $scope.persons = response;
        });
    };

    $scope.next = function() {
        if ($scope.actual < $scope.count.cantPaginas) {
            $scope.actual++;
            PersonService.getByTechs($scope.actual, $scope.orFilter.split(",")).then(function(response) {
                $scope.persons = response;
            });
        }
    }

    $scope.back = function() {
        if ($scope.actual > 1) {
            $scope.actual--;
            PersonService.getByTechs($scope.actual, $scope.orFilter.split(",")).then(function(response) {
                $scope.persons = response;
            });
        }
    }
}
