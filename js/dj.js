/*
dj.js

special case gallery: utilizes the rotating/clickable galleries, but with the addition
of changing additional page elements for styling
*/

$(document).ready(function() {

    //prepare gallery autoplay
    var cycle = true;
    var i = 1;

    //autoplay the gallery images
    setInterval(function() {
        if (cycle) {
            changeGallery($(".gallery_thumb")[i]);
            i= (i+1)%4;
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
    var color1 = $(img).attr("color1"); //BG
    var color2 = $(img).attr("color2"); //BG

    //change the gallery img
    $(".gallery svg image").attr("xlink:href", src);
    //$(".gallery img").attr("alt", alt);

    //change the background for all elements
    $("#color1").css("stop-color", "#"+color1); //BG
    $("#color2").css("stop-color", "#"+color2); //BG
}