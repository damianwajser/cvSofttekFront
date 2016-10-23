'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/login');

        // Application routes
        $stateProvider
            .state('login', {
                url: '/login',
                controller:'LoginCtrl',
                controllerAs: 'login',
                templateUrl: 'templates/login.html'
            })
            .state('base', {
                abstract:false,
                controller:'MasterCtrl',
                controllerAs: 'home',
                templateUrl: 'templates/layout.html'
            })
//-----------------------------------------------------------------------------
            .state('base.tecnologias', {
                url: '/tecnologias',
                controller:'TecnologiasController',
                templateUrl: 'templates/Tecnologias/Tecnologias.html'
            })
            .state('base.tecnologiasNivel', {
                url: '/tecnologiasNivel',
                params:{'tecno':''},        
                controller:'TecnologiasNivelController',
                templateUrl: 'templates/Tecnologias/TecnologiasNivel.html'
            })
    }
]);
