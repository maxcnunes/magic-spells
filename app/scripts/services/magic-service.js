'use strict';

angular.module('magicSpellsApp')
  .service('MagicService', function MagicService($http) {
    var currentHouse = '',
    getGeneralResult = function () {
      return $http.get('/api/general-result');
    };

    return {
      currentHouse: currentHouse,
      getGeneralResult: getGeneralResult
    };
  });
