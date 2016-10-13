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
  .module('bestmanplanApp', ['ngResource', 'ngRoute', 'ngAnimate', 'ui.bootstrap'])
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'src/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'home'
            })
            .when('/join', {
                templateUrl: 'src/join/join.html',
                controller: 'JoinCtrl',
                controllerAs: 'joinCtrl'
            })
            .when('/speech', {
                templateUrl: 'src/speech/speech.html',
                controller: 'SpeechCtrl',
                controllerAs: 'speech'
            })
            .when('/bucksparty', {
                templateUrl: 'src/bucksparty/bucksparty.html'
            })
            .when('/wedding', {
                templateUrl: 'src/wedding/wedding.html',
                //controller: 'WeddingCtrl',
                //controllerAs: 'wedding'
            })
            .when('/about', {
                templateUrl: 'src/about/about.html'
            })
            .when('/contact', {
                templateUrl: 'src/contact/contact.html'
            })
            .otherwise({redirectTo: '/'});
    }]);
