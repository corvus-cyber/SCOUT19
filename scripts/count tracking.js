$(document).ready(function(){
  
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