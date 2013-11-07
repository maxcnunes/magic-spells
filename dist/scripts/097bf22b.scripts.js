"use strict";angular.module("magicSpellsApp",["ngCookies","ngResource","ngSanitize"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/houses",{templateUrl:"views/houses.html",controller:"WizardHousesCtrl"}).when("/current",{templateUrl:"views/current.html",controller:"CurrentWizardsCtrl"}).when("/abracadabra",{templateUrl:"views/abracadabra.html",controller:"MagicSpellsCtrl"}).when("/board",{templateUrl:"views/board.html",controller:"MagicBoardCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("magicSpellsApp").filter("group",function(){return function(a,b){return _.groupBy(a,function(a,c){return Math.floor(c/b)})}}),angular.module("magicSpellsApp").controller("MainCtrl",["$scope",function(a){a.wizards=[{name:"Max",success:!1},{name:"Mitchel",success:!1},{name:"Maycon",success:!1},{name:"Vanessa",success:!0},{name:"Rafael",success:!0}]}]),angular.module("magicSpellsApp").controller("WizardHousesCtrl",["$scope","$filter",function(a,b){a.houses=[{name:"Eagles",picture:"eagles.jpg"},{name:"Foxewe",picture:"foxewe.jpg"},{name:"Horseal",picture:"horseal.jpg"},{name:"Lioncow",picture:"lioncow.jpg"},{name:"Monkeys in T-shirts",picture:"monkeys_in_t-shirts.jpg"},{name:"Rubble Fish",picture:"rubble_fish.jpg"},{name:"Russian Owls",picture:"russian_owls.jpg"},{name:"Turkeywolf",picture:"turkeywolf.jpg"}],a.groupedHouses=b("group")(a.houses,4)}]),angular.module("magicSpellsApp").controller("CurrentWizardsCtrl",["$scope",function(a){a.wizards=[{name:"Max"},{name:"Mitchel"},{name:"Maycon"},{name:"Vanessa"},{name:"Rafael"}]}]),angular.module("magicSpellsApp").controller("MagicBoardCtrl",["$scope",function(a){var b={spell:{infinitive:"Do, Does",simplePast:"Did",pastParticiple:"Done"},results:[{wizard:"Max",correct:!1,picture:"/images/users/max.jpg"},{wizard:"Rafael",correct:!0,picture:"/images/users/vanessa.jpg"},{wizard:"Mitchel",correct:!0,picture:"/images/users/mitchel.jpg"},{wizard:"Maycon",correct:!0,picture:"/images/users/maycon.jpg"},{wizard:"Vanessa",correct:!0,picture:"/images/users/rafael.jpg"}]},c=[];c.push(b),c.push(b),c.push(b),c.push(b),c.push(b),a.rounds=c}]);