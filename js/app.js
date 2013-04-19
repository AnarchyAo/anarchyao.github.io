$('.js-toggle').toggle(function() {
  $('.js-toggle').animate({width:'300px'});
}, function() {
  $('.js-toggle').animate({width:'50px'});
});