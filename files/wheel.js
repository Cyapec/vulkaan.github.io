$((function () {
    var e = document.querySelector(".spin-result-wrapper"),
        t = document.querySelector(".wheel-img"),
        a = 19,
        o = !1;

    function n(e, t) {
        return Math.floor(Math.random() * (t - e + 1) + e)
    }

    function l() {
        (a -= 1) > 3 && ($(".order_block__quantity-left").html(a), $(".order_block__quantity-left").addClass("order_block__quantity-left-wiggle"), function () {
            let e = r();
            e && ($(".custom-push-note").html(e), $(".custom-push-note").addClass("custom-push-note-active"), setTimeout((function () {
                $(".custom-push-note").removeClass("custom-push-note-active")
            }), 3e3))
        }(), setTimeout((function () {
            $(".order_block__quantity-left").removeClass("order_block__quantity-left-wiggle")
        }), 4e3), setTimeout(l, 1e3 * n(5, 30)))
    }
    $(".order_block__quantity-left").html(a), t && 0 !== t.length ? o = setTimeout((function e() {
        let t = r();
        t && ($(".custom-push-note").html(t), $(".custom-push-note").addClass("custom-push-note-active"), setTimeout((function () {
            $(".custom-push-note").removeClass("custom-push-note-active")
        }), 3e3)), o = setTimeout(e, 1e3 * n(5, 30))
    }), 1e3 * n(5, 30)) : setTimeout(l, 1e3 * n(5, 30)), $(".wheel-cursor").on("click", (function () {
        t.classList.contains("rotated") || (t.classList.add("super-rotation"), setTimeout((function () {
            e.style.display = "block"
        }), 8e3), o && window.clearTimeout(o), setTimeout((function () {
            $(".spin-wrapper").slideUp(), $(".order_block").slideDown(), c(), setTimeout(l, 1e3 * n(5, 30))
        }), 8e3), t.classList.add("rotated"))
    }));
    document.querySelector(".close-popup");
    $(".close-popup, .pop-up-button").click((function (e) {
        e.preventDefault(), $(".spin-result-wrapper").fadeOut()
    }));
    var i, u = 600,
        s = 10;

    function c() {
        i = setInterval(m, 1e3)
    }

    function m() {
        u -= 1;
        var e = Math.floor(u / 60);
        e !== s && (s = e, $(".order_block__time").addClass("order_block__time-wiggle"), setTimeout((function () {
            $(".order_block__time").removeClass("order_block__time-wiggle")
        }), 5e3));
        var t = u - 60 * e;
        0 == e && 0 == t && clearInterval(i), t = t >= 10 ? t : "0" + t, $(".timer-min").html("0" + e), $(".timer-sec").html(t)
    }
    $(".wheel-cursor") && 0 !== $(".wheel-cursor").length || c();
    var p = document.querySelectorAll(".change-package-selector2 option");
    p[0] && (p[0].selected = !0)
}));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});