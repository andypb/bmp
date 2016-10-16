'use strict';

/**
 * @ngdoc function
 * @name bestmanplanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bestmanplanApp
 */
angular.module('bestmanplanApp')
    .controller('JoinCtrl', ['UserService', function (UserService) {
        var self = this;
        self.firstName = '';
        self.lastName = '';
        self.emailAddress = '';

        self.userList = UserService.userList;

        self.save = function() {
            UserService.save(self.firstName, self.lastName, self.emailAddress);
            self.clear();
        };

        self.clear = function () {
            self.firstName = '';
            self.lastName = '';
            self.emailAddress = '';
        };
    }]);
