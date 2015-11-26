/**
 * Created by Lwang on 2015/11/24.
 */
require.config({
    baseUrl:"../js",
    "paths":{
        "jquery": ["lib/jquery","http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"],
        "angular": "lib/angular",
        "angular-route": "lib/angular-route",
        "swiper": "lib/swiper",
        "zepto": "lib/zepto",
        "handle":"lib/handlebars"
    },
    "shim":{
        "lib/handlebars":{
            deps:["jquery"],
            exports:"Handlebars"
        }

    }
});
