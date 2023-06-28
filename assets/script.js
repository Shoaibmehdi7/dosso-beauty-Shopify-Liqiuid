(function ($) {
$(document).ready(function() {
  $(".second-image-show").each(function() {
    var originalImage = $(this).attr("src");
    var secondImage = $(this).attr("data-second-image");

    if (secondImage) {
      $(this).on("mouseover", function() {
        $(this).attr("src", secondImage);
      });

      $(this).on("mouseout", function() {
        $(this).attr("src", originalImage);
      });
    }
  });
});
  $('.testimonial-carousel').owlCarousel({
          loop:false,
          margin:10,
          nav:true,
          dots:false,
          responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2.5
        }
    }
})
  $('.logo-carousel').owlCarousel({
          loop:true,
          margin:10,
          nav:false,
          autoplay:true,
          autoplayTimeout:3000,
          dots:false,
          responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (isSafari) {
    $('.brainder-carousel').owlCarousel({
          loop:false,
          margin:10,
          nav:false,
          autoplay:true,
          autoplayTimeout:3500,
          dots:false,
          responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5.5
        }
    }
})
  }
  else{
  $('.brainder-carousel').owlCarousel({
          loop:true,
          margin:10,
          nav:false,
          autoplay:true,
          autoplayTimeout:3500,
          dots:false,
          responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5.5
        }
    }
})
    }
  $('.social-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      autoplay:true,
      autoplayTimeout:2000,
      dots:false,
      responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:5.5
    }
}
})
  $('.side-carousel').owlCarousel({
          loop:false,
          nav:true,
          dots:false,
          items:1
})
})(jQuery); 
