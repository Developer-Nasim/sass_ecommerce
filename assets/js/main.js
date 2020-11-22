(function($) {
  "use strict";

  // product
  $("a.productSiteBar-active").click(function(){
    $('.productBar').toggleClass('product-bar-active')
  }); 

  $("a.productSiteBar-active").click(function(){
    $('.overlay').toggleClass('overlay_product')
  });
  
  $("a.productSiteBar-close").click(function(){
    $('.productBar').toggleClass('product-bar-close')
  });
  $("a.productSiteBar-close").click(function(){
    $('.overlay').toggleClass('overlay_hide')
  });

 
  // header-menu
  $("a.menu-active").click(function(){
    $('.siteBar').toggleClass('site-bar-active')
  })
   

  // headerTwo-menu
  $("a.bar-icon").click(function(){
    $('.h-twoActions').toggleClass('header-active')
  });   
  $("a.bar-icon").click(function(){
    $('a.bar-icon span').toggleClass('humbarger')
  });  

  $("a.bar-icon").click(function(){
    $('.overlay-header').toggleClass('headoverlay-active')
  });


  // nice-select
  $('select').niceSelect();
 
  // Nice-Number js
  $('input[type="number"]').niceNumber();

  
  // mainSlider  
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }); 
 
  var swiper = new Swiper('.product-slider', {
    slidesPerView: 4,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2, 
      },
      768: {
        slidesPerView: 2, 
      },
      992: {
        slidesPerView: 4, 
      }, 
    },
  }); 
  // owlCarousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });

  /* magnificPopup img view */
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe"
  });

  // counter
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  // isotop
  $(".grid").imagesLoaded(function() {
    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-item"
      }
    });

    // filter items on button click
    $(".portfolio-menu").on("click", "button", function() {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $(".portfolio-menu button").on("click", function(event) {
      $(this)
        .siblings(".active")
        .removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  }); 


  
})(jQuery);
