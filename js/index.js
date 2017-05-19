/**
 * Created by 网聚宝 on 2017/5/19.
 */
define(['jquery','handlebars'], function ($,handlebars) {
    var data = {};
    var myTemplate = handlebars.compile($('#table-template').html());
    // handlebars.registerHelper('addOne',function (index) {
    //     this._index = index + 1;
    //     return this._index;
    // });
     handlebars.registerHelper('compare',function (v1,v2,options) {
         if(v1>v2){
             return options.fn(this);
         } else {
             return options.inverse(this);
         }
     });
    handlebars.registerHelper('transformat',function (value) {
        if(value == 0){
            return "男";
        } else if(value == 1) {
            return "女";
        }
    })
    $(document).ready(function () {
        $.getJSON('./data/if.json',function (resp) {
            data = resp;
            $('#tableList').html(myTemplate(data));
        });

    });
});
