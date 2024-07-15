//time checking 11:35
window.addEventListener("load", function () {
    setTimeout(function () {
        var e = document.querySelector(".create_rom_footer");
        e.insertAdjacentHTML("afterbegin", '<div class="ev-footer__logo"></div> <a class="ev-footer__link" target="_blank" style="display: none" href=""></a>');
        var t = e.getAttribute("data-color_text"), o = e.getAttribute("data-color_link"),
            i = e.getAttribute("data-color_logo"), a = e.getAttribute("data-background-color"),
            l = document.querySelector("head"), r = document.querySelectorAll(".rom_p"),
            n = document.querySelectorAll(".ev-footer__link"),
            c = document.querySelectorAll(".ev-footer__logo svg path");
        for (let e = 0; e < r.length; e++) r[e].style.color = t;
        for (let e = 0; e < n.length; e++) n[e].style.color = o;
        for (let e = 0; e < c.length; e++) c[e].style.fill = i;
        e.style.background = a, l.insertAdjacentHTML("afterbegin", "<style>.ev-footer, .create_rom_footer{display:flex;align-items:center;padding:15px 0;justify-content:center;flex-direction:column}.ev-footer__logo svg{display:flex;width:30px;height:30px}.ev-footer__logo a{text-decoration:none;font-size:14px;font-family:inherit}.ev-footer__link{display:flex;text-decoration:underline}.ev-footer__link:hover{text-decoration:none}:active,:focus,:hover,:visited,a,a:active,a:focus,a:hover,a:visited{outline:0!important}::-moz-focus-inner{border:0;outline:0}</style>");
        var d = window.language ? window.language : window.lang;
        var s = document.querySelector(".ev-footer__link"), v = {
            bg: "Правила за поверителност",
            en: "Privacy policy",
            hu: "Adatvédelem",
            de: "Datenschutz politik",
            el: "Πολιτική απορρήτου",
            ge: "კონფიდენციალობის პოლიტიკა",
            es: "Politica de privacidad",
            it: "Informativa sulla privacy",
            lv: "Privatumo politika",
            lt: "Privatumo politika",
            pl: "Polityka prywatnośći",
            pt: "Politica de confidencialidade",
            ro: "Politica de confidențialitate",
            md: "Politica de confidențialitate",
            sk: "Zásady ochrany osobných údajov",
            sl: "Pravilnik o zasebnosti",
            fr: "Politique de confidentialité",
            cz: "Ochrana osobních údajů",
            hr: "Politika povjerljivosti",
            id: "Kebijakan Privasi",
            tw: "私隐政策",
            th: "นโยบายความเป็นส่วนตัว",
            tr: "Gizlilik Politikası"
        };
        s.innerHTML = v[d] ? v[d] : v.en
    }, 200)
});
