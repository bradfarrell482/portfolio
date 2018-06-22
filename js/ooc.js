/*
ooc.js

some similar functionality for the gallery plus a new lightbox feature for this page
*/

var items = [];
var options = {};
var pswpElement;

$(document).ready(function () {

    //prepare gallery autoplay
    var i = 1;

    //autoplay the gallery images
    setInterval(function () {
        changeGallery($(".gallery_thumb")[i]);
        i = (i + 1) % 20;
    }, 7000);

    /*$(".gallery_thumb").on("click", function(){
        //when an image is clicked, cancel the gallery autoplay
        cycle = false;

        //pass into function
        changeGallery($(this));
    });*/

     /****** Photoswipe code ******/
     pswpElement = document.querySelectorAll('.pswp')[0];

     // build items array
     $(".gallery_thumb").each(function() {
         items.push(
            {
                src: $(this).attr("src"),
                w: 1238,
                h: 578 
            }
         );
     });
     //console.log(items); //debug line

    $(".gallery_thumb").on("click", function() {
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