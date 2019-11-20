
(function () {

    var app = angular.module("myAPP"); 

    var HomeController = function ($scope) {
        $scope.messageIndex = "Douleuei?";
    };

    app.controller("HomeController", HomeController);


}());

