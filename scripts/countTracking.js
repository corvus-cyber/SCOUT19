$(document).ready(function(){
    //Will need an if statement so that it does not run if there is no value in the state search

// function stateAbbr(input){
//   var states = [
//     ['arizona', 'AZ'],
//     ['alabama', 'AL'],
//     ['alaska', 'AK'],
//     ['arkansas', 'AR'],
//     ['california', 'CA'],
//     ['colorado', 'CO'],
//     ['connecticut', 'CT'],
//     ['delaware', 'DE'],
//     ['florida', 'FL'],
//     ['georgia', 'GA'],
//     ['hawaii', 'HI'],
//     ['idaho', 'ID'],
//     ['illinois', 'IL'],
//     ['indiana', 'IN'],
//     ['iowa', 'IA'],
//     ['kansas', 'KS'],
//     ['kentucky', 'KY'],
//     ['louisiana', 'LA'],
//     ['maine', 'ME'],
//     ['maryland', 'MD'],
//     ['massachusetts', 'MA'],
//     ['michigan', 'MI'],
//     ['minnesota', 'MN'],
//     ['mississippi', 'MS'],
//     ['missouri', 'MO'],
//     ['montana', 'MT'],
//     ['nebraska', 'NE'],
//     ['nevada', 'NV'],
//     ['new hampshire', 'NH'],
//     ['new jersey', 'NJ'],
//     ['new mexico', 'NM'],
//     ['new york', 'NY'],
//     ['north carolina', 'NC'],
//     ['north dakota', 'ND'],
//     ['ohio', 'OH'],
//     ['oklahoma', 'OK'],
//     ['oregon', 'OR'],
//     ['pennsylvania', 'PA'],
//     ['rhode island', 'RI'],
//     ['south carolina', 'SC'],
//     ['south dakota', 'SD'],
//     ['tennessee', 'TN'],
//     ['texas', 'TX'],
//     ['utah', 'UT'],
//     ['vermont', 'VT'],
//     ['virginia', 'VA'],
//     ['washington', 'WA'],
//     ['west virginia', 'WV'],
//     ['wisconsin', 'WI'],
//     ['wyoming', 'WY'],
// ];
//   for(i = 0; i < states.length; i++){
//   if(input === states[i][0]){
//       return(states[i][1]);
//   }
// }
// }


  // $("#current-location").click(function(event){
  //   event.preventDefault();
  //   if ($(".validate").val() === "") {
  //     alert("Please enter state initial")
  //     } else {
  //       displayStateData();
  //       // getStateData();
  //     }
  // })

  $("#state-search").click(function(event){
    event.preventDefault();
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

  
    //retrieve national counts
    $.ajax({
      url: "https://covidtracking.com/api/v1/us/current.json",
      method: "GET"
    })
      .then(function(response) {
      console.log(response);
      var date = moment(response[0].date, "YYYYMMDD");
      $(".nat-day").text("Updated on: " + date.format("MMM Do YYYY"));
      $(".nat-pos").text("Total confirmed cases: " + response[0].positive.toLocaleString()); 
      $(".nat-pos-increase").text("Positive Increase: " + response[0].positiveIncrease.toLocaleString());
      $(".nat-hospital").text("Currently Hospitalized: " + response[0].hospitalizedCurrently.toLocaleString());
      $(".recovered").text("Cumulative Recovered: " + response[0].recovered.toLocaleString());
      $(".deaths").text("Cumulative Death: " + response[0].death.toLocaleString());
      });



function getStateData(){
  //retrieve state counts
  if ($(".validate").val() === "") {
    alert("Please enter state initial");
    $(".validate").text("Please enter a state initial");
  }
  else {
    var state = $(".validate").val().toLowerCase();
    // var state = stateAbbr(userInput);
    console.log(state);   
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
}
})  
