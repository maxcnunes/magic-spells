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
      .otherwise({
        redirectTo: '/'
      });
  });
