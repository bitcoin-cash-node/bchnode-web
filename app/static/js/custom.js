// Custom.js

// Display closing navbar toggler icon
$(".navbar-toggler").click(function() {
  $(".navbar-toggler-icon")
    .toggleClass('navbar-expanded');
});

// Rotate chevron down on click
var chevrons = ["#about-selector", "#lang-selector", "#version-select"];

chevrons.forEach(function(chevron, index) {
  $(chevron).focus(function() {
    $(chevron + " > .chevron-down").removeClass('unrotate').addClass('rotate');
  });

  $(chevron).blur(function() {
    $(chevron + " > .chevron-down").removeClass('rotate').addClass('unrotate');
  });
});
