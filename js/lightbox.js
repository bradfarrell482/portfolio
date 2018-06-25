/*
lightbox.js

generic lightbox code to work on any project page
utilizes photoswipe (visit <photoswipe.com> for more info)

Notes:
-any html page that utilizes this code will require a specific set of HTML code somewhere in the body as well as link to the main photoswipe css/js (code commented at the bottom of this page)

-any image that should open a lightbox should have the class "lightbox" in the element

-each image in a group should also have an additional attributes:
    - "lightbox_target" = the css selector for all img items in that group
    - "w" = the width of the image
    - "h" = the height of the image
*/

var items = [];
var options = {};
var pswpElement;

$(document).ready(function () {

    /****** Photoswipe code ******/
    pswpElement = document.querySelectorAll('.pswp')[0];

    //when a lightbox item is clicked
    $(".lightbox").on("click", function () {
        // build items array
        items = [];
        $($(this).attr("lightbox_target")).each(function () {
            items.push(
                {
                    src: $(this).attr("src"),
                    w: $(this).attr("w"),
                    h: $(this).attr("h")
                }
            );
        });

        //console.log($(this).index()); //debug line
        //now init the photoswipe ligtbox
        initPhotoSwipe($(this).index());
    });
    /****** Photoswipe code end ******/

});

function initPhotoSwipe(i) {
    // define options (if needed)
    var options = {
        index: i,
        allowPanToNext: true,
        bgOpacity: 0.7
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}


/************************************************
Linked js/css files to be placed in head of page:

<!-- 
        PhotoSwipe Files

        For more info on PhotoSwipe, visit photoswipe.com
    -->

    <link rel="stylesheet" href="photoswipe/photoswipe.css">
    <link rel="stylesheet" href="photoswipe/default-skin/default-skin.css">
    <script src="photoswipe/photoswipe.min.js"></script>
    <script src="photoswipe/photoswipe-ui-default.min.js"></script>

    <!-- End PhotoSwipe -->

 ************************************************

Here is an example of an img item with the correct classes/ attributes:

<img class="lightbox" lightbox_target="#office_grid img" w="2500" h="1406" src="Projects/Scout/office/scout_office9.jpg">

 ************************************************

HTML code required for this to work. Simply append it before closing the <body> tag:

<!-- Photoswipe Elements-->

            <!-- Root element of PhotoSwipe. Must have class pswp. -->
            <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

                <!-- Background of PhotoSwipe. 
             It's a separate element as animating opacity is faster than rgba(). -->
                <div class="pswp__bg"></div>

                <!-- Slides wrapper with overflow:hidden. -->
                <div class="pswp__scroll-wrap">

                    <!-- Container that holds slides. 
                PhotoSwipe keeps only 3 of them in the DOM to save memory.
                Don't modify these 3 pswp__item elements, data is added later on. -->
                    <div class="pswp__container">
                        <div class="pswp__item"></div>
                        <div class="pswp__item"></div>
                        <div class="pswp__item"></div>
                    </div>

                    <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
                    <div class="pswp__ui pswp__ui--hidden">

                        <div class="pswp__top-bar">

                            <!--  Controls are self-explanatory. Order can be changed. -->

                            <div class="pswp__counter"></div>

                            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

                            <button class="pswp__button pswp__button--share" title="Share"></button>

                            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                            <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
                            <!-- element will get class pswp__preloader--active when preloader is running -->
                            <div class="pswp__preloader">
                                <div class="pswp__preloader__icn">
                                    <div class="pswp__preloader__cut">
                                        <div class="pswp__preloader__donut"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                            <div class="pswp__share-tooltip"></div>
                        </div>

                        <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                        </button>

                        <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                        </button>

                        <div class="pswp__caption">
                            <div class="pswp__caption__center"></div>
                        </div>

                    </div>

                </div>

            </div>

            <!-- End Photoswipe Elements-->

 ************************************************/