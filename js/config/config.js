/**
 * Created by Lwang on 2015/11/24.
 */
require.config({
        "baseUrl": "js",
        "urlArgs": "v=" + (new Date()).getTime(),
        "paths": {
            "jquery": ["lib/jquery","http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"],
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
    }
);
