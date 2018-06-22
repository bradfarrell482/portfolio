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
  $(".toggle_expand").on("click", function () {
    console.log("Expanding Box");
    $(this).addClass("toggle_collapse hidden");
    $(this).removeClass("toggle_expand");
    $(".intro").removeClass("collapsed"); 
    $(".fadeout").addClass("hidden");
  });

  $(".toggle_collapse").on("click", function () {
    console.log("Collapsing Box");
    $(this).addClass("toggle_expand");
    $(this).removeClass("toggle_collapse");
    $(".intro").addClass("collapsed"); 
  });



});



