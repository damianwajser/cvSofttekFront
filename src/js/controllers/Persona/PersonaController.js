angular.module('RDash')
    .controller('PersonaController', ['$scope', '$rootScope', '$state', '$stateParams','$sce', 'PersonService', PersonaController]);

function PersonaController($scope, $rootScope, $state, $stateParams,$sce ,PersonService) {
    $rootScope.title = "Personas";
    $rootScope.route = "Informacion";

    PersonService.findById($stateParams.id).then(function(response) {
        $scope.person = response;

        var reg = new RegExp($stateParams.tech.replace(new RegExp(',', 'g'), "|"), 'gi');
        console.log(reg);
        $scope.person.html = $sce.trustAsHtml($scope.person.cvString.replace(reg, '<span class="highlightedText">$&</span>'));
    });
}
