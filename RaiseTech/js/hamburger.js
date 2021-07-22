const hamburger = document.querySelector(".js-hamburger");
const nav = document.getElementById("nav");
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("is-open");
  // if(nav.classList.contains("is-open")){
  //   nav.classList.remove("is-open");
  // } else {
  //   nav.classList.add("is-open");
  // }
});



// jQuery(function($) {
//     $( ".js-humburger" ).on( "click", function() {
//         $(this).toggleClass("is-open");
//         $(".p-gmenu--bt").toggleClass("is-open");
//         $("body").toggleClass("is-open");
//     } )
// } );