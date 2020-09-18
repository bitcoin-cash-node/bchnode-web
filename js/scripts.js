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
  if ($(this).hasClass('active') && !$(this).hasClass('btn-tag-toggle-all')) {
    $(this).removeClass('active');
  } else {
    $(this).addClass('active');
  }
  if ($(this).hasClass('btn-tag-toggle-all')) {
    $(this).siblings().removeClass('active');
  } else {
    if (!$('.btn-tag-toggle.active').length) {
      $('.btn-tag-toggle-all').addClass('active').focus();
    } else {
      $('.btn-tag-toggle-all').removeClass('active');
    }
  }
  var showError = 1;
  if ($('.btn-tag-toggle-all').hasClass('active')) {
    showError = 0;
    $('.collapse-tag').collapse('show');
  } else {
    var tagActive = "";
    $('[data-tag-target]').each(function() {
      if ($(this).hasClass('active')) {
        tagActive = tagActive.concat('.'+$(this).data('tag-target'));
      }
    });
    $('.collapse-tag').each(function() {
      if ($(this).is(tagActive)) {
        showError = 0;
        $(this).collapse('show');
      } else {
        $(this).collapse('hide');
      }
    });
  }
  if (showError) {
    $('.collapse-tag-error').collapse('show');
  } else {
    $('.collapse-tag-error').collapse('hide');
  }
});
