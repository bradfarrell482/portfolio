$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".module");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});

$(document).ready(function(){
 $(".drop_arrow").on("click", function(){
   var target = $(this).attr("target");
   var fade = $(this).attr("fade_target");
   if ($(this).hasClass("toggle_expand")){
    console.log("Expanding Box");
    $(this).addClass("toggle_collapse");
    $(this).removeClass("toggle_expand");
    $(target).removeClass("collapsed"); 
    $(fade).addClass("invisible");
   }
   else {
    console.log("Collapsing Box");
    $(this).addClass("toggle_expand");
    $(this).removeClass("toggle_collapse");
    $(target).addClass("collapsed");
    $(fade).removeClass("invisible");
   }

 }); 



});



