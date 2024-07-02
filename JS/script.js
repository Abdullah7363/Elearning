(function ($){
  "use strict";

  var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();

  
  $(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[769,1],
        navigation:false,
        autoPlay:true
        

    });
});


// Team Section
$(document).ready(function(){
  $("#Team").owlCarousel({
      items:4,
      itemsDesktop:[1000,1],
      itemsDesktopSmall:[979,1],
      itemsTablet:[769,1],
      navigation:false,
      pagination:true,
      autoplay:true,
      nav:true,
      navText:[
       ' <img src="../img/right-arrow.png" alt="">',
       ' <img src="../img/right-arrow.png" alt="">'


      ]
      
      

  });
});


// init AOS animation
AOS.init();

}
)(jQuery);




