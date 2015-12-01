/**
 * Created by Lwang on 2015/11/27.
 */

define(["angular"],function(angular){
    var directiveModule = angular.module("directiveModule",[]);
    directiveModule.directive("helloTest",["$rootScope",function($rootScope){
        return{
            "restrict":"EACM",
            //require: '^html1Ctrl',
            "scope":{
                ngModule:'@ngModule'
            },
            "template":'<div ng-show="color" ng-click="_change()" ng-init="color = true">{{ngModule}}</div>',
            "replace":true,
            "link":function(scope,ele,attr){
                //alert($rootScope.name);
                scope.ngModule = "王雷";
                scope._change = function (){
                    scope.color = false;
                }
            }
        }
    }]);




    directiveModule.directive("myTest",function(){
        return{
            "restrict":"A",
            "scope":{
                width:"@width",
                height:"@height"
            }

        }
    });
});


