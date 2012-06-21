$(function(){
        $(".learn_more_switcher").click(function () {
          $("div.learn_more").slideToggle("slow", function () {
            $('div.learn_more').toggleClass('visible');
            if($('div.learn_more').hasClass('visible')) {
              var position = $("div.learn_more").offset();
              $(window).scrollTop(position.top-20);
              $("#learn_more_switcher").css("background-position", "200px -21px");
            } else {
              $("#learn_more_switcher").css("background-position", "200px 3px");
            }
            }
          );
        });
      });