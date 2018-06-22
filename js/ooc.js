/*
ooc.js

some similar functionality for the gallery plus a new lightbox feature for this page
*/
$(document).ready(function() {

    //prepare gallery autoplay
    var i = 1;

    //autoplay the gallery images
    setInterval(function() {
            changeGallery($(".gallery_thumb")[i]);
            i= (i+1)%20;
    }, 7000);

    /*$(".gallery_thumb").on("click", function(){
        //when an image is clicked, cancel the gallery autoplay
        cycle = false;

        //pass into function
        changeGallery($(this));
    });*/

});

function changeGallery(img) {
    //get info
    var src = $(img).attr("src");
    
    //fadeout
    $(".gallery > img").css("opacity", "0");

    setTimeout(function(){
        //change the gallery img
        $(".gallery > img").attr("src", src);

        //fadein
        $(".gallery > img").css("opacity", "1");
    }, 1000);
    

    
}