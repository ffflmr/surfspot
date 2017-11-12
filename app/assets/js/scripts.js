/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2017. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {


    function slideThisBaby() {

      var aSlides = Array.from(document.querySelectorAll('.slideshow__item'));
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
