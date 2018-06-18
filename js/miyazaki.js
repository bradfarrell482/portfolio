/*
childhood.js

vrtually a copy of the gallery function from dj.js. Modified
 slightly simply to remove the color change elements
*/
$(document).ready(function() {

    //prepare gallery autoplay
    var i = 1;

    //autoplay the gallery images
    setInterval(function() {
            changeGallery($(".icon_grid img")[i]);
            i= (i+1)%14;
    }, 7000);

});

function changeGallery(img) {
    //get info
    var src = $(img).attr("src");
   // var alt = $(img).attr("alt");
    
    //fadeout
    $(".icon_rotate > img").css("opacity", "0");

    setTimeout(function(){
        //change the gallery img
        $(".icon_rotate > img").attr("src", src);
        //$(".icon_rotate > img").attr("alt", alt);
        //fadein
        $(".icon_rotate > img").css("opacity", "1");
    }, 1000);
}