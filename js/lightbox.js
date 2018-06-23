/*
ooc.js

some similar functionality for the gallery plus a new lightbox feature for this page
*/

var items = [];
var options = {};
var pswpElement;

$(document).ready(function () {

    /****** Photoswipe code ******/
    pswpElement = document.querySelectorAll('.pswp')[0];


    //console.log(items); //debug line

    $(".lightbox").on("click", function () {
        // build items array
        items = [];
        $($(this).attr("lightbox_target")).each(function () {
            items.push(
                {
                    src: $(this).attr("src"),
                    w: $(this).attr("w"),
                    h: $(this).attr("h")
                }
            );
        });
        //console.log($(this).index()); //debug line
        initPhotoSwipe($(this).index());
    });
    /****** Photoswipe code end ******/

});

function initPhotoSwipe(i) {
    // define options (if needed)
    var options = {
        index: i,
        allowPanToNext: true
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}

function changeGallery(img) {
    //get info
    var src = $(img).attr("src");

    //fadeout
    $(".gallery > img").css("opacity", "0");

    setTimeout(function () {
        //change the gallery img
        $(".gallery > img").attr("src", src);

        //fadein
        $(".gallery > img").css("opacity", "1");
    }, 1000);

}