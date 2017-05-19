/**
 * Created by 网聚宝 on 2017/5/19.
 */
define(['jquery','handlebars'], function ($,handlebars) {
    var data = {};
    $(document).ready(function () {
        $.getJSON('./data/each.json',function (resp) {
            data = resp;
            var myTemplate = handlebars.compile($('#table-template').html());
            $('#tableList').html(myTemplate(data));
        });

    });
});
