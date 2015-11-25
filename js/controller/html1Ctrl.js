/**
 * Created by Lwang on 2015/11/23.
 */

define(["angular"],function(angular){
    var html1 = angular.module("html1",["ngRoute"]);
        html1.controller("html1Ctrl",html1Ctrl);
    function html1Ctrl(name,age){
        console.log(112);
        this.a = name;
        this.age = age;
        this.say = function(){
            alert(this.a+"=="+this.age);
        }
    }
    return html1Ctrl;
});
