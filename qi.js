/**
 * Created by Administrator on 2017-04-14.
 */
function Qi(){}
Qi.prototype = {
    //复杂单个或者多个构造函数及其函数对象实例的属性或者方法到新的对象
    extend:function(){
        var len = arguments.length;
        if(len===0){
            return
        }else if(len===1){
            return arguments[0];
        }else{
            var target = arguments[0];
            for(var i = 1;i<len;i++){
                for(var k in arguments[i]){
                    target[k] = arguments[i][k];
                }
            }
            return target;
        }
        },

    //数据绑定到html模块化 str模块化字符串  data后台json对象
    formatString: function (str,data) {
        return str.replace(/@\((\w+)\)/g, function (match,key) {
            return typeof data[key] === 'undefined'?"":data[key];
        });
    },

    //创建指定范围的随机数
    random:function (start,end){
        return Math.floor(Math.random()*(end-start)+start);
    },

    //查询location参数
    queryHerf: function () {
        var json = {};
        var sub = window.location.search.substring(1);
        var sp = sub.split("&");
        for(var i = 0,len = sp.length;i<len;i++){
           var index = sp[i].indexOf("=");
           if(index<0)continue;
           var key = sp[i].substring(0,index);
           var value = sp[i].substring(index+1);
           json[key] = value;
        }
        return json;
    }
}



var qi = new Qi();

