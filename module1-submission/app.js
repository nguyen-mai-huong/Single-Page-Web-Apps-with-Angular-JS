(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckerController', LunchCheckerController);

    LunchCheckerController.$inject = ['$scope'];
    var enjoyMessage = "Enjoy!";
    var tooMuchMessage = "Too much!";
    var invalidInputMessage = "Please enter data first";

    function LunchCheckerController($scope) {
        $scope.message = "";

        $scope.displayMessage = function() {
            var menu = $scope.lunchMenu;
            console.log("Menu entered is: " + menu);
            if (menu === undefined || menu.length == 0) {
                $scope.message = invalidInputMessage;
            }
            else {
                var dishes = menu.split(",");
                var realNbrOfDishes = dishes.length - countEmptyItems(dishes);
                if (realNbrOfDishes > 0 && realNbrOfDishes < 4) {
                    $scope.message = enjoyMessage;
                } else {
                    $scope.message = tooMuchMessage;
                }
            } 
        };

        function countEmptyItems(lst) {
            var countEmptyItems = 0;
            for (var idx = 0; idx < lst.length; idx++) {
                if (lst[idx].trim() === "") {
                    countEmptyItems += 1;
                }
            }
            return countEmptyItems;
        }

        $scope.changeStyles = function() {
            if ($scope.message == enjoyMessage || $scope.message == tooMuchMessage) {
                $scope.colorStyle = {"color": "#008000"};
                $scope.borderStyle = {"border-color": "#008000"};
            } else if ($scope.message == invalidInputMessage) {
                $scope.colorStyle = {"color": "#FF0000"};
                $scope.borderStyle = {"border-color": "#FF0000"};
            } else {

            };
        };
    }

})();