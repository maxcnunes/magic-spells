'use strict';

angular.module('magicSpellsApp')
  .service('MagicService', function MagicService($http) {
    var getGeneralResult = function () {
      return $http.get('/api/general-result');
    };

    return {
      getGeneralResult: getGeneralResult
    };
  });
