/**
 * Created by Lwang on 2015/11/24.
 */
define([],function(){
    function routeConf($routeProvider,$locationProvider,$httpProvider){
        $routeProvider.when("/html1", {
            templateUrl: "/views/html1.html",
            controller: "html1Ctrl"
        })
            .when("/html2", {
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
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    }
    routeConf.$inject = ["$routeProvider","$locationProvider","$httpProvider"];
    return routeConf;
    //app.config(["$routeProvider", "$locationProvider", "$httpProvider"], function ($routeProvider, $locationProvider, $httpProvider) {

    //});
});
