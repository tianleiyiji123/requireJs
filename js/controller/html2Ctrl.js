/**
 * Created by Lwang on 2015/11/23.
 */

define(["angular", "./html1Ctrl"], function (angular, html1Ctrl) {
    var html2 = angular.module("html2", ["ngRoute"]);
    html2.controller("html2Ctrl", ["$scope", function ($scope) {
        //angular.element("#jqTest").find("li").eq(2).addClass("colorChange");

        $scope.list = [{
            name: "wanglei",
            num: 11111
        }, {
            name: "nixiaowei",
            num: 22222
        }, {
            name: "huangjie",
            num: "33333"
        }];
        $scope.colChange = function () {
        };
        var obj = {
            "name": "wanglei",
            "age": 16,
            "grade": "一年级",
            "class": "21班"
        };

        $scope.ngModule = "王雷";

        //alert(typeof html1Ctrl);
        //var x = new html1Ctrl();
        //console.dir(x);
        //console.log(x("wanglei",29));
        //x("wanglei",28).say();
        //console.log(html1Ctrl("wanglei",29));

        //var x = function(){};
        //html1Ctrl.apply(x,["wanglei",19]);
        //console.dir(x);
    }]);
});