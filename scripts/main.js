$(function () {
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });

  $("[data-fancybox]").fancybox({
    youtube: {
      controls: 1,
      showinfo: 1,
    },
  });

  $(".slider__heroes-img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider__heroes-description",
  });
  $(".slider__heroes-description").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider__heroes-img",
    fade: true,
    arrows: false,
  });
});
