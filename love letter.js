$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});

$(document).ready(function () {
  const $modal = $(".modal");
  const $close = $(".close");

  // 🩷 Abrir al hacer clic en la carta o sobre
  $(".valentines, .card").on("click", function () {
    console.log("Carta clickeada -> mostrando modal"); // para verificar en consola
    $modal.addClass("active");
  });

  // 🩷 Cerrar con la X
  $close.on("click", function () {
    $modal.removeClass("active");
  });

  // 🩷 Cerrar haciendo clic fuera del contenido
  $(window).on("click", function (e) {
    if ($(e.target).is($modal)) {
      $modal.removeClass("active");
    }
  });
});