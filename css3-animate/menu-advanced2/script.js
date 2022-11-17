var index = 1;

function test() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".mine-selector").css({
        // "top": itemPosNewAnimTop.top + "px",
        // "left": itemPosNewAnimLeft.left + "px",
        // "height": activeWidthNewAnimHeight + "px",
        // "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
        console.log(index)
        console.log($(this).attr("tabIndex"))
        if (index == $(this).attr("tabIndex")) {
            return;
        }

        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        console.log(itemPosNewAnimTop.top)
        var itemPosNewAnimLeft = $(this).position();
        if (index < parseInt($(this).attr("tabIndex"))) {
            $(".mine-selector").css({
                "top": itemPosNewAnimTop.top +10 + "px",
                // "left": itemPosNewAnimLeft.left + "px",
                // "height": activeWidthNewAnimHeight + "px",
                // "width": activeWidthNewAnimWidth + "px"
            });
        } else {
            $(".mine-selector").css({
                "top": itemPosNewAnimTop.top +10+ "px",
                // "left": itemPosNewAnimLeft.left + "px",
                // "height": activeWidthNewAnimHeight + "px",
                // "width": activeWidthNewAnimWidth + "px"
            });
        }
        index = $(this).attr("tabIndex");

    });
}

$(document).ready(function () {
    test();
});
// $(window).on('resize', function () {
//     setTimeout(function () {
//         test();
//     }, 500);
// });
// $(".navbar-toggler").click(function () {
//     setTimeout(function () {
//         test();
//     });
// });
