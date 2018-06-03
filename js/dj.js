$(document).ready(function() {

    $(".gallery_thumb").on("click", function(){
        //get info
        var src = $(this).attr("src");
        var alt = $(this).attr("alt");
        var color1 = $(this).attr("color1"); //BG
        var color2 = $(this).attr("color2"); //BG

        //change the gallery img
        $(".gallery img").attr("src", src);
        $(".gallery img").attr("alt", alt);

        //change the background for all elements
        $("#color1").css("stop-color", "#"+color1); //BG
        $("#color2").css("stop-color", "#"+color2); //BG
    });

});