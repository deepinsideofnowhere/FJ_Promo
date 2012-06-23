$(function(){
  $(".learn_more_link").click(function () {
    $("div.learn_more").slideToggle("slow", function () {
      $("div.learn_more").toggleClass("visible");
      if($("div.learn_more").hasClass("visible")) {
        $(".arrow").css("background-position", "50% -24px");
      } else {
        $(".arrow").css("background-position", "50% 0");
      }
      }
    );
  });
});