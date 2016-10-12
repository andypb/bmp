'use strict';

/**
 * @ngdoc function
 * @name bestmanplanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bestmanplanApp
 */
angular.module('bestmanplanApp')
    .controller('HomeCtrl', function () {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        this.name= 'Andy Birchall';
    });
