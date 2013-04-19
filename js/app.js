$(".js-toggle").toggle(function() {
    $(this).stop().animate({
        width: "300px",
        height: "100%"
    }, 500);
}, function() {
    $(this).stop().animate({
        width: "50px",
        height: "100%"
    }, 500);
});