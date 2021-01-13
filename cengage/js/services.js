'use strict';

/* Services */

var workbenchServices = angular.module('workbenchServices', ['ngResource']);

workbenchServices.factory('Cartridge', ['$resource', 
	function($resource){
		return $resource('cartridges/:cartridgeId.json', {}, {
			query: {method:'GET', params:{cartridgeId:'cartridges'}, isArray:true}
		});
	}]);

workbenchServices.factory("Section", ['$resource',
	function($resource){
		return $resource('templates/:templateId.json', {}, {
			query: {method:'GET', params:{templateId:'templates'}, isArray:true}
		});
	}]);