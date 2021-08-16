$(".hamburger").click(function(){
    $(".main-navigation").fadeToggle(250);
    $(".x-btn").css("display", "inline-block");
    $(".hamburger").toggle();
});

$(".x-btn").click(function(){
    $(".main-navigation").fadeToggle(250);
    $(".x-btn").css("display", "none");
    $(".hamburger").toggle();
});

$(function() {
    $('.menu-item').hover(function() {
      $('menu-icon').css('color', 'yellow');
    }, function() {
      // on mouseout, reset the background colour
      $('menu-icon').css('color', '');
    });
  });

