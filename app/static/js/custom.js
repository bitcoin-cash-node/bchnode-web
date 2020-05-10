// Custom.js

// Display closing navbar toggler icon
$(".navbar-toggler").click(function() {
  $(".navbar-toggler-icon")
    .toggleClass('navbar-expanded');
});

// Rotate chevron down on click
$("#lang-selector").focus(function() {
  $("#chevron-down").addClass('rotate');
});

$("#lang-selector").blur(function() {
  $("#chevron-down").removeClass('rotate');
});
