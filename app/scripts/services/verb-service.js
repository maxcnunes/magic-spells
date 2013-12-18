'use strict';

angular.module('magicSpellsApp')
  .service('VerbService', function VerbService($http) {
    var httpPath = '/api/verbs',
    verbs = [],
    getRoundsVerbs = function (callback, book, force) {
      if (verbs.length > 0 || force === false) {
        callback(verbs);
        return;
      }
      $http.get(httpPath + '/' + book).success(function(result){
        verbs = result;
        callback(result);
      });
    };

    return {
      getRoundsVerbs: getRoundsVerbs
    };
  });
