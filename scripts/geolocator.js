$(document).ready(function() {
    
    
  

    $('#current-location').click(function(event){
    event.preventDefault();
    var queryURL = "https://api.ipgeolocation.io/ipgeo?apiKey=8cbff660df8f427d8169bea14803ed60";
    
    $.ajax({
      url: queryURL,
      method: "GET"

    }).then(function(response) {
      console.log(response);
      var state = response.state_prov.substring(0,2).toLowerCase();
      console.log(state)
      
    });
  })
})