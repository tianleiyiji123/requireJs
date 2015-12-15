/**
 * Created by Lwang on 2015/11/23.
 */

define(["angular", "./html1Ctrl"], function (angular, html1Ctrl) {
    var html2 = angular.module("html2", ["ngRoute"]);
    //html2.controller("html2Ctrl", ["$scope", function ($scope) {
    //    //angular.element("#jqTest").find("li").eq(2).addClass("colorChange");
    //
    //    $scope.list = [{
    //        name: "wanglei",
    //        num: 11111
    //    }, {
    //        name: "nixiaowei",
    //        num: 22222
    //    }, {
    //        name: "huangjie",
    //        num: "33333"
    //    }];
    //    $scope.colChange = function () {
    //    };
    //    var obj = {
    //        "name": "wanglei",
    //        "age": 16,
    //        "grade": "一年级",
    //        "class": "21班"
    //    };
    //
    //    $scope.ngModule = "王雷";
    //
    //}]);


    html2.controller("html2Ctrl",html2Ctrl);

    function html2Ctrl($scope,myFirstService,providerService){

        console.log($scope);

        providerService();

    }
    html2Ctrl.$inject = ["$scope","myFirstService","providerService"];
});