/**
 * Created by Administrator on 2017-04-24.
 */
function Cart(){
    this.amount = 0;
    this.allprice = 0;
    this.products = [];
}

Cart.prototype = {
    bindBasic: function () {
        $(".amount").html(this.getAmount());
        $(".allprice").html("总价格："+this.getAllprice());
    },
    bindList: function () {
        var str = "";
        for(var i = 0,len= this.products.length;i<len;i++){
            str+="<li>";
            str+="<img src='"+this.products[i].img+"' alt=''>";
            str+="<span>'"+this.products[i].des+"'</span>";
            str+="<span class=hostprice>'"+this.products[i].host+"'</span>";
            str+="</li>";
        }
        $(".product-list").html(str);
    },
    getAmount: function () {
        this.amount = this.products.length;
        return this.amount;
    },
    getAllprice: function () {
        for(var i = 0,len= this.products.length;i<len;i++){
            var num = (this.products[i].host)-0;
            alert(num)
            this.allprice+= num;
        }
        return this.allprice;
    }
}