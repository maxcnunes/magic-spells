'use strict';

angular.module('magicSpellsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/houses', {
        templateUrl: 'views/houses.html',
        controller: 'WizardHousesCtrl'
      })
      .when('/current', {
        templateUrl: 'views/current.html',
        controller: 'CurrentWizardsCtrl'
      })
      .when('/abracadabra', {
        templateUrl: 'views/abracadabra.html',
        controller: 'MagicSpellsCtrl'
      })
      .when('/board', {
        templateUrl: 'views/board.html',
        controller: 'MagicBoardCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
