$(".box").hover(
    function() {
        $(this).find('span.badge').addClass("animated fadeInLeft");
        $(this).find('.ico').addClass("animated fadeIn");
        $(this).find('.text h2').css({'color':'#1e90ff'});
    },
    function() {
        $(this).find('span.badge').removeClass("animated fadeInLeft");
        $(this).find('.ico').removeClass("animated fadeIn");
        $(this).find('.text h2').css({'color':'#000000'});
    }
);

$(function(){
    $('a').addClass("hvr-glow");
});