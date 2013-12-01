'use strict';

angular.module('magicSpellsApp')
  .service('HouseService', function HouseService($http) {
    var httpPath = '/api/houses',
    getAll = function () {
      return $http.get(httpPath);
    };

    return {
      getAll: getAll
    };
  });
