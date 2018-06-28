/*
rotatingGallery.js

generic form of the gallery code that has been used on serveral project pages.
allows for galleries that rotate on their own as well as galleries that are clickable

Notes:
-There is an idle timer. If the user is idle for 10 seconds, the gallery will resume its loop from the current image

-When a clickable gallery is clicked, it will pause ALL rotating galleries

-GALLERY items that have rotating images within them should have:
    - "gallery_rotate" class
    - "target_imgs" attribute which has the css selector for all images it will be rotating through

-IMAGE items that can be clicked to swap with the current gallery image should have:
    - "gallery_clickable" class
    - "target_gallery" attribute which has the css selector for the gallery in which the image will be placed in

*/

//array of potential rotating galleries
var galleries = [];

//prepare gallery autoplay
var cycle = true;
var transition_time = 5000; //5 seconds total

//the set wait time for inactivity to resume cycles
var wait_time = 10; //set to 10 sec for testing
var idleTime = 0;

$(document).ready(function () {

    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 1000); // 1 second

    //Zero the idle timer on clicks
    $(this).click(function (e) {
        idleTime = 0;
    });

    $(".gallery_rotate").each(function () {
        //get # of items in that rotating gallery
        var numItems = $($(this).attr("target_imgs")).length;

        //create an item in the galleries array for each gallery
        galleries.push({
            gallery: this,
            target_images: $(this).attr("target_imgs"),
            num_items: numItems,
            i: 0
        });
    });

    //autoplay the gallery images
    setInterval(function () {
        if (cycle) {
            galleries.forEach(function (gal) {
                gal.i = (gal.i + 1) % gal.num_items;
                changeGallery(gal.gallery, $(gal.target_images)[gal.i]);
            });
        }

    }, transition_time);

    $(".gallery_clickable").on("click", function () {
        //when an image is clicked, cancel the gallery autoplay
        cycle = false;

        //NOTE: for now, this will pause all rotating galleries on the page. This is likely fine, since if someone wants to look at a specific image, they will be focused on it

        //pass into function
        changeGallery($($(this).attr("target_gallery")),$(this));

        //set i to be the current image index for the correct gallery
        for (var gal in galleries) {
            if ($(gal.gallery).is($(this).attr("target_gallery"))) {
                gal.i = $(this).index();
                break;
            }
        }

    });
});

//timer function
function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime >= wait_time) { // 
        cycle = true;
    }
}

function changeGallery(gallery, img) {
    //get info
    var src = $(img).attr("src");

    //fadeout
    $(gallery).css("opacity", "0");

    setTimeout(function () {
        //change the gallery img
        $(gallery).attr("src", src);

        //fadein
        $(gallery).css("opacity", "1");
    }, 1000);

}