/**
 * Created by Lwang on 2015/11/23.
 */

define(["angular"],function(angular){
    var html1 = angular.module("html1",["ngRoute"]);
        html1.controller("html1Ctrl",["$scope",function($scope){
            //console.log(112);
            //this.a = name;
            //this.age = age;
            //this.say = function(){
            //    alert(this.a+"=="+this.age);
            //}

            $scope.customerName = "普通angular测试!";
            $scope.credit = "8000";
            $scope.save = function(tips){
                alert(tips);
            };
            //$scope.toClick = function(data){
            //    console.log(data);
            //
            //}



        }]);

    function People(name,age){
        this.name = name;
        this.age = age;
        this.say = function(){
            alert(this.name +"=="+ this.age);
        }
    }

    return People;
});
