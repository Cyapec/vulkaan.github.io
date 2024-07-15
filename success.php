<!DOCTYPE html>
<?php
$fbp = $_GET['fbp'];
$name = $_GET['name'];
$phone = $_GET['phone'];

?>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="theme-color" content="#111111">
    <title>Thanks</title>
    <style>
        /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
        @import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');

        html {
            line-height: 1.15;
            -webkit-text-size-adjust: 100%;
            box-sizing: border-box;
            height: 100%
        }

        details,
        main {
            display: block
        }

        h1 {
            font-size: 2em;
            margin: .67em 0
        }

        hr {
            box-sizing: content-box;
            height: 0;
            overflow: visible
        }

        code,
        kbd,
        pre,
        samp {
            font-family: monospace, monospace;
            font-size: 1em
        }

        a {
            background-color: transparent;
            text-decoration: none
        }

        abbr[title] {
            border-bottom: none;
            text-decoration: underline;
            -webkit-text-decoration: underline dotted;
            text-decoration: underline dotted
        }

        b,
        strong {
            font-weight: bolder
        }

        small {
            font-size: 80%
        }

        sub,
        sup {
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline
        }

        sub {
            bottom: -.25em
        }

        sup {
            top: -.5em
        }

        img {
            border-style: none;
            max-width: 100%
        }

        button,
        input,
        optgroup,
        select,
        textarea {
            font-family: inherit;
            font-size: 100%;
            line-height: 1.15;
            margin: 0
        }

        button,
        input {
            overflow: visible
        }

        button,
        select {
            text-transform: none
        }

        [type=button],
        [type=reset],
        [type=submit],
        button {
            -webkit-appearance: button
        }

        [type=button]::-moz-focus-inner,
        [type=reset]::-moz-focus-inner,
        [type=submit]::-moz-focus-inner,
        button::-moz-focus-inner {
            border-style: none;
            padding: 0
        }

        [type=button]:-moz-focusring,
        [type=reset]:-moz-focusring,
        [type=submit]:-moz-focusring,
        button:-moz-focusring {
            outline: ButtonText dotted 1px
        }

        fieldset {
            padding: .35em .75em .625em
        }

        legend {
            box-sizing: border-box;
            color: inherit;
            display: table;
            max-width: 100%;
            padding: 0;
            white-space: normal
        }

        progress {
            vertical-align: baseline
        }

        textarea {
            overflow: auto
        }

        [type=checkbox],
        [type=radio] {
            box-sizing: border-box;
            padding: 0
        }

        [type=number]::-webkit-inner-spin-button,
        [type=number]::-webkit-outer-spin-button {
            height: auto
        }

        [type=search] {
            -webkit-appearance: textfield;
            outline-offset: -2px
        }

        [type=search]::-webkit-search-decoration {
            -webkit-appearance: none
        }

        ::-webkit-file-upload-button {
            -webkit-appearance: button;
            font: inherit
        }

        summary {
            display: list-item
        }

        [hidden],
        template {
            display: none
        }

        :root {
            --color-wrapper-bg: #f1f3f2;
            --color-black: #000;
            --color-white: #fff;
            --color-dGrey: #333;
            --color-grey: #adacac;
            --color-lGrey: #7d7d7d;
            --color-lBlue: #d5f0f8;
            --color-avatar: #e1daff;
            --color-avatar-1: #bdeaff;
            --color-avatar-2: #ffbdcd;
            --color-avatar-3: #e6bdff;
            --color-avatar-4: #e6bdff;
            --color-avatar-sb: #b9b8b8;
            --gradient-header-bg: linear-gradient(90deg, #05a6d8 0%, #0d90cd 48.44%, #1677c4 100%);
            --shadow-bottom: 4px 5px 14px rgba(136, 163, 180, 0.25);
            --font-reg: 'Questrial', sans-serif;
            --font-semibold: 'Questrial', sans-serif;
            --font-bold: 'Questrial', sans-serif;
            --name-width: 10%
        }

        .custom-checkbox__field:checked+.custom-checkbox__content::after {
            opacity: 1
        }

        .custom-checkbox__field:focus+.custom-checkbox__content::before {
            outline: red solid 2px;
            outline-offset: 2px
        }

        .custom-checkbox__field:disabled+.custom-checkbox__content {
            opacity: .4;
            pointer-events: none
        }

        *,
        ::after,
        ::before {
            box-sizing: inherit
        }

        body {
            height: 100%;
            margin: 0;
            font-weight: 400;
            font-family: var(--font-reg);
            background-color: var(--color-white);
            overflow-x: hidden;
        }

        ul {
            padding: 0;
            list-style: none
        }

        .is-outer {
            position: relative !important;
            left: -9999px !important
        }

        .site-container {
            overflow: hidden
        }

        .is-hidden {
            display: none !important
        }

        .for-mobile {
            display: none
        }

        .error {
            border: 2px solid #ff4019 !important
        }

        .btn-reset {
            background: 0 0;
            border: none;
            cursor: pointer
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px
        }

        .js-focus-visible :focus:not(.focus-visible) {
            outline: 0
        }

        .pt-5 {
            padding-top: 5px
        }

        .pt-10 {
            padding-top: 10px
        }

        .pt-15 {
            padding-top: 15px
        }

        .pt-20 {
            padding-top: 20px
        }

        .pb-5 {
            padding-bottom: 5px
        }

        .pb-10 {
            padding-bottom: 10px
        }

        .pb-15 {
            padding-bottom: 15px
        }

        .pb-20 {
            padding-bottom: 20px
        }

        .mt-5 {
            margin-top: 5px
        }

        .mt-10 {
            margin-top: 10px
        }

        .mt-15 {
            margin-top: 15px
        }

        .mt-20 {
            margin-top: 20px
        }

        .mt-25 {
            margin-top: 25px
        }

        .mt-30 {
            margin-top: 30px
        }

        .mt-35 {
            margin-top: 35px
        }

        .mb-5 {
            margin-top: 5px
        }

        .mb-10 {
            margin-bottom: 10px
        }

        .mb-15 {
            margin-bottom: 15px
        }

        .mb-20 {
            margin-bottom: 20px
        }

        .mb-25 {
            margin-bottom: 25px
        }

        .mb-30 {
            margin-bottom: 30px
        }

        .mb-35 {
            margin-bottom: 35px
        }

        .change-lang {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 10px;
            text-align: center;
            background-color: #fff
        }

        .change-lang input {
            margin-left: 10px
        }

        @media (max-width:574px) {
            :root {
                --name-width: 13%
            }
        }

        @media (max-width:440px) {
            :root {
                --name-width: 15%
            }

            .for-mobile {
                display: block
            }
        }

        .page-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 102%;
            height: auto;
            min-height: 100%;
            max-height: 99999px;
            padding: 1px 0;
            background-color: var(--color-wrapper-bg)
        }

        .main {
            position: relative;
            width: 100%;
            min-width: 320px;
            max-width: 614px;
            height: 100%;
            padding: 28px 0 37px;
            background-color: var(--color-white);
            border-radius: 6px;
            box-shadow: var(--shadow-bottom)
        }

        .preloader {
            position: absolute;
            z-index: 99;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            background-color: #fff
        }

        .preloader-squares {
            width: 50px;
            height: 50px;
            line-height: 19px
        }

        .preloader-squares .square {
            display: inline-block;
            width: 15px;
            height: 15px;
            background: #666;
            opacity: 1;
            -webkit-animation: 2s infinite focusfade;
            animation: 2s infinite focusfade
        }

        .preloader-squares .square:nth-child(2) {
            -webkit-animation-delay: .5s;
            animation-delay: .5s
        }

        .preloader-squares .square:nth-child(3) {
            -webkit-animation-delay: 1.5s;
            animation-delay: 1.5s
        }

        .preloader-squares .square:nth-child(4) {
            -webkit-animation-delay: 1s;
            animation-delay: 1s
        }

        @-webkit-keyframes focusfade {

            0%,
            100% {
                background: #000;
                opacity: .5
            }

            30% {
                background: #666;
                opacity: .5
            }

            60%,
            75% {
                opacity: 0
            }
        }

        @keyframes focusfade {

            0%,
            100% {
                background: #000;
                opacity: .5
            }

            30% {
                background: #666;
                opacity: .5
            }

            60%,
            75% {
                opacity: 0
            }
        }

        .header__title {
            width: 100%;
            padding: 21px 10px;
            line-height: 22px;
            text-align: center;
            background: var(--gradient-header-bg)
        }

        .header__title h3 {
            margin: 0;
            color: var(--color-white);
            font-size: 28px;
            font-family: var(--font-bold);
            font-weight: 400;
            line-height: 33px
        }

        .header__subtitle {
            margin: 36px 0 29px;
            text-align: center
        }

        .header__subtitle p {
            margin: 0;
            padding: 0 20%;
            font-size: 24px;
            font-family: var(--font-reg);
            font-weight: 400;
            line-height: 27px
        }

        .user-info {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 10px 0;
            background-color: var(--color-lBlue);
            box-shadow: var(--shadow-bottom)
        }

        .user-info__item {
            color: var(--color-lGrey);
            font-size: 18px;
            font-family: var(--font-reg);
            font-weight: 400;
            line-height: 21px;
            white-space: nowrap
        }

        .user-info__item:first-child {
            margin-right: 25px
        }

        .user-info__item p {
            margin: 5px 0
        }

        .user-info__name,
        .user-info__phone {
            color: var(--color-dGrey);
            font-family: var(--font-semibold);
            font-weight: 400;
        }

        .order-steps {
            position: relative;
            display: flex;
            align-items: stretch;
            justify-content: space-around;
            margin: 48px 0 57px;
            padding: 0 20px
        }

        .order-steps__item {
            display: flex;
            flex-direction: column;
            width: 22%;
            text-align: center
        }

        .order-steps__item:nth-child(2) {
            width: 30%
        }

        .order-steps__img {
            width: 82px;
            height: 82px;
            margin: 0 auto;
            border-radius: 50%
        }

        .order-steps__title {
            display: flex;
            height: 100%
        }

        .order-steps__title p {
            margin: 20px 0 0
        }

        .order-steps::after,
        .order-steps::before {
            position: absolute;
            top: 40px;
            width: 15%;
            height: 4px;
            background: url(https://i.ibb.co/Hr2h5fJ/tp-dash.png) center center/cover no-repeat;
            border-radius: 4px;
            content: ''
        }

        .order-steps::before {
            left: 26%
        }

        .order-steps::after {
            right: 26%
        }

        .reviews {
            margin: 0 7%;
            border-top: 1px solid var(--color-grey);
            border-bottom: 1px solid var(--color-grey)
        }

        .reviews__avatar {
            width: 50px;
            height: 50px
        }

        .reviews__item {
            display: flex;
            padding: 9px 0
        }

        .reviews__item:not(:last-child) {
            border-bottom: 1px solid var(--color-grey)
        }

        .reviews .avatar-circle {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            color: var(--color-avatar-sb);
            font-size: 27px;
            line-height: 31px;
            background-color: var(--color-avatar);
            border-radius: 50%;
            box-shadow: inset 0 0 0 2px rgba(0, 0, 0, .1)
        }

        .reviews .avatar-circle.bg-color-1 {
            background-color: var(--color-avatar)
        }

        .reviews .avatar-circle.bg-color-2 {
            background-color: var(--color-avatar-1)
        }

        .reviews .avatar-circle.bg-color-3 {
            background-color: var(--color-avatar-2)
        }

        .reviews .avatar-circle.bg-color-4 {
            background-color: var(--color-avatar-3)
        }

        .reviews .avatar-circle.bg-color-5 {
            background-color: var(--color-avatar-4)
        }

        .reviews__body {
            display: flex;
            flex: 1;
            flex-direction: column;
            margin-left: 10px
        }

        .reviews__info {
            display: flex
        }

        .reviews__name {
            display: inline-block;
            min-width: 45px;
            margin: 0 5px;
            font-size: 16px;
            line-height: 18px
        }

        .reviews__stars {
            display: inline-block;
            align-self: center;
            width: 74px;
            height: 12px;
            background: url(https://i.ibb.co/cvw9YSB/tp-stars-5.png) left center/contain no-repeat
        }

        .reviews__stars.reviews__stars-4 {
            background: url(https://i.ibb.co/cvw9YSB/tp-stars-5.png) left center/contain no-repeat
        }

        .reviews__date {
            display: inline-block;
            align-self: end;
            margin-right: 0;
            margin-left: auto;
            color: var(--color-dGrey);
            font-size: 10px
        }

        .reviews__text {
            margin-left: 55px
        }

        .reviews__text p {
            margin: 10px 0 0;
            font-size: 14px;
            line-height: 16px
        }

        @media (max-width:574px) {
            .header__title {
                padding: 20px 10px
            }

            .header h3 {
                font-size: 22px;
                line-height: 25px
            }

            .header__subtitle {
                margin: 17px 0 14px
            }

            .header__subtitle p {
                font-size: 18px;
                line-height: 21px
            }

            .user-info {
                flex-direction: column;
                align-items: inherit;
                justify-content: center;
                padding: 5px 0
            }

            .user-info__item {
                font-size: 16px;
                line-height: 16px;
                text-align: center
            }

            .user-info__item:first-child {
                margin-right: 0
            }

            .user-info__item p {
                margin: 5px 0
            }

            .order-steps {
                margin: 14px 0 37px;
                padding: 0 10px
            }

            .order-steps__img {
                width: 62px;
                height: 62px
            }

            .order-steps__title {
                font-size: 14px
            }

            .order-steps::after,
            .order-steps::before {
                top: 30px;
                width: 17%;
                height: 3px
            }

            .order-steps::before {
                left: 25.5%
            }

            .order-steps::after {
                right: 25.5%
            }

            .reviews .avatar-circle,
            .reviews__avatar {
                width: 42px;
                height: 42px
            }

            .reviews__name {
                font-size: 12px
            }

            .reviews__body {
                margin-left: 10px
            }

            .reviews__stars {
                width: 65px;
                height: 11px
            }

            .reviews__text {
                font-size: 12px;
                line-height: 14px
            }

            .reviews p {
                margin: 5px 0 0
            }
        }

        @media (max-width:440px) {
            .header__title {
                padding: 26px 0
            }

            .header h3 {
                font-size: 18px;
                line-height: 21px
            }

            .header__subtitle p {
                font-size: 14px;
                line-height: 16px
            }

            .user-info {
                flex-direction: column;
                align-items: inherit;
                justify-content: center;
                padding: 5px 0
            }

            .user-info__item {
                font-size: 12px;
                line-height: 12px;
                text-align: center
            }

            .user-info__item:first-child {
                margin-right: 0
            }

            .user-info__item p {
                margin: 5px 0
            }

            .order-steps {
                margin: 14px 0 27px
            }

            .order-steps__img {
                width: 48px;
                height: 48px
            }

            .order-steps__title {
                font-size: 10px
            }

            .order-steps::after,
            .order-steps::before {
                top: 21px;
                width: 16%;
                height: 2px
            }

            .order-steps::before {
                left: 25.7%
            }

            .order-steps::after {
                right: 25.7%
            }

            .reviews__text p {
                font-size: 12px;
                line-height: 14px
            }
        }





        .subscribe {
            background: var(--gradient-header-bg);
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            font-family: 'Questrial', sans-serif;
            font-size: 20px;

            display: flex;
            flex-direction: column;

            align-items: center;
            justify-content: center;
        }

        .subscribe__cta {
            max-width: 400px;
            padding: 30px;
            text-align: center;
            color: white;
        }

        .subscribe__input {
            margin-bottom: 30px;
            display: flex;
            width: 100%;
            box-sizing: border-box;
            padding-left: 30px;
            padding-right: 30px;
            min-height: 50px;
        }

        .subscribe input {
            color: #777777;
            background: #FFFFFF;
            font-size: 16px;
            border: none;
            outline: none;
            width: 100%;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;

            padding: 0 18px;
        }

        .subscribe button {
            width: 210px;
            background-color: #fff5d4;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            font-size: 20px;
            border: none;
            outline: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-shrink: 0;
        }

        @media (max-width: 750px) {

            .subscribe__cta {
                padding: 20px;
            }

            .subscribe__submit-text {
                display: none;
            }

            .subscribe button {
                width: unset;
                padding: 0 13px;
            }

            .subscribe__input {
                min-height: 40px;
            }

            .subscribe input {
                font-size: 12px;
            }
        }

        @media (max-width: 425px) {

            .subscribe {
                font-size: 15px;
            }
        }

        @media (max-width: 310px) {

            .subscribe,
            .subscribe input {
                font-size: 13px;
            }

            .subscribe input {
                height: 40px;
            }

            .subscribe__cta {
                font-size: 15px;
            }
        }
    </style>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <?php if (!empty($fbp)) { ?>
    <!-- Facebook Pixel Code -->
    <script>
        ! function (f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function () {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '<?=$fbp?>');
        fbq('track', 'PageView');
        fbq('track', 'Lead');
    </script>
    <noscript><img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=<?=$fbp?>&ev=Lead&noscript=1" /></noscript>
    <!-- End Facebook Pixel Code -->
    <?php } ?>
</head>

<body>
    <div class="page-wrapper">
        <div class="main">

            <div class="header">
                <div class="header__title">
                    <h3 id="title">Thank you for your order and your choice!<br>
                    Your order №<script>
                            document.write(Math.floor(Math.random() * (7000 - 500) + 500))
                        </script>
                    </h3>
                </div>
                <div class="header__subtitle">
                    <p id="subtitle">Our manager will contact you soon for confirmation</p>
                </div>
            </div>
            <div class="user-info">
                <div class="user-info__item">
                    <p> <span id="name">Your name: </span> <span class="user-info__name"><?=$name?></span></p>
                </div>
                <div class="user-info__item">
                    <p><span id="phone">Phone number: </span> <span class="user-info__phone"><?=$phone?></span></p>
                </div>
            </div>
            <div class="order-steps">
                <div class="order-steps__item">
                    <div class="order-steps__img">
                        <img src="https://i.ibb.co/ccy0WTD/tp-step-1.png" alt="">
                    </div>
                    <div class="order-steps__title">
                        <p id="step1">
                        Check your details </p>
                    </div>
                </div>
                <div class="order-steps__item">
                    <div class="order-steps__img">
                        <img src="https://i.ibb.co/wrq18Bt/tp-step-2.png" alt="">
                    </div>
                    <div class="order-steps__title">
                        <p id="step2">
                        The call may come from an unknown number. </p>
                    </div>
                </div>
                <div class="order-steps__item">
                    <div class="order-steps__img">
                        <img src="https://i.ibb.co/MVTVZ1Z/tp-step-3.png" alt="">
                    </div>
                    <div class="order-steps__title">
                        <p id="step3">
                        Payment on delivery </p>
                    </div>
                </div>
            </div>
            <div class="subscribe" id="block">
                <div class="subscribe__cta">Get a permanent 50% discount on your next purchase!</div>
                <form id="subscribe__form" class="subscribe__input" action="/subscribe" method="post">
                    <input type="email" name="email" placeholder="Enter your email" autocomplete="email"
                        required>
                    <button type="submit" id="next">
                        <span class="subscribe__submit-text">Subscribe</span>
                        <svg width="24" height="19" viewbox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 9.5L-5.96046e-07 9.5M24 9.5L15.5294 18M24 9.5L15.5294 1" stroke="black" />
                        </svg>
                    </button>
                </form>
            </div>
            <div class="reviews">
                <div class="reviews__item">
                    <div class="reviews__avatar">
                        <div class="avatar-circle bg-color-5">
                            <span class="symbol">E</span>
                        </div>
                    </div>
                    <div class="reviews__body">
                        <div class="reviews__info">
                            <span class="reviews__name">Elena</span>
                            <div class="reviews__stars"></div>
                            <span class="reviews__date"><span class="date-0"></span></span>
                        </div>
                        <div class="reviews__text">
                            <p>I recommend</p>
                        </div>
                    </div>
                </div>
                <div class="reviews__item">
                    <div class="reviews__avatar">
                        <div class="avatar-circle bg-color-2">
                            <span class="symbol">J</span>
                        </div>
                    </div>
                    <div class="reviews__body">
                        <div class="reviews__info">
                            <span class="reviews__name">Julia</span>
                            <div class="reviews__stars"></div>
                            <span class="reviews__date"><span class="date-0"></span></span>
                        </div>
                        <div class="reviews__text">
                            <p>All received, I'm happy</p>
                        </div>
                    </div>
                </div>
                <div class="reviews__item">
                    <div class="reviews__avatar">
                        <div class="avatar-circle bg-color-1">
                            <span class="symbol">G</span>
                        </div>
                    </div>
                    <div class="reviews__body">
                        <div class="reviews__info">
                            <span class="reviews__name">Gabriel</span>
                            <div class="reviews__stars"></div>
                            <span class="reviews__date"><span class="date-1"></span></span>
                        </div>
                        <div class="reviews__text">
                            <p>I tried it, I recommend it to everyone!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <script>
        let next = document.getElementById('next');
        let panel = document.querySelector('.subscribe');
        let block = document.querySelector('.subscribe form');
        next.onclick = () => {
            document.querySelector('.subscribe__cta').style.display = 'none'
            block.style.display = 'none';
            let h3 = document.createElement('div');
            h3.setAttribute('class', 'subscribe__cta');
            panel.appendChild(h3);
            console.log(next);
        }
    </script>

    <script>
        $(document).ready(function () {
            $("#next").click(
                function () {
                    sendAjaxForm('result_form', 'subscribe__form', 'action.php');
                    return false;
                }
            );
        });

        function sendAjaxForm(result_form, forms, url) {
            $.ajax({
                url: url,
                type: "POST",
                dataType: "html",
                data: $("#" + forms).serialize(),
                success: function (response) {
                    result = $.parseJSON(response);
                    $('.subscribe__cta').append('Please confirm your agreement by mail'); // тут меняем
                },
                error: function (response) {
                    $('.subscribe__cta').append('Error No information was sent.'); // тут меняем
                }
            });
        }
    </script>
    <script>
        // Dates script 
        document.addEventListener("DOMContentLoaded", function () {
            postDate()
        });

        function postDate(e, r, t) {
            var a, e = e || "dd.mm.yyyy",
                r = r || "ge",
                t = t || !1,
                n = new Date;
            switch (r) {
                case "ge":
                    a = ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო",
                        "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"
                    ];
                    break;
                case "it":
                    a = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre",
                        "Ottobre", "Novembre", "Dicembre"
                    ];
                    break;
                case "es":
                    a = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
                        "Octubre", "Noviembre", "Diciembre"
                    ];
                    break;
                case "fr":
                    a = ["Janvier", "F\xe9vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao\xfbt", "Septembre",
                        "Octobre", "Novembre", "D\xe9cembre"
                    ];
                    break;
                case "pt":
                    a = ["Janeiro", "Fevereiro", "Mar\xe7o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro",
                        "Outubro", "Novembro", "Dezembro"
                    ];
                    break;
                case "de":
                    a = ["Januar", "Februar", "M\xe4rz", "April", "Mai", "Juni", "Juli", "August", "September",
                        "Oktober", "November", "Dezember"
                    ];
                    break;
                case "bg":
                    a = ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври",
                        "Ноември", "Декември"
                    ];
                    break;
                case "pl":
                    a = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień",
                        "Październik", "Listopad", "Grudzień"
                    ];
                    break;
                case "ro":
                    a = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie",
                        "Octombrie", "Noiembrie", "Decembrie"
                    ];
                    break;
                case "hu":
                    a = ["Janu\xe1r", "Febru\xe1r", "M\xe1rcius", "\xc1prilis", "M\xe1jus", "J\xfanius", "J\xfalius",
                        "Augusztus", "Szeptember", "Okt\xf3ber", "November", "December"
                    ];
                    break;
                case "gr":
                case "cy":
                    a = ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος",
                        "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"
                    ];
                    break;
                case "ru":
                    a = ["Января", "Февраля", "Марта", "Апрель", "Май", "Июнь", "Июля", "Августа", "Сентября",
                        "Октября", "Ноября", "Декабря"
                    ]
            }
            if (t)
                for (var o = 0; o < a.length; o++) a[o] = a[o].slice(0, 3).toLowerCase();
            for (var i = 0; i < 90; i++) {
                var u = "date-" + i,
                    s = document.getElementsByClassName(u),
                    $ = new Date(n.getTime() - 864e5 * i),
                    m = 0,
                    c = y(s);
                c = l(c);
                for (var o = 0; o < s.length; o++) {
                    var b = s[o].dataset;
                    b.format ? s[o].innerHTML = _($, b.format) : s[o].innerHTML = _($, e), /\btime\b/.test(s[o]
                        .className) && (s[o].innerHTML += " " + c[m], m++)
                }
            }
            for (var i = 0; i < 90; i++)
                for (var u = "date" + i, s = document.getElementsByClassName(u), $ = new Date(n.getTime() + 864e5 * i),
                        m = 0, o = 0; o < s.length; o++) {
                    var b = s[o].dataset;
                    b.format ? s[o].innerHTML = _($, b.format) : s[o].innerHTML = _($)
                }

            function y(e, r) {
                for (var t = [], a = !1, n = 0; n < e.length; n++) e[n].className.match(/\btime\b/) && (e[n].className
                    .match(/\bdate-0\b/) && (a = !0), t.push(d(a)));
                return r ? t.sort(function (e, r) {
                    return r - e
                }) : t.sort(function (e, r) {
                    return e - r
                }), t
            }

            function d(e) {
                if (e) {
                    var r = new Date;
                    return Math.round(0 + Math.random() * (60 * r.getHours() + r.getMinutes()))
                }
                return Math.round(0 + 1440 * Math.random())
            }

            function l(e) {
                for (var r = [], t = 0; t < e.length; t++) {
                    var a = Math.floor(e[t] / 60),
                        n = e[t] % 60,
                        o = a < 10 ? "0" + a : a,
                        i = n < 10 ? "0" + n : n;
                    r.push(o + ":" + i)
                }
                return r
            }

            function _(e, r) {
                var t = "",
                    n = e.getDate(),
                    o = e.getFullYear(),
                    i = e.getMonth() + 1;
                switch (r || !0) {
                    case "tom":
                        return t += n + 1, t += ".", t += i < 10 ? "0" + i : i;
                    case "mm.dd.yyyy":
                        return t += i < 10 ? "0" + i : i, t += ".", t += n < 10 ? "0" + n : n, t += "." + o;
                    case "dd month yyyy":
                        return t += n < 10 ? "0" + n : n, t += " ", t += a[i - 1], t += " " + o;
                    case "dd month":
                        return t += n < 10 ? "0" + n : n, t += " ", t += a[i - 1];
                    case "month":
                        return t + a[i - 1].toLowerCase();
                    case "day dd, month yyyy":
                        return t += ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"][
                            new Date(o, i - 1, n).getDay()
                        ], t += " ", t += n < 10 ? "0" + n : n, t += " ", t += a[i - 1], t += " " + o;
                    case "dd/mm/yyyy":
                        return t += n < 10 ? "0" + n : n, t += "/", t += i < 10 ? "0" + i : i, t += "/" + o;
                    case "dd-mm-yyyy":
                        return t += n < 10 ? "0" + n : n, t += "-", t += i < 10 ? "0" + i : i, t += "-" + o;
                    case "yyyy.mm.dd":
                        return t += o, t += ".", t += i < 10 ? "0" + i : i, t += ".", t += n < 10 ? "0" + n : n;
                    case "month dd, yyyy":
                        return t += a[i - 1], t += " ", t += n < 10 ? "0" + n : n, t += ", ", t += o;
                    case "dd month, yyyy":
                        return t += n < 10 ? "0" + n : n, t += " ", t += a[i - 1], t += ", ", t += o;
                    default:
                        return t += n < 10 ? "0" + n : n, t += ".", t += i < 10 ? "0" + i : i, t += "." + o
                }
            }
        }
    </script>
</body>

</html>