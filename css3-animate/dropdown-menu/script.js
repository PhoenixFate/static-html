
(function (b) {
    document.getElementsByTagName("body")[0].addEventListener("mousemove", function (a) {
        m.style.left = a.clientX + "px", m.style.top = a.clientY + "px", f.style.left = a.clientX + "px", f.style.top = a.clientY + "px", g.style.left = a.clientX + "px", g.style.top = a.clientY + "px"
    });
    var m = document.getElementById("cursor"), f = document.getElementById("cursor2"),
        g = document.getElementById("cursor3");

    function h(a) {
        f.classList.add("hover"), g.classList.add("hover")
    }

    function l(a) {
        f.classList.remove("hover"), g.classList.remove("hover")
    }

    l();
    for (var k = document.querySelectorAll(".hover-target"), c = k.length - 1; c >= 0; c--) {
        j(k[c])
    }

    function j(a) {
        a.addEventListener("mouseover", h), a.addEventListener("mouseout", l)
    }

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
    b("#switch").on("click", function () {
        if (b("body").hasClass("light")) {
            b("body").removeClass("light");
            b("#switch").removeClass("switched")
        } else {
            b("body").addClass("light");
            b("#switch").addClass("switched")
        }
    })
})(jQuery);
