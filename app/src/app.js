'use strict';

/**
 * @ngdoc overview
 * @name bestmanplanApp
 * @description
 * # bestmanplanApp
 *
 * Main module of the application.
 */
angular
  .module('bestmanplanApp', [
    'ngResource', 'ngRoute'
  ])
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'src/home/main.html',
                controller: 'MainCtrl'
            })
            .when('/joinus', {
                template: '<h5>This is the join us route</h5>'
            })
            .when('/speech', {
                template: '<h5>This is the speech route</h5>'
            })
            .when('/bucksparty', {
                template: '<h5>This is the bucks party route</h5>'
            })
            .when('/wedding', {
                template: '<h5>This is the wedding party route</h5>'
            })
            .when('/about', {
                template: '<h5>This is the about route</h5>'
            })
            .when('/contact', {
                template: '<h5>This is the contact route</h5>'
            })
            .otherwise({redirectTo: '/'});
    }]);
