'use strict';

var app = angular.module('myApp', []);

app.filter('name', function () {

    return function (input) {
        return input.lastName + ", " + input.firstName;
    };
});

app.controller('personCtrl', ['$scope', function ($scope) {
        var personinfo = {};
        personinfo.persons = [];
        personinfo.persons.push({firstName: "Peter", lastName: "Smith"});

        $scope.persons = personinfo.persons;

        $scope.login = function (username, password) {
            if(username === personinfo.persons[0].firstName && password === personinfo.persons[0].lastName){
                $scope.loggedUser =  "Welcome";
            }else{$scope.loginError = "You Aint Welcome!";}
        };
    }]);

app.directive('loginForm', function () {
    return {
        restrict: 'E',
        templateUrl: 'loginForm.html'
    };
});