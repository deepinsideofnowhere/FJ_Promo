$(function(){
          $(window).resize(function(){
          f();
        });			
          f();
      });
      function f() {
		var h=$(window).height()-30;
        $("#main").css("height", h+"px");
      }
      
$(function(){
			$(".instrument").hover(
				function(){
					var n = "#hist_"+$(this).attr("id");
					$(n).removeClass("disabled");
				},
				function(){
					var n = "#hist_"+$(this).attr("id");
					$(n).addClass("disabled");
				}
			);
			$(".close_pair").click(function() {
				var par=$(this).parent().parent().parent();
				$(".removing", par).removeClass("disabled");
				$(".pair", par).addClass("disabled");
        par.css("background-color", "rgba(0, 0, 0, 0.1)");
			});
			$(".cancel").click(function() {
				var par=$(this).parent().parent();
				$(".removing", par).addClass("disabled");
				$(".pair", par).removeClass("disabled");
				par.css("background-color", "");
			});
		});	
    
$(function(){
            $('#add_card_link').click(function(){
                $('p.info').addClass('disabled');
                $('div.add_card').addClass('for_card_edition');
                $('#span_submit').addClass('disabled');
                $('#card_edition').removeClass('disabled');
            });
       });
$(function(){
            var X = {
                'border-radius' : '6px',
                '-o-border-radius' : '6px',
                '-webkit-border-radius' : '6px',
                '-moz-border-radius' : '6px',
                'top' : '0',
            }
            if($('#selection_of_cards').hasClass('disabled')){
                $('#card_edition').removeClass('disabled');
                $('#card_edition').css(X);
            }     
        });