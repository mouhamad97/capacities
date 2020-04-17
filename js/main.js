(function($) {
  "use strict";

  /*--------------------------
  preloader
  ---------------------------- */
  $(window).on('load', function() {
    var pre_loader = $('#preloader');
    pre_loader.fadeOut('slow', function() {
      $(this).remove();
    });
  });

  /*---------------------
   TOP Menu Stick
  --------------------- */
  var s = $("#sticker");
  var pos = s.position();
  $(window).on('scroll', function() {
    var windowpos = $(window).scrollTop() > 300;
    if (windowpos > pos.top) {
      s.addClass("stick");
    } else {
      s.removeClass("stick");
    }
  });

  /*----------------------------
   Navbar nav
  ------------------------------ */
  var main_menu = $(".main-menu ul.navbar-nav li ");
  main_menu.on('click', function() {
    main_menu.removeClass("active");
    $(this).addClass("active");
  });

  /*----------------------------
   wow js active
  ------------------------------ */
  new WOW().init();

  $(".navbar-collapse a:not(.dropdown-toggle)").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  //---------------------------------------------
  //Nivo slider
  //---------------------------------------------
  $('#ensign-nivoslider').nivoSlider({
    effect: 'random',
    slices: 15,
    boxCols: 12,
    boxRows: 8,
    animSpeed: 500,
    pauseTime: 5000,
    startSlide: 0,
    directionNav: true,
    controlNavThumbs: false,
    pauseOnHover: true,
    manualAdvance: false,
  });

  /*----------------------------
   Scrollspy js
  ------------------------------ */
  var Body = $('body');
  Body.scrollspy({
    target: '.navbar-collapse',
    offset: 80
  });

  /*---------------------
    Venobox
  --------------------- */
  var veno_box = $('.venobox');
  veno_box.venobox();

  /*----------------------------
  Page Scroll
  ------------------------------ */
  var page_scroll = $('a.page-scroll');
  page_scroll.on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 55
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  /*--------------------------
    Back to top button
  ---------------------------- */
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  /*----------------------------
   Parallax
  ------------------------------ */
  var well_lax = $('.wellcome-area');
  well_lax.parallax("50%", 0.4);
  var well_text = $('.wellcome-text');
  well_text.parallax("50%", 0.6);

  /*--------------------------
   collapse
  ---------------------------- */
  var panel_test = $('.panel-heading a');
  panel_test.on('click', function() {
    panel_test.removeClass('active');
    $(this).addClass('active');
  });

  /*---------------------
   Testimonial carousel
  ---------------------*/
  var test_carousel = $('.testimonial-carousel');
  test_carousel.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  /*----------------------------
   isotope active
  ------------------------------ */
  // portfolio start
  $(window).on("load", function() {
    var $container = $('.awesome-project-content');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    var pro_menu = $('.project-menu li a');
    pro_menu.on("click", function() {
      var pro_menu_active = $('.project-menu li a.active');
      pro_menu_active.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });

  });
  //portfolio end

  /*---------------------
   Circular Bars - Knob
--------------------- */
  if (typeof($.fn.knob) != 'undefined') {
    var knob_tex = $('.knob');
    knob_tex.each(function() {
      var $this = $(this),
        knobVal = $this.attr('data-rel');

      $this.knob({
        'draw': function() {
          $(this.i).val(this.cv + '%')
        }
      });

      $this.appear(function() {
        $({
          value: 0
        }).animate({
          value: knobVal
        }, {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.val(Math.ceil(this.value)).trigger('change');
          }
        });
      }, {
        accX: 0,
        accY: -150
      });
    });
  }

})(jQuery);



$('.client-carousel').owlCarousel({
  loop: true,
  margin:15,
  autoplay: true,
  autoplaySpeed:1000,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 4
    },
    900: {
      items: 6
    }
  }
});




//earth 


//earth 


