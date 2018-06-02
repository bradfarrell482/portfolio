$(document).ready(function(){
    $("#nav").load("/html/nav.html");
});

function toggleNav() {
    if ($("#navcontent ul").hasClass("show")){
        $("#navcontent ul").removeClass("show");
    } else {
        $("#navcontent ul").addClass("show");
    }
    return;
}