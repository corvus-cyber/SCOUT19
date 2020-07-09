$(document).ready(function(){

  //event listener for the navbar, required by materialize 
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});


$('#map').usmap({
    // The click action
    click: function(event, data) {
      $('#clicked-state')
        .text('You clicked: '+data.name)
        .parent().effect('highlight', {color: '#C7F464'}, 2000);
    }
  });


  if ($(window).width() > 500){
    console.log("hello", $(window).width())
   $("#boxmap").removeClass("interactive-map").addClass("large-screen-map");
    console.log($("#map").html())
  }
})
 

