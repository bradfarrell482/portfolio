/*
scout.js

special case gallery: utilizes the clickable gallery, but with the addition
of swapping photos from the main viewing area into the smaller clickable ones
*/

$(document).ready(function() {

    $(".mini_landing").on("click", function(){
        //pass into function
        changeGallery($(this));
    });

});

function changeGallery(img) {
    //get info
    var src1 = $(img).attr("src");
    var gal = $("#main_landing");
    var src2 = $(gal).attr("src");

        //fadeout
        $(gal).css("opacity", "0");
        $(img).css("opacity", "0");

        setTimeout(function () {
            //change the gallery img
            $(gal).attr("src", src1);
            $(img).attr("src", src2);
    
            //fadein
            $(gal).css("opacity", "1");
            $(img).css("opacity", "1");
        }, 500);
}