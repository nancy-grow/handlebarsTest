require.config({
    paths: {
        jquery: 'jquery-3.2.1',
        handlebars: 'handlebars-v4.0.8',
        index:'index'
    }
});
requirejs(['jquery','handlebars'],function($,handlebars){
})
