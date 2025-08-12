window.onload = function() {

// selector
var menu = document.querySelector(".hamburger");
var cierre = document.getElementById("cerrar");

// method
function toggleMenu (event) {
  this.classList.toggle("is-active");
  document.querySelector(".menu").classList.toggle("is_active");
}

// event
menu.addEventListener("click", toggleMenu, false);
cierre.addEventListener("click", toggleMenu, false);




}


