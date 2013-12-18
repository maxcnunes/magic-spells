'use strict';

angular.module('magicSpellsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'highcharts-ng'
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
      .when('/general', {
        templateUrl: 'views/general-chart.html',
        controller: 'GeneralChartCtrl'
      })
      .when('/individual-score', {
        templateUrl: 'views/individual-score.html',
        controller: 'IndividualScoreCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
