$('#owl-one').owlCarousel({
    loop:true,
    margin:0,
    autoplay:false,
    autoplayTimeout:4000,
    nav:true,
    lazyLoad: true,
    responsive:{
      0:{
        items:1
      }
    }
});

$('#owl-two').owlCarousel({
  loop:true,
  autoplay:false,
  autoplayTimeout:4000,
  margin: 30,
  lazyLoad: true,
  autoplayHoverPause:true,
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
      nav:false
    },
    700:{
      items:2,
      nav:false
    },
    900:{
      items:3,
      nav:true,
      loop:true
    }
  }
});

$('.customNextBtn').click(function () {
  $('#owl-two').trigger('next.owl.carousel');
}); 
$('.customPreviousBtn').click(function () {
  $('#owl-two').trigger('prev.owl.carousel', [300]);
});