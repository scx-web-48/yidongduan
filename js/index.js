var swiper = new Swiper('.swiper-container', {
  slidesPerView: "auto",
  spaceBetween: 15,
  freeMode: true,
});
$(".btn-clear").click(function () {
  $(this).parent().find('input').val('');
});
$(".form-inp").click(function() {
  $(this).find('input').focus();
})