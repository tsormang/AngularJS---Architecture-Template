(function () {
    var app = angular.module("myAPP");


    var NobelController = function ($scope, nobelfactory, $routeParams) {


        var onPrizes = function (data) {

            $scope.prizes = data.prizes;
        };

        var onError = function (reason) {

            $scope.error = "Could not fetch the data.";
        };

        $scope.OnSubmit = function (){
            nobelfactory.getPrizes($scope.year, $scope.yearTo, $scope.category, $scope.numberOfLaureates).then(onPrizes, onError)
        }


        nobelfactory.getPrizes().then(onPrizes, onError); //Prosoxi panta ta get meta apo dilomenes sinartiseis
        //$scope.username = $routeParams.username;

    };


    app.controller("NobelController", NobelController);

}());