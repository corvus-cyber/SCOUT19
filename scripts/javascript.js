//event listener for the navbar, required by materialize 
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

if ($(window).width() > 1000){
  $(".col .s12 .m12 .l7").addClass("interactive-map-large")
 }
 

