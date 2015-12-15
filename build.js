/**
 * Created by Lwang on 2015/11/26.
 */

({
    "baseUrl":"js",
    "name":"main",
    "dir":"build-script",
    "fileExclusionRegExp":/^(r|build)\.js$|js1|js2|config2.js|ngSingle/,
    "optimizeCss":"standard",
    "removeCombined":false,
    "paths": {
        "jquery": "lib/jquery",
        "angular": "lib/angular",
        "angular-route": "lib/angular-route",
        "swiper": "lib/swiper",
        "zepto": "lib/zepto"
    },
    "shim": {
        "angular":{
            "exports":"angular"
        },
        "lib/angular-route":{
            "deps":["angular"],
            "exports":"ngRouteModule"
        }
    }
})