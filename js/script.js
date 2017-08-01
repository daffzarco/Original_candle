
// NAVIGATION HAMBURGER
// reference to last opened menu
var $lastOpened = false;

// simply close the last opened menu on document click
$(document).click(function(){
  if($lastOpened){
    $lastOpened.removeClass('open');
  }
});

// simple event delegation
$(document).on('click', '.pulldown-toggle', function(event){

  // jquery wrap the el
  var el = $(event.currentTarget);

  // prevent this from propagating up
  event.preventDefault();
  event.stopPropagation();

  // check for open state
  if(el.hasClass('open')){
    el.removeClass('open');
  }else{
    if($lastOpened){
      $lastOpened.removeClass('open');
    }
    el.addClass('open');
    $lastOpened = el;
  }

});

  // Return to top
$(document).ready(function(){
  $('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
  });
});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    //  loop:true,
     margin:10,
     responsiveClass:true,
     responsive:{
         0:{
             items:1,
             nav:true
         },
         600:{
             items:3,
             nav:false
         },
         1000:{
             items:5,
             nav:false
            //  loop:false
         }
     }
  })
})
