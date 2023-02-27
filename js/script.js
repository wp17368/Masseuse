"use strict";
let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");
let facebookBtn = document.querySelector("#facebook-btn");

function toggleMenu() {
  navbar.classList.toggle("active");
}

menuBtn.addEventListener("click", toggleMenu);
window.addEventListener("scroll", navbar.classList.remove("active"));
