// scripts.js

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

// newsroom tags
$('.btn-tag-toggle').click(function() {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  if ($(this).hasClass('btn-tag-toggle-all')) {
    $('.collapse-tag').collapse('show');
  } else {
    $('.collapse-tag:not(.'+$(this).data('tag-target')+')').collapse('hide');
    $('.'+$(this).data('tag-target')).collapse('show');
  }
});