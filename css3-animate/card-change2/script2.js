$.fn.commentCards = function () {
    return this.each(function () {
        const d = $(this);
        const a = d.find(".card");
        let b = a.filter(".card--current");
        let c;
        a.on("click", function () {
            if (!b.is(this)) {
                a.removeClass("card--current card--out card--next card--out--temp");
                b.addClass("card--out");
                b = $(this).addClass("card--current");
                c = b.next();
                c = c.length ? c : a.first();
                c.addClass("card--next")
            }
        });
        if (!b.length) {
            b = a.last();
            a.first().trigger("click")
        }
        d.addClass("cards--active")
    })
}
;
$(".cards").commentCards();
$("#btnHide").on("click",function (){
    $(".cards").removeClass("cards-in")
    $(".cards").addClass("cards-out")
    setTimeout(function (){
        $(".cards").hide();
    },600)
})
$("#btnShow").on("click",function (){
    $(".cards").removeClass("cards-out")
    $(".cards").addClass("cards-in")
    $(".cards").show();
})

