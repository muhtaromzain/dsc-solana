/*!
 * Dark Mode Switch v1.0.1 (https://github.com/coliff/dark-mode-switch)
 * Copyright 2021 C.Oliff
 * Licensed under MIT (https://github.com/coliff/dark-mode-switch/blob/main/LICENSE)
 */

var darkSwitch = document.getElementById("darkSwitch");
window.addEventListener("load", function () {
  if (darkSwitch) {
    initTheme();
    darkSwitch.addEventListener("change", function () {
      resetTheme();
    });
  }
});

/**
 * Summary: function that adds or removes the attribute 'data-theme' depending if
 * the switch is 'on' or 'off'.
 *
 * Description: initTheme is a function that uses localStorage from JavaScript DOM,
 * to store the value of the HTML switch. If the switch was already switched to
 * 'on' it will set an HTML attribute to the body named: 'data-theme' to a 'dark'
 * value. If it is the first time opening the page, or if the switch was off the
 * 'data-theme' attribute will not be set.
 * @return {void}
 */
function initTheme() {
  var darkThemeSelected =
    localStorage.getItem("darkSwitch") !== null &&
    localStorage.getItem("darkSwitch") === "dark";
  darkSwitch.checked = darkThemeSelected;
   if (darkThemeSelected) {
     document.body.setAttribute("data-theme", "dark")
     document.getElementById("tokenomics-img").src = "./images/pie.png";
     $(".nav-link").addClass("nav-link-dark");
     $(".navbar").addClass("navbar-dsc-dark");
     $(".timeline").addClass("timeline-dark");
     $(".text-footer").addClass("text-footer-dark");
   }
   else {
     document.body.removeAttribute("data-theme");
     document.getElementById("tokenomics-img").src = "./images/pie1.png";
     $(".nav-link").removeClass("nav-link-dark");
     $(".navbar").removeClass("navbar-dsc-dark");
     $(".timeline").removeClass("timeline-dark");
     $(".text-footer").removeClass("text-footer-dark");
   }
}

/**
 * Summary: resetTheme checks if the switch is 'on' or 'off' and if it is toggled
 * on it will set the HTML attribute 'data-theme' to dark so the dark-theme CSS is
 * applied.
 * @return {void}
 */
function resetTheme() {
  if (darkSwitch.checked) {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("darkSwitch", "dark");
    document.getElementById("tokenomics-img").src = "./images/pie.png";
    $('.nav-link').addClass('nav-link-dark');
    $('.navbar').addClass('navbar-dsc-dark');
    $('.timeline').addClass('timeline-dark');
    $(".text-footer").addClass("text-footer-dark");
  } else {
    document.body.removeAttribute("data-theme");
    localStorage.removeItem("darkSwitch");
    document.getElementById("tokenomics-img").src = "./images/pie1.png";
    $('.nav-link').removeClass('nav-link-dark');
    $('.navbar').removeClass('navbar-dsc-dark');
    $(".timeline").removeClass("timeline-dark");
    $(".text-footer").removeClass("text-footer-dark");
  }
}
