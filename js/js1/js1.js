/**
 * Created by Lwang on 2015/11/23.
 */

define(["jquery","zepto","swiper"],function($,z,s){
    function js1(name,age){
        this.name = name;
        this.age = age;
        document.writeln("这是js1的测试！");
        console.log($);
    }
    return js1;
});
