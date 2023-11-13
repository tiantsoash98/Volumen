import $ from "jquery";

function headerScroll()
{
  var targetElement = $('.header');
  let currentScroll = 0;

  $(window).on('scroll',function() {
    
    var starthidePosition = targetElement.position().top + $(this).height()/2;

    // hide navbar on scroll
    if($(this).scrollTop() > starthidePosition) { 
      if(currentScroll < $(this).scrollTop()){
          targetElement.addClass('header--scrolling');
      }
      else{
          targetElement.removeClass('header--scrolling');
      }
    }

    currentScroll = $(this).scrollTop();
  });
}

export default headerScroll
