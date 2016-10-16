/**
 * Created by andyb on 16/10/2016.
 */
(function () {
    'use strict';
    angular
        .module('bestmanplanApp')
        .factory('UserService', UserService);

    function UserService() {

        var userList = [];

        function save(firstName, lastName, emailAddress) {
            userList.push(
                {
                    firstName: firstName,
                    lastName: lastName,
                    emailAddress: emailAddress,
                    dateJoined: new Date().toDateString()
                }
            );
        }

        save('Andrew', 'Birchall', 'andy.birchall@gmail.com');

        return {
            save: save,
            userList: userList
        };
    }
}());
