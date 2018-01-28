(function ($, window, document) {

  'use strict';

  function slideThisBaby () {

    var aSlides = Array.prototype.slice.call(document.querySelectorAll('.slideshow__item'));
    var iLength = aSlides.length;
    var slideIndex = 0;

    setInterval( function(){

        aSlides[slideIndex].style.display = "none";

        if (slideIndex+1 >= iLength) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        // slideIndex is now the next index
        aSlides[slideIndex].style.display = "block";

        // sliderIndex = (slideIndex+1 >= iLenght) ? 0 : sliderIndex + 1;
        // (condition) ? ResultIf : resultElse;

    }, 400);

  }

  $(function () {

    slideThisBaby();

  });




})(jQuery, window, document);
