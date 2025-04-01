(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    // Навигация с анимацией только при первом визите
    var nav = document.querySelector("nav");

    if (!sessionStorage.getItem("navShown")) {
      nav.classList.add("nav-animated");
      sessionStorage.setItem("navShown", "true");
    }

    // Анимация появления блоков с классом fade-in
    var fadeElems = document.querySelectorAll('.fade-in');
    var observer = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add('show');
        }
      }
    });

    for (var j = 0; j < fadeElems.length; j++) {
      observer.observe(fadeElems[j]);
    }
  });

})();