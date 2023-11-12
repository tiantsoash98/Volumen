import $ from "jquery";

function headerScroll()
{
    let currentScroll = 0;
  
    $(window).on('scroll',function() {
      var targetElement = $('.header');
      var starthidePosition = targetElement.position().top + $(this).height();

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
