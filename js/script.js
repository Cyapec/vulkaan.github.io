
// -------------spin-------------------
var resultWrapper = document.querySelector(".spin-result-wrapper");
var wheel = document.querySelector(".wheel-img");

function spin() {
  if (wheel.classList.contains("rotated")) {
    resultWrapper.style.display = "block";
  } else {
    wheel.classList.add("super-rotation");
    setTimeout(function () {
      $(".spin-wrapper").slideUp();
      $(".tov").slideUp();
      $(".order_block").slideDown();
      // -------------TIMER------------------------
      var fiveSeconds = new Date().getTime() + 600000;
      $("#clock")
        .countdown(fiveSeconds, { elapse: true })
        .on("update.countdown", function (event) {
          var $this = $(this);
          if (event.elapsed) {
            $this.html("Waktu sudah berakhir");
          } else {
            $this.html(event.strftime("<span>%M</span> : <span>%S</span>"));
          }
        });
    }, 10000);
    wheel.classList.add("rotated");
  }
}

var closePopup = document.querySelector(".close-popup");

$(".close-popup, .pop-up-button").click(function (e) {
  e.preventDefault();
  $(".spin-result-wrapper").fadeOut();
  var top = $(".spin-wrapper").offset().top;
  $("body,html").animate({ scrollTop: top }, 800);
});
