$(document).ready(function(){

  $.ajax({
    url: "https://covidtracking.com/api/v1/states/current.json",
    method: "GET"
  })
  .then(function(response) {
  console.log(response);
   });



  $('#map').usmap({
    // The click action
    click: function(event, data) {
      $('#clicked-state')
        .text('You clicked: '+data.name)

      console.log(data.name)
    },
      
    


    stateSpecificStyles: {
      'MD': {fill: 'yellow'},
      'VA': {fill: 'teal'}
    } 
  
  
  
  
  
  
  
  
    });
})






