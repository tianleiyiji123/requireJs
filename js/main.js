/**
 * Created by Lwang on 2015/11/23.
 */
require(["angular", "./lib/angular-route","config/route_config", "jquery", "./controller/html1Ctrl", "./controller/html2Ctrl","./controller/html3Ctrl","./directive/directive","./services/service"],
    function (angular,angularRoute,routeConf,$) {
    var app = angular.module("app", ["ngRoute","html1","html2","html3","directiveModule","serviceModule"]);
        app.run(["$rootScope",function($rootScope){
            //alert($rootScope);
            $rootScope.name = "wanglei";
        }]);



        app.config(["$routeProvider","$locationProvider","$httpProvider",function($routeProvider,$locationProvider,$httpProvider){
            $routeProvider.when("/html1", {
                templateUrl: "/views/html1.html",
                controller: "html1Ctrl"
            }).when("/html2", {
                templateUrl: "/views/html2.html",
                controller: "html2Ctrl"
            })
                .when("/html3",{
                    templateUrl:"/views/html3.html",
                    controller:"html3Ctrl"
                })
                .otherwise({
                redirectTo: "/html1"
            });

            //$locationProvider.html5Mode(true);
            $locationProvider.html5Mode({
                requireBase:false,
                enable:true
            });
            $locationProvider.hashPrefix = '!';
            $httpProvider.defaults.withCredentials = true;
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
        }]);
        app.config(["providerServiceProvider",function(providerServiceProvider){
            providerServiceProvider.setUrl("http://www.sina.com");
        }]);
//angular.element(document).ready(function(){
//    angular.bootstrap(document.getElementById("test"), ['app']);
//});
        angular.bootstrap(document,['app']);
});
