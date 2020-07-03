$(document).ready(function(){

let stateGrades = [

]

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
    module.exports = require('./lib/point2place')
})






