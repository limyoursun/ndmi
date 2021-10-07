$(function () {
  // gnb
  $(".gnb_wrap").on({
    mouseenter: function () {
      $(this).addClass("on");
      $(".depth2").show();
    },
    mouseleave: function () {
      $(this).removeClass("on");
      $(".depth2").hide();
    }
  })
  $(".depth1").on({
    mouseenter: function () {
      $(this).next(".depth2").addClass("on");
    },
    mouseleave: function () {
      $(this).next(".depth2").removeClass("on");
    }
  })
  $(".depth2").on({
    mouseenter: function () {
      $(this).prev(".depth1").addClass("on");
    },
    mouseleave: function () {
      $(this).prev(".depth1").removeClass("on");
    }
  })

  // snb
  function snb() {
    var lm = $("#snb");
    lm.a = lm.find(">li>a");
    lm.dep2 = lm.find(">li>ul");
    lm.dep2.a = lm.dep2.find(">li>a");
    lm.dep2.hide();
    lm.a.each(function () {
      if (!$(this).next().length) {
        $(this).addClass("empty");
      }
      if ($(this).hasClass("on")) {
        $(this).next("ul").show();
      }
    });
    lm.a.on("click", function () {
      lm.a.removeClass("on");
      if ($(this).next("ul").is(":hidden")) {
        lm.dep2.slideUp("fast");
        $(this).next("ul").slideDown("fast");
      } else {
        $(this).removeClass("on");
        $(this).next("ul").slideUp("fast");
      }
      // 클릭 후 슬라이드
      var url = $(this).attr("href");
      if ($(this).next("ul").is("ul")){
        $(this).addClass('on');
        $(this).next("ul").slideDown("fast", function () {
          document.location.href = url;
        });
      } else if ($(this).next("ul").not("ul")) {
        lm.dep2.slideUp('fast');
        $(this).addClass("on");
        setTimeout(function () {
          document.location.href = url;
        }, 200);
      }
      return false;
    });
  }
  snb();

  // check icon
  $('.slides label').on({
    click: function () {
      $('.slides label').removeClass('on');
      $(this).addClass("on");
    }
  })

  // slide button
  $('.controls .prev').on({
    click: function () {
      $(this).addClass("on");
      $('.next').removeClass("on");
    }
  })
  $('.controls .next').on({
    click: function () {
      $(this).addClass("on");
      $('.prev').removeClass("on");
    }
  })

  $('.faq_question').children('p').on('click', function(){
    $('.faq_question').removeClass('on');
    $('.faq_answer').slideUp();
    $(this).parent('.faq_question').addClass('on');
    $(this).parent('.faq_question').children('.faq_answer').slideToggle();
  })
  return false;
})
