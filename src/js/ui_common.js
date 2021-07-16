$(function(){
function left_menu(){
    var lm = $("#snb");
    lm.a = lm.find(">li>a");
    lm.dep2 = lm.find(">li>ul");
    lm.dep2.a = lm.dep2.find(">li>a");
    lm.dep2.hide();

    lm.a.each(function () {
        if(!$(this).next().length){
            $(this).addClass("empty");
        }
        if($(this).hasClass("on")){
            $(this).next("ul").show();
        }
    });
    $("#snb>li").show();
    lm.a.on("click",function () {
        lm.a.removeClass("on");
        $(this).addClass("on");

        if($(this).next("ul").is(":hidden")){
            lm.dep2.slideUp("fast");
            lm.a.removeClass("on");
            lm.dep2.slideUp("fast");
            lm.dep2.a.removeClass("on");
            $(this).addClass("on");
        }else{
            $(this).removeClass("on");
            $(this).next("ul").slideUp("fast");
            return false;
        }
    });
    $("#snb>li>a").on({
      click:function(){
        $("#snb>li>a").removeClass('on');
        $(this).addClass('on');
        $("#snb>li>a").next("ul").slideUp("fast");
        $(this).next("ul").slideDown("fast");
      }
    })
}
left_menu();
})