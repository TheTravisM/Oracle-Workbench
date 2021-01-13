'use strict';

/* Controllers */

var workbenchControllers = angular.module('workbenchControllers', []);

workbenchControllers.controller('HomeCtrl', ['$scope',
  function ($scope) {
    $scope.headerHtml = "partials/header.html";
    $scope.orderProp = 'name';
  }]);
 
workbenchControllers.controller('CartridgeListCtrl', ['$scope', 'Cartridge', "Section",
  function ($scope, Cartridge, Section) {
    $scope.cartridges = Cartridge.query();
    $scope.sections = Section.query();
    console.log($scope.sections);
   	$scope.headerHtml = "partials/header.html";
    $scope.orderProp = 'name';
  }]);
 
workbenchControllers.controller('CartridgeDetailCtrl', ['$scope', '$routeParams', 'Cartridge', 
  function($scope, $routeParams, Cartridge) {
    $scope.cartridge = Cartridge.get({cartridgeId: $routeParams.cartridgeId}, function(cartridge) {
      $scope.mainImageUrl = cartridge.images[0];
      $scope.headerHtml = "partials/header.html";
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);