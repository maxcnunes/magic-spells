'use strict';

angular.module('magicSpellsApp')
  .service('MagicService', function MagicService($http) {
    var currentHouse,
    wizards = [],
    presentWizards = [],
    getGeneralResult = function () {
      return $http.get('/api/general-result');
    },
    addWizardToRound = function () {

    },
    removeWizardOfRound = function () {

    },
    toggleWizardIsPresent = function (index) {
      wizards[index].present = !wizards[index].present;
    },
    getWizardsByHouse = function () {
      wizards = [
        { _id: 0, name: 'Max', present: true, picture: '/images/users/max.jpg' },
        { _id: 1, name: 'Rafael', present: true, picture: '/images/users/rafael.jpg' },
        { _id: 2, name: 'Mitchel', present: true, picture: '/images/users/mitchel.jpg' },
        { _id: 3, name: 'Maycon', present: true, picture: '/images/users/maycon.jpg' },
        { _id: 4, name: 'Vanessa', present: true, picture: '/images/users/vanessa.jpg' }
      ];
      return wizards;
    },
    getPresentWizards = function () {
      presentWizards = [];
      wizards.forEach(function(wizard){
        if (wizard.present) {
          presentWizards.push(wizard);
        };
      });
      return presentWizards;
    };

    return {
      currentHouse: currentHouse,
      getGeneralResult: getGeneralResult,
      getWizardsByHouse: getWizardsByHouse,
      toggleWizardIsPresent: toggleWizardIsPresent,
      getPresentWizards: getPresentWizards
    };
  });
