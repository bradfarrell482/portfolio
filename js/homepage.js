$(document).ready(function(){
    $("#nav").load("/html/nav.html");
});

function toggleNav() {
    if ($("#navcontent .dropdown").hasClass("slideDown")){
        $("#navcontent .dropdown").removeClass("slideDown");
    } else {
        $("#navcontent .dropdown").addClass("slideDown");
    }
    return;
}