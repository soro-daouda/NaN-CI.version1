/*!
 * © Kay Donald
 * Devs front
 * Copyright Not A Number and his devs

                      .
                     d8b
                   d88888b
                 d888Y Y888b
               d888Y  .  Y888b
             d888Y   d8b   Y888b
           d888Y   d88888b   Y888b
            ""   d888Y Y888b   ""
               d888Y  .  Y888b
                ""   d8b   ""
                   d88888b
   8888b   88888     Y8b     8888b   88888
    8888b   888       '       8888b   888
    88888b  888               88888b  888
    888Y88b 888    88888b.    888Y88b 888
    888 Y88b888    "   "88b   888 Y88b888
    888  Y88888   .d8888888   888  Y88888
    888   Y8888   888   888   888   Y8888
   88888   Y888   "Y88888"88 88888   Y888 
 *---------------------------------------------
 *
 * MAIN.JS
 *Page de scripts
 *
 */

 /* menu ********************************************* */
 
  $("#rideau").show().delay(8000).fadeOut();
    $("#indicationBox").show().delay(8000).fadeOut(); 

 

 var isClick;

$('#menu-button').click(function(){
  isClick = !isClick;
  $('#main-content').toggle();
  $('#menu-field').toggle();

  if(isClick){
    $('#menu-button').css('background', "#fff");
    $("#menu-icon").attr("src","ressources/images/svg/close.svg");
  }else{
    $('#menu-button').css('background', "#8489f0");
    $("#menu-icon").attr("src","ressources/images/svg/menu.svg");
  }

});


/* typed js ********************************************* */

$(function(){
  $(".typed").typed({
      strings: ["Cliquez sur ce élément pour accéder au menu ⤵"],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 25,
      // time before typing starts
      startDelay: 1200,
      // backspacing speed
      backSpeed: 20,
      // time before backspacing
      backDelay: 500,
      // loop
      loop: false,
      // false = infinite
      loopCount: 5,
      // show cursor
      showCursor: false,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
      // call when done callback function
      callback: function() {},
      // starting callback function before each string
      preStringTyped: function() {},
      //callback for every typed string
      onStringTyped: function() {},
      // callback for reset
      resetCallback: function() {}
  });


});


/* accordeon ********************************************* */

  var accordion = (function(){
  
  var $accordion = $('.js-accordion');
  var $accordion_header = $accordion.find('.js-accordion-header');
  var $accordion_item = $('.js-accordion-item');
  
  // default settings 
  var settings = {
      // animation speed
      speed: 400,
      
      // close all other accordion items if true
      oneOpen: false
  };
      
  return {
      // pass configurable object literal
      init: function($settings) {
      $accordion_header.on('click', function() {
          accordion.toggle($(this));
      });
      
      $.extend(settings, $settings); 
      
      // ensure only one accordion is active if oneOpen is true
      if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
          $('.js-accordion-item.active:not(:first)').removeClass('active');
      }
      
      // reveal the active accordion bodies
      $('.js-accordion-item.active').find('> .js-accordion-body').show();
      },
      toggle: function($this) {
              
      if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
          $this.closest('.js-accordion')
              .find('> .js-accordion-item') 
              .removeClass('active')
              .find('.js-accordion-body')
              .slideUp()
      }
      
      // show/hide the clicked accordion item
      $this.closest('.js-accordion-item').toggleClass('active');
      $this.next().stop().slideToggle(settings.speed);
      }
  }
  })();

  $(document).ready(function(){
  accordion.init({ speed: 300, oneOpen: true });
  });