$(document).ready(function(){



  $(".banner-carousel").owlCarousel({
  loop:true,
  autoplay:true,
  dots:false,
  mouseDrag:false,
  smartSpeed: 500,
  autoplayTimeout:7000,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  responsive:{
     0:{
        items: 1
     },
     768:{
        items: 1
     },
     769:{
       items: 1
    }
  }
});

var typed = new Typed('.type',{
  strings:[
    'I am Shahriar Sohag',
    'I am a web designer',
    'and wordPress Developer'
  ],
  smartBackspace: true,
  typeSpeed: 80,
  backSpeed: 30,
  backDelay:3000,
  loop: true,
  naturalHeight: 900
});

let $btns = $('.p-buttons a');
$btns.click(function(e){
   $('.p-buttons a').removeClass('active');
   e.target.classList.add('active');

   let selector = $(e.target).attr('data-filter');
   $('#portfolio .grid').isotope({
      filter: selector
   });
   return false;
});

$('.p-buttons #btn1').trigger('click');


//fancybox

$('.fancybox').fancybox({
  mouseWheel: false,
});


//   AOS.init();

var siteScroll = function() {
  $(window).on('scroll',function(){
    if($(window).scrollTop()>110){
        $('#navbar').addClass('nav-white');
    }
    else{
        $('#navbar').removeClass('nav-white');
    }
  });
};
siteScroll();

$('.num').countUp({
  delay: 70,
  time: 3000,
});


$('.carousel-testimonial').owlCarousel({
  autoplay: true,
  center: true,
  loop: true,
  items:1,
  stagePadding: 0,
  smartSpeed:1000,
  dots:false,
  nav: false,
  navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
  responsive:{
    0:{
      items: 1,
      margin: 10
    },
    768:{
      items: 2,
      center:false
    },
    1000:{
      items: 3
    }
  }
});



var offsetTop = $(".my-skills").offset().top;
$(window).scroll(function() {
  var height = $(window).height();
  if ($(window).scrollTop() + height > offsetTop) {
    jQuery(".skill").each(function() {
      jQuery(this).find(".skill-bar").animate(
        {
          width: jQuery(this).attr("data-percentage")
        },
        2000
      );
      jQuery(this).find(".progress-number").animate(
        {
          left: jQuery(this).attr("data-percentage")
        },2000
      );
    });
  }
});



});