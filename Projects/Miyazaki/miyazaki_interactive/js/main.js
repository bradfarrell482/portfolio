/*
main.js

main js that applies to all pages.
Mainly allows the fadeIn effect
*/

$(document).ready(function(){
    setTimeout(function() {
        $("body").removeClass("fadeOut");
    }, 200);

/*! Fades out the whole page when clicking links */
    $('a').click(function(e) {
        e.preventDefault();
        newLocation = this.href;
        $('body').addClass("fadeOut");
        setTimeout(function() {
            window.location = newLocation;
        }, 700);
    });
});