$(document).ready(function(){

  $.ajax({
    url: "https://covidtracking.com/api/v1/states/current.json",
    method: "GET"
  })
  .then(function(response) {
  console.log(response);
    let caseUpDay = (response[0].totalTestResults/response[0].positiveIncrease)
    console.log(caseUpDay)
    console.log(response[0].state)
    console.log(response[0].positiveIncrease)
    console.log(response[0].totalTestResults)
    
    for (let i = 0; i < 56; i++) {
      let stCode = response[i].state
      if (stCode = "DC") {
        
      }
      
    }



  
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






