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
      getStateData(state);
      displayStateData();
      
      //use state retrieved from geolocator to get state data
      function getStateData(state){
          $.ajax({
            url: "https://covidtracking.com/api/v1/states/" + state + "/current.json",
            method: "GET"
          })
            .then(function(response) {
            console.log(response);
            $("#state-name").text(response.state);
            var date = moment(response.date, "YYYYMMDD");
            $(".state-day").text("Updated on: " + date.format("MMM Do YYYY"));
            $(".state-pos").text("Total confirmed Cases: " + response.positive.toLocaleString());
            $(".state-pos-increase").text("Positive Increase: " + response.positiveIncrease.toLocaleString());
            $(".state-hospital").text("Currently Hospitalized: " + response.hospitalizedCurrently.toLocaleString());
            $(".state-recov").text("Cumulative Recovered: " + response.recovered.toLocaleString());
            $(".state-deaths").text("Cumulative Death: " + response.death.toLocaleString());
            });    
      }

      function displayStateData(){
        $(".national-data").css("display","none");
        $(".state-data").css("display","block");
        $(".location-entry").css("display","none");
      }


    });
  })
})