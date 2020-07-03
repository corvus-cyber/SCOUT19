$(document).ready(function(){
    //all states need to be lowercase, need to change user input into lowercase later
    $("#state-search").click(function(){
      ////////cannot be blank input
      // var state = $(".validate").val();
      // console.log(state);
      getStateData();
    })

    $("#current-location").click(function(){
      // var state = $(".validate").val();
      // console.log(state);
      getStateData();
    })
  
    
    function getStateData(){
      $.ajax({
        url: "https://covidtracking.com/api/v1/states/ut/current.json",
        method: "GET"
      })
        .then(function(response) {
        console.log(response);
        $("#state-name").text(response.state);
        $(".state-day").text("Updated at: " + response.checkTimeEt);
        $(".state-pos").text("Total confirmed cases: " + response.positive);
        $(".state-hospital").text("Currently Hospitalized: " + response.hospitalizedCurrently);
        $(".state-recov").text("Cumulative Recovered: " + response.recovered);
        $(".state-deaths").text("Cumulative Death: " + response.recovered);
        });  
    }
    
  $.ajax({
    url: "https://covidtracking.com/api/v1/us/current.json",
    method: "GET"
  })
    .then(function(response) {
    console.log(response);
    $(".nat-day").text("As of: " + response[0].date);
    $(".nat-pos").text("Total confirmed cases: " + response[0].positive); 
    $(".nat-hospital").text("Currently Hospitalized: " + response[0].hospitalizedCurrently);
    $(".recovered").text("Cumulative Recovered: " + response[0].recovered);
    $(".deaths").text("Cumulative Deathes: " + response[0].death);
    });


  })  