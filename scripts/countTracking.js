$(document).ready(function(){
  
  //retrieve national counts
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
    $(".deaths").text("Cumulative Death: " + response[0].death);
    });

  //show state panel when "search" or "use current location" is clicked

  
  $("#state-search").click(function(){
    ////////cannot be blank input
    var state = $(".validate").val();
    console.log(state);
    $.ajax({
      url: "https://covidtracking.com/api/v1/states/" + state + "/current.json",
      method: "GET"
    })
      .then(function(response) {
      console.log(response);
      $(".state-day").text("Updated At:" + response.checkTimeEt);
      $(".state-pos").text("Total confirmed cases: " + response.positive);
      $(".state-hospital").text("Currently Hospitalized: " + response.hospitalizedCurrently);
      $(".state-recov").text("Cumulative Recovered: " + response.recovered);
      $(".state-deaths").text("Cumulative Death" + response.recovered);
      });  
  })

  })  