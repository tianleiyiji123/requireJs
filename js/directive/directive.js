/**
 * Created by Lwang on 2015/11/27.
 */

define(["angular"], function (angular) {
    var directiveModule = angular.module("directiveModule", []);
    directiveModule.directive("helloTest", ["$rootScope", function ($rootScope) {
        return {
            "restrict": "EACM",
            //require: '^html1Ctrl',
            "scope": {
                ngModule: '@ngModule'
            },
            "template": '<div ng-show="color" ng-click="_change()" ng-init="color = true">{{ngModule}}</div>',
            "replace": true,
            "link": function (scope, ele, attr) {
                //alert($rootScope.name);
                scope.ngModule = "王雷";
                scope._change = function () {
                    scope.color = false;
                }
            }
        }
    }]);

    directiveModule.directive("myDir", function () {
        return {
            restrict: "ECAM",
            scope: {
                myName: "=yourName",   // name 值传递 （字符串，单向绑定）
                myAmount: "=", // amount 引用传递（双向绑定）
                mySave: "&noSave"    // 保存操作
            },
            template: "<div>" +
            "  {{myName}}: <input ng-model='myName'/>" +
            "  <button  ng-click='mySave()'>保存</button>" +
            "<div ng-transclude></div>" +
            "</div>",
            replace: true,
            transclude: true,
            controller:["$scope",function($scope){
                //$scope.mySave = function(){
                //    alert(1213);
                //}
                //$scope.myName = "shabi";
            }],
            link: function (scope, element, attrs) {
                scope.myName = "shabi";
                //console.log("initial value for name:" + scope.name);
                //console.log("initial value for amount:" + scope.amount);

                element.css("background", "yellow");


                //scope.$watch("amount", function (newVal, oldVal) {
                //    console.log("amount has changed " + oldVal + " >> " + newVal);
                //});
                //
                //
                //scope.$watch("name", function (newVal, oldVal) {
                //    console.log("name has changed " + oldVal + " >> " + newVal);
                //});
            }
        }

    });
    directiveModule.directive("myDirIn", function () {
        return {
            "restrict": "ECAM",
            "transclude": true,
            "scope": {
                title: "@qqq",
                subtit:"@ppp",
                toClick:"&noClick"
            },
            "replace": true,
            "template": "<div ng-click='toClick(this)' >{{title}}<span ng-show = 'goHide' ng-init='goHide = true'>{{subtit}}</span></div>",
            "controller": ["$scope", function ($scope) {

                $scope.sss = [{
                    title: "第一个",
                    age: 10
                },
                    {
                        title: "第二个",
                        age: 11
                    },
                    {
                        title: "第三个",
                        age: 12
                    },
                    {
                        title: "第四个",
                        age: 13
                    }];

            }],
            "controllerAs":"html1Ctrl",

            link: function (scope, ele, attrs) {
                scope.toClick = function(data){
                    console.log(data);
                    console.log(data.goHide = false);

                };
            }

        }
    })


});


