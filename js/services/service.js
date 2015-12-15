/**
 * Created by Lwang on 2015/12/15.
 */


define(["angular"],function(angular){
    var serviceModule = angular.module("serviceModule",[]);
    var sayPeople = function(name,age){
        this.name = name;
        this.age = age;
        this.say = function(){
            alert(this.name+"===="+this.age);
        };
    };
    serviceModule.service("myFirstService",function(){

        return sayPeople;

    });


    serviceModule.factory("factoryService",function(){
        var _this = this;
        _this.name = "王雷";

        return{
            get:function(){
                console.log(_this.name);
            }
        }
    });

    serviceModule.provider("providerService",function(){

        this.myUrl = "http://www.baidu.com";
        this.setUrl = function(url){
                if(url) this.myUrl = url;
            };
        this.$get = function(){
            var self = this;
            return function(){
                console.log(self.myUrl);
            }
        }

    });




});