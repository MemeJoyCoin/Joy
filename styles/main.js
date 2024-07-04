$(document).ready(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        $(".parallax").each(function() {
            var speed = $(this).attr('data-speed');
            var yPos = -(scroll * speed / 100);
            var coords = '50% ' + yPos + 'px';
            $(this).css('background-position', coords);
        });
    });
});
