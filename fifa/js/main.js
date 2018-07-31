$(document).ready(function(){
  $(".menu_btn a").click(function(){
    $(".main_menu").toggleClass("open");
  });
  $("input[name='vianet_user']").click(function(){
     $("input[value='no']").removeClass('className');
     $(".vianet_userid").addClass('className');
  });
  $top_bar=$(".top_header").outerHeight();
  $bottom_banner=$(".bottom_banner").outerHeight();
  $leaderboard_header=$(".leaderboard_header").outerHeight();
  $(".predict_table").css({ 'height': 'calc(100vh - ' +( $top_bar + $bottom_banner + 30 ) + 'px)' , 'top':($top_bar + 15 ) + 'px'  });
  $(".leaderboard").css({ 'height': 'calc(100% - ' + $leaderboard_header + 'px)' , 'top':$leaderboard_header + 'px'  });
  $(".main_menu").css({ 'height': 'calc(100vh - ' +( $top_bar + $bottom_banner ) + 'px)' , 'top':$top_bar + 'px'  });


});
var wow = new WOW(
{
  boxClass:     'wow',      // animated element css class (default is wow)
  animateClass: 'animated', // animation css class (default is animated)
  offset:       0,          // distance to the element when triggering the animation (default is 0)
  mobile:       true,       // trigger animations on mobile devices (default is true)
  live:         true,       // act on asynchronously loaded content (default is true)
  callback:     function(box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null // optional scroll container selector, otherwise use window
}
);
wow.init();
