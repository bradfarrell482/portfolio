/*
homepage.js

should actually be called nav.js, since it specifically loads/manages the navigation bar
*/

$(document).ready(function(){
    $("#nav").load("/nav.html");
});

function toggleNav() {
    if ($("#navcontent .dropdown").hasClass("slideDown")){
        $("#navcontent .dropdown").removeClass("slideDown");
    } else {
        $("#navcontent .dropdown").addClass("slideDown");
    }
    return;
}