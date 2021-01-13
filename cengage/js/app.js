'use strict';

/* App Module */

var workbenchApp = angular.module('workbenchApp', [
  'ngRoute',
  'workbenchControllers',
  'workbenchFilters',
  'workbenchServices'
]);
 
workbenchApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/cartridges', {
        templateUrl: 'partials/cartridge-list.html',
        controller: 'CartridgeListCtrl'
      }).
      when('/cartridges/:cartridgeId', {
        templateUrl: 'partials/cartridge-detail.html',
        controller: 'CartridgeDetailCtrl'
      }).
      otherwise({
        redirectTo: '/cartridges'
      });

  }]);