;(function($) {
    "use strict"; 


         //* Navbar Fixed  
    function navbarFixed(){
        if ( $('.main_header_area').length ){ 
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= 295) {
                    $(".main_header_area").addClass("navbar_fixed");
                } else {
                    $(".main_header_area").removeClass("navbar_fixed");
                }
            });
        };
    };    
        
    //Add OnepageNav / Sidebar
    function onePageFixedNav() {
        if($('body').length){
        // Add scrollspy to 
        $('body').scrollspy({target: ".theme-main-header", offset: 70});   

        // Add smooth scrolling on all links inside the one-page-menu
        $(".one-page-menu li a").on('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1300, function(){
        
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
            }  // End if
        });
        }
    }

        //* swiper js
        var swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            loop: true,
            centeredSlides: true,
            slidesPerView: 3,
            keyboardControl: true,
            mousewheelControl: true,
            coverflow: {
                rotate: 0,
                stretch: 50,
                depth: 100,
                modifier: 1,
                slideShadows : false,
            }
        });

           

        //slick-slider
        $('.item-active').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.img-active'
          });
          $('.img-active').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.item-active',
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
            centerMode: true,
            focusOnSelect: true,
            responsive: [
                
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    nav:false,
                    arrows: false,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    nav:false,
                    arrows: false,
                  }
                }
              ]

          });
       
      
       
    //* Magnificpopup js
    function magnificPopup() {
        if ($('.popup-youtube').length) { 
            //Video Popup
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false, 
                fixedContentPos: false,
            });   
        };
    };

    
    
          function testimonial() {
            $('.testimonial-w').owlCarousel({
                loop:true,
                margin:10,
                dots:false,
                nav:false,
                items:1,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });
          };
          function testimonial2() {
            $('.testimonial_wrap').owlCarousel({
                loop:true,
                margin:10,
                dots:false,
                nav:false,
                items:1,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });
          };
          function clientLogo() {
            $('.client_brand').owlCarousel({
                loop:true,
                margin:10,
                dots:false,
                nav:false,
                items:5,
                responsive:{
                    0:{
                        items:1
                    },
                    300:{
                        items:2
                    },
                    600:{
                        items:3
                    },
                    800:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            });
          };
         // active
            $('.f_box').on('mouseenter', function () {
                $(this).addClass('active').parent().siblings().find('.f_box').removeClass('active');
            })

        //Aos Animation
        function aosAnimate() {
            AOS.init();
        };

        // Scroll to top
    function scrollToTop() {
        if ($('.scroll-top').length) {  
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 200) {
                    $('.scroll-top').fadeIn();
                } else {
                    $('.scroll-top').fadeOut();
                }
            }); 
    //Click event to scroll to top
         $('.scroll-top').on('click', function () {
            $('html, body').animate({
                    scrollTop: 0
                }, 1000);
                return false;
            });
        }
    }
    
        // Preloader JS
        function preloader(){
            if( $('#preloader').length ){ 
                $(window).on('load', function() {
                    $('#preloader').fadeOut();
                    $('#preloader').delay(100).fadeOut('slow');  
                })   
            }
        }
            

    
    /*Function Calls*/
    new WOW().init();
    navbarFixed();
    onePageFixedNav();
    magnificPopup();
    testimonial();
    testimonial2();
    clientLogo();
    aosAnimate();
    scrollToTop();
    preloader();

    
})(jQuery);