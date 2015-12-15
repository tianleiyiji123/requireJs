/**
 * Created by Lwang on 2015/12/11.
 */

define(["angular"],function(angular){
    var html3 = angular.module('html3',['ngRoute']);

    //html3.controller("html3Ctrl",["$scope",function($scope){
    //    console.log($scope);
    //}]);

    //html3.controller = html3Ctrl;
    //
    //function html3Ctrl($scope){
    //
    //}

    html3.controller("html3Ctrl",html3Ctrl);
    function html3Ctrl($scope){
        $scope.toChange = function(){
            return (!$scope.theInput1 && !$scope.theInput2)
        }
    }

    html3Ctrl.$inject = ["$scope"];

});

