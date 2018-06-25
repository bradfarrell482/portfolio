/*
map.js

simple javascript for the map highlighting feature
*/

$(document).ready(function(){
    $(".RG, .A1, .A2, .SH, .CR, .FC, .Restrooms").hover(function(){
        var _class = $(this).attr("class");
        console.log(_class);
        $("."+_class).addClass("show");
        }, function(){
        $(".show").removeClass("show");
    });
});