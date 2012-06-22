$(function(){
        $(".learn_more_link").click(function () {
          $("div.learn_more").slideToggle("slow", function () {
            $("div.learn_more").toggleClass("visible");
            if($("div.learn_more").hasClass("visible")) {
              var position = $("div.learn_more").offset();
              $(window).scrollTop(position.top-20);
              $(".arrow").css("background-position", "50% -24px");
            } else {
              $(".arrow").css("background-position", "50% 0");
            }
            }
          );
        });
      });