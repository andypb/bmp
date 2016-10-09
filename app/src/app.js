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
                templateUrl: 'src/home/home.html',
                controller: 'HomeCtrl'
            })
            .when('/join', {
                templateUrl: 'src/join/join.html'
            })
            .when('/speech', {
                templateUrl: 'src/speech/speech.html'
            })
            .when('/bucksparty', {
                templateUrl: 'src/bucksparty/bucksparty.html'
            })
            .when('/wedding', {
                templateUrl: 'src/wedding/wedding.html'
            })
            .when('/about', {
                templateUrl: 'src/about/about.html'
            })
            .when('/contact', {
                templateUrl: 'src/contact/contact.html'
            })
            .otherwise({redirectTo: '/'});
    }]);
