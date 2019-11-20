(function () {

    var nobelfactory = function ($http) {

        const uri = "http://api.nobelprize.org/v1/prize.json?";

        var getPrizes = function (yearValue, yearToValue, categoryValue, numberOfLaureatesValue) {

            var year = "year" + yearValue;
            var yearto = "yearTo" + yearToValue;
            var category = "category" + categoryValue;
            var numberOfLaureates = "numberOfLaureates" + numberOfLaureatesValue;
            var k = "&";

            return $http.get(uri + year + k + yearto + k + category + k + numberOfLaureates )
                .then(function (response) {
                    return response.data;
                });
        };

        //http://api.nobelprize.org/v1/prize.json?year=1999&yearTo=2011&category=peace&numberOfLaureates=220

        return {
            getPrizes: getPrizes

        };

    };

    var module = angular.module("myAPP");
    module.factory("nobelfactory", nobelfactory);

}());