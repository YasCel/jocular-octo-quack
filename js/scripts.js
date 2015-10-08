$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul").prepend("<li id='hello'>Hello!</li>");
    $('ul#user').children('li').first().click(function() {
      $(this).remove();
      $('ul#webpage').children('li').first().remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul").prepend("<li>Goodbye!</li>");
    $('ul#user').children('li').first().click(function() {
      $(this).remove();
      $('ul#webpage').children('li').first().remove();
    });
  });

  $("button#stop").click(function() {
    $("ul").prepend("<li>Stop copying me!</li>");
    $('ul#user').children('li').first().click(function() {
      $(this).remove();
      $('ul#webpage').children('li').first().remove();
    });
  });
});
