$(".js-toggle").toggle(function() {
    $(this).stop().animate({
        width: "300px",
    }, 500);
}, function() {
    $(this).stop().animate({
        width: "50px",
    }, 500);
});