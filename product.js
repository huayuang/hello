/**
 * Created by Administrator on 2017-04-24.
 */
function Product(option){
    this.img = option.img;
    this.des = option.des;
    this.oldprice = option.oldprice;
    this.host= option.host;
}

Product.prototype = {
    bindDom: function () {
        var container = document.querySelector(".container");
        var str = "";
        str+="<div class=item>";
        str+="<img src='"+this.img+"' alt=''>";
        str+="<p class='des'>'"+this.des+"'</p>";
        str+="<div class=price>";
        str+="<del class=oldprice>'"+this.oldprice+"'</del>";
        str+="<p class=host>'"+this.host+"'</p>";
        str+="</div>";
        str+="<button>加入购物车</button>";
        str+="</div>";

        $(container).append(str);
    },
    bindEvent:function(){
        var container = document.querySelector(".container");
        var cart = new Cart();
        $(container).on("click","button", function () {
            var src = $(this).parents(".item").find("img").attr("src");
            var price = $(this).parents(".item").find(".host").text();
            var des = $(this).parents(".item").find(".des").text();
            var p = new Product({
                img:src,
                des:des,
                host:price
            });
            cart.products.push(p);
            cart.bindBasic();
            cart.bindList();
            $(".shopCart").show();
        })
    }
}