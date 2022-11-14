
(function (b) {


    var d = function () {
        var e = undefined;
        var n = undefined;
        var o = undefined;
        var i = function i() {
            e = document.querySelector("body");
            n = document.querySelector(".menu-icon");
            o = document.querySelectorAll(".nav__list-item");
            a()
        };
        var a = function a() {
            n.addEventListener("click", function () {
                console.log(e)
                return p(e, "nav-active")
            })
        };
        var p = function p(q, r) {
            if (q.classList.contains(r)) {
                q.classList.remove(r)
            } else {
                q.classList.add(r)
            }
        };
        i()
    }();

})(jQuery);
