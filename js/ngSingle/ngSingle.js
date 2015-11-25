/**
 * Created by Lwang on 2015/11/25.
 */

var inApp = angular.module("inApp",[]);
inApp.controller("test",["$scope",function($scope){
        $scope.myClick = function(){
            alert("测试成功!");
        }
}]);
