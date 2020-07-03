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


  $("#state-search").click(function(){
    //Will need an if statement so that it does not run if there is no value in the state search
    $(".national-data").removeClass("evaporate");
    $(".state-data").addClass("evaporate");
    $(".location-entry").addClass(".evaporate");
  })

  $("#current-location").click(function(){
    $(".national-data").removeClass("evaporate");
    $(".state-data").addClass("evaporate");
    $(".location-entry").addClass(".evaporate");
  })
