(function($) {
   
    

    
    //Accordion Box
    if($('.accordion-box').length){
        $(".accordion-box").on('click', '.acc-btn', function() {
            
            var outerBox = $(this).parents('.accordion-box');
            var target = $(this).parents('.accordion');
            
            if($(this).hasClass('active')!==true){
                $(outerBox).find('.accordion .acc-btn').removeClass('active');
            }
            
            if ($(this).next('.acc-content').is(':visible')){
                return false;
            }else{
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300);    
            }
        }); 
    }
    //filter container mixitup

 
if($('.filtr-container').length){
        $('.filtr-container').mixItUp({});
    }

    //client carousel
     $('.our-client-active').owlCarousel({
            loop: true,
        center: true,
        items: 3,
        margin: 30,
        autoplay: true,
        dots:true,
    nav:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 4
            }
        }
    }); 

    

})(window.jQuery);
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue nextPrime;
    }

    console.log( i ); // a prime
  }
}
showPrimes(22);