//event listener for the navbar, required by materialize 
// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.sidenav');
//   var instances = M.Sidenav.init(elems, options);
// });
$(document).ready(function(){
  if ($(window).width() > 1000){
    console.log("hello", $(window).width())
   $("#boxmap").removeClass("interactive-map").addClass("large-screen-map");

    console.log($("#map").html())
  }
})
 

