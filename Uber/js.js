/**
 * Created by wanglei on 2015/12/8.
 */
function savepic(o){
    pic=window.open(o.src,"demo")
    setTimeout('pic.document.execCommand("saveas")',0);
}