$(document).ready(function(){
    //Will need an if statement so that it does not run if there is no value in the state search

  $("#current-location").click(function(){
    if ($(".validate").val() === "") {
      alert("Please enter state initial")
      } else {
        displayStateData();
        getStateData();
      }
  })

  $("#state-search").click(function(){
    if ($(".validate").val() === "") {
      alert("Please enter state initial")
      } else {
        displayStateData();
        getStateData();
      }
  })

  function displayStateData(){
    $(".national-data").css("display","none");
    $(".state-data").css("display","block");
    $(".location-entry").css("display","none");
  }

function getStateData(){
        ////////cannot be blank input   
  if ($(".validate").val() === "") {
    alert("Please enter state initial");
    $(".validate").text("Please enter a state initial");
  }
  else {
    var state = $(".validate").val();
    console.log(state);
    $.ajax({
      url: "https://covidtracking.com/api/v1/states/" + state + "/current.json",
      method: "GET"
    })
      .then(function(response) {
      console.log(response);
      $("#state-name").text(response.state);
      $(".state-day").text("Updated at: " + response.checkTimeEt);
      $(".state-pos").text("Total confirmed Cases: " + response.positive);
      $(".state-hospital").text("Currently Hospitalized: " + response.hospitalizedCurrently);
      $(".state-recov").text("Cumulative Recovered: " + response.recovered);
      $(".state-deaths").text("Cumulative Death: " + response.recovered);
      });    
  }     
}

  

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


  

  })  