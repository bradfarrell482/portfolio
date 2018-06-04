/*
childhood.js

vrtually a copy of the gallery function from dj.js. Modified
 slightly simply to remove the color change elements
*/
$(document).ready(function() {

    //prepare gallery autoplay
    var cycle = true;
    var i = 0;

    //autoplay the gallery images
    setInterval(function() {
        if (cycle) {
            changeGallery($(".gallery_thumb")[i]);
            i= (i+1)%3;
        }
    }, 5000);

    $(".gallery_thumb").on("click", function(){
        //when an image is clicked, cancel the gallery autoplay
        cycle = false;

        //pass into function
        changeGallery($(this));
    });

});

function changeGallery(img) {
    //get info
    var src = $(img).attr("src");
    var alt = $(img).attr("alt");
    
    //fadeout
    $(".gallery > img").css("opacity", "0");

    setTimeout(function(){
        //change the gallery img
        $(".gallery > img").attr("src", src);
        $(".gallery > img").attr("alt", alt);

        //fadein
        $(".gallery > img").css("opacity", "1");
    }, 1000);
    

    
}