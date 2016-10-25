'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/personas');

        // Application routes
        $stateProvider
            .state('base', {
                abstract:false,
                controller:'MasterCtrl',
                controllerAs: 'home',
                templateUrl: 'templates/layout.html'
            })
//-----------------------------------------------------------------------------
            .state('base.personas', {
                url: '/personas',
                controller:'PersonasController',
                templateUrl: 'templates/Personas/Personas.html'
            })
            .state('base.persona', {
                url: '/persona',
                controller:'PersonaController',
                params:{'id':1, 'tech':''},
                templateUrl: 'templates/Personas/Persona.html'
            })
    }
]);
