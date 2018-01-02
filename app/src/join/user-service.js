/**
 * Created by andyb on 16/10/2016.
 */
(function () {
    'use strict';
    angular.module('bestmanplanApp').factory('UserService', UserService);

    function UserService() {

        var userList = [];
        save('Andrew', 'Birchall', 'andyb.bestmanplan@gmail.com');

        return {
            userList: userList,
            save: save
        };

        function save (firstName, lastName, emailAddress) {
            userList.push(
                {
                    firstName: firstName,
                    lastName: lastName,
                    emailAddress: emailAddress,
                    dateJoined: new Date().toDateString()
                }
            );
        }
    }
}());
