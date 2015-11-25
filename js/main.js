/**
 * Created by Lwang on 2015/11/23.
 */
require(["angular", "./lib/angular-route","config/route_config", "jquery", "./controller/html1Ctrl", "./controller/html2Ctrl"],
    function (angular,angularRoute,routeConf,$) {
    var app = angular.module("app", ["ngRoute","html1","html2"]);
        app.run(["$rootScope",function($rootScope){
            //alert($rootScope);
        }]);
        app.config(["$routeProvider","$locationProvider","$httpProvider",function($routeProvider,$locationProvider,$httpProvider){
            $routeProvider.when("/html1", {
                templateUrl: "/views/html1.html",
                controller: "html1Ctrl"
            }).when("/html2", {
                templateUrl: "/views/html2.html",
                controller: "html2Ctrl"
            }).otherwise({
                redirectTo: "/html1"
            });

            //$locationProvider.html5Mode(true);
            $locationProvider.hashPrefix = '!';
            $httpProvider.defaults.withCredentials = true;
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
        }]);

//angular.element(document).ready(function(){
//    angular.bootstrap(document.getElementById("test"), ['app']);
//});
        angular.bootstrap(document,['app']);
});