function initialize() {
  var earth = new WE.map('earth_div');
  WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '© OpenStreetMap contributors'
  }).addTo(earth);
  var before = null;
  requestAnimationFrame(function animate(now) {
      var c = earth.getPosition();
      var elapsed = before? now - before: 0;
      before = now;
      earth.setCenter([c[0], c[1] + 0.1*(elapsed/30)]);
      requestAnimationFrame(animate);
  });
  var marker = WE.marker([51.5, -0.09]).addTo(earth);
  
  //tripoli 
  var marker = WE.marker([34.4346 , 35.8362]).addTo(earth);
  marker.bindPopup("<b>capacities here</b><br>Tripoli,lebanon.<br /><span style='font-size:10px;color:#999'>Tip: Another popup is hidden in Cairo..</span>", {maxWidth: 150, closeButton: true}).openPopup();
  
  //oman
  var marker = WE.marker([21.4735 , 55.9754]).addTo(earth);
  var marker = WE.marker([31.7917 , 7.0926]).addTo(earth);
  var marker = WE.marker([51.9194 , 19.1451]).addTo(earth);
  
  var marker = WE.marker([0.1339 , 27.8493]).addTo(earth);
  var marker = WE.marker([46.2276 , 2.2137]).addTo(earth);
  var marker = WE.marker([46.2276 , 2.2137]).addTo(earth);

  var marker2 = WE.marker([30.058056, 31.228889]).addTo(earth);
  marker2.bindPopup("<b>Cairo</b><br>Yay, you found me!", {maxWidth: 120, closeButton: false});

  var markerCustom = WE.marker([50, -9], '/img/logo-webglearth-white-100.png', 100, 24).addTo(earth);

  
}


//countreis earth fonctions

$( "#us" ).click( function () {

  controller.addData(usData);
  controller.switchCountry("LB");

} );

$( "#uk" ).click( function () {

  controller.addData(ukData);
  controller.switchCountry("LB");

} );

$( "#france" ).click( function () {

  controller.addData(franceData);
  controller.switchCountry("LB");

} );

$( "#jordan" ).click( function () {

  controller.addData(jordanData);
  controller.switchCountry("LB");

} );

$( "#egypte" ).click( function () {

  controller.addData(egypteData);
  controller.switchCountry("LB");

} );

$( "#zambia" ).click( function () {

  controller.addData(zambiaData);
  controller.switchCountry("LB");

} );
$( "#canada" ).click( function () {

  controller.addData(canadaData);
  controller.switchCountry("LB");

} );
$( "#iraq" ).click( function () {

  controller.addData(iraqData);
  controller.switchCountry("LB");

} );
$( "#saudi" ).click( function () {

  controller.addData(saudiData);
  controller.switchCountry("LB");

} );
$( "#kuwait" ).click( function () {

  controller.addData(kuwaitData);
  controller.switchCountry("LB");

} );
$( "#emirate" ).click( function () {

  controller.addData(emirateData);
  controller.switchCountry("LB");

} );
$( "#oman" ).click( function () {

  controller.addData(omanData);
  controller.switchCountry("LB");

} );
$( "#polanda" ).click( function () {

  controller.addData(polandaData);
  controller.switchCountry("LB");

} );
$( "#australia" ).click( function () {

  controller.addData(australiaData);
  controller.switchCountry("LB");

} );

  controller.configure({
      color: {
              selected:"#1d2bf0"
      }
});


var usData = [{e:"LB",i:"US",v:7728212}];
    var ukData = [{e:"LB",i:"GB",v:185693},];
    var franceData = [{e:"LB",i:"FR",v:2741597}];
    var jordanData = [{e:"LB",i:"JO",v:7603526}];
    var egypteData = [{e:"LB",i:"EG",v:7612349}];
    var zambiaData = [{e:"LB",i:"ZM",v:3438115}];
    var canadaData = [{e:"LB",i:"CA",v:2207232}] ;
    var iraqData   = [{e:"LB",i:"IQ",v:6595254}];
    var saudiData  = [{e:"LB",i:"SA",v:6042229}];
    var kuwaitData  = [{e:"LB",i:"KW",v:1919346}];
    var emirateData       = [{e:"LB",i:"AE",v:2081163}];
    var omanData   = [{e:"LB",i:"OM",v:2483274}];
    var polandaData = [{e:"LB",i:"PL",v:6435187}];
    var australiaData = [{e:"LB",i:"AU",v:4773199}];



    
  




//button get down 

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

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
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});