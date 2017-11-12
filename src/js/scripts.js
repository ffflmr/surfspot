(function ($, window, document, undefined) {

  'use strict';

  $(function () {


    function slideThisBaby() {

      var slides = document.querySelectorAll('.slideshow__item');
      var aSlides = Array.apply(null, slides);
      var totalSlides = aSlides.length;

      for (var i = 0; i < totalSlides; i++) {
        aSlides[i].style.display = 'none';
      }
      slideIndex++;
      if (slideIndex > totalSlides) {
        slideIndex = 1
      }
       aSlides[slideIndex-1].style.display = 'block';
       setTimeout(slideThisBaby, 400); // Change image every 0,4 seconds



    }

    var slideIndex = 0;
    slideThisBaby();

  });

})(jQuery, window, document);
