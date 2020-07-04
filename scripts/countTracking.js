$(document).ready(function(){
<<<<<<< HEAD
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
=======
    //Will need an if statement so that it does not run if there is no value in the state search




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
      // console.log(response);
      var date = moment(response[0].date, "YYYYMMDD");
      $(".nat-day").text("Updated on: " + date.format("MMM Do YYYY"));
      $(".nat-pos").text("Total confirmed cases: " + response[0].positive.toLocaleString()); 
      $(".nat-pos-increase").text("Positive Increase: " + response[0].positiveIncrease.toLocaleString());
      $(".nat-hospital").text("Currently Hospitalized: " + response[0].hospitalizedCurrently.toLocaleString());
      $(".recovered").text("Cumulative Recovered: " + response[0].recovered.toLocaleString());
      $(".deaths").text("Cumulative Death: " + response[0].death.toLocaleString());
      });



      //This function changes spelled out state names to state abbreviation
        function convert_state(name, to) {
          var name = name.toUpperCase();
          var states = new Array(                         {'name':'Alabama', 'abbrev':'AL'},          {'name':'Alaska', 'abbrev':'AK'},
              {'name':'Arizona', 'abbrev':'AZ'},          {'name':'Arkansas', 'abbrev':'AR'},         {'name':'California', 'abbrev':'CA'},
              {'name':'Colorado', 'abbrev':'CO'},         {'name':'Connecticut', 'abbrev':'CT'},      {'name':'Delaware', 'abbrev':'DE'},
              {'name':'Florida', 'abbrev':'FL'},          {'name':'Georgia', 'abbrev':'GA'},          {'name':'Hawaii', 'abbrev':'HI'},
              {'name':'Idaho', 'abbrev':'ID'},            {'name':'Illinois', 'abbrev':'IL'},         {'name':'Indiana', 'abbrev':'IN'},
              {'name':'Iowa', 'abbrev':'IA'},             {'name':'Kansas', 'abbrev':'KS'},           {'name':'Kentucky', 'abbrev':'KY'},
              {'name':'Louisiana', 'abbrev':'LA'},        {'name':'Maine', 'abbrev':'ME'},            {'name':'Maryland', 'abbrev':'MD'},
              {'name':'Massachusetts', 'abbrev':'MA'},    {'name':'Michigan', 'abbrev':'MI'},         {'name':'Minnesota', 'abbrev':'MN'},
              {'name':'Mississippi', 'abbrev':'MS'},      {'name':'Missouri', 'abbrev':'MO'},         {'name':'Montana', 'abbrev':'MT'},
              {'name':'Nebraska', 'abbrev':'NE'},         {'name':'Nevada', 'abbrev':'NV'},           {'name':'New Hampshire', 'abbrev':'NH'},
              {'name':'New Jersey', 'abbrev':'NJ'},       {'name':'New Mexico', 'abbrev':'NM'},       {'name':'New York', 'abbrev':'NY'},
              {'name':'North Carolina', 'abbrev':'NC'},   {'name':'North Dakota', 'abbrev':'ND'},     {'name':'Ohio', 'abbrev':'OH'},
              {'name':'Oklahoma', 'abbrev':'OK'},         {'name':'Oregon', 'abbrev':'OR'},           {'name':'Pennsylvania', 'abbrev':'PA'},
              {'name':'Rhode Island', 'abbrev':'RI'},     {'name':'South Carolina', 'abbrev':'SC'},   {'name':'South Dakota', 'abbrev':'SD'},
              {'name':'Tennessee', 'abbrev':'TN'},        {'name':'Texas', 'abbrev':'TX'},            {'name':'Utah', 'abbrev':'UT'},
              {'name':'Vermont', 'abbrev':'VT'},          {'name':'Virginia', 'abbrev':'VA'},         {'name':'Washington', 'abbrev':'WA'},
              {'name':'West Virginia', 'abbrev':'WV'},    {'name':'Wisconsin', 'abbrev':'WI'},        {'name':'Wyoming', 'abbrev':'WY'}
              );
          var returnthis = false;
          $.each(states, function(index, value){
              if (to == 'name') {
                  if (value.abbrev == name){
                      returnthis = value.name;
                      return false;
                  }
              } else if (to == 'abbrev') {
                  if (value.name.toUpperCase() == name){
                      returnthis = value.abbrev;
                      return false;
                  }
              }
          });
          return returnthis;
      }
      
function getStateData(){
  //retrieve state counts
  if ($(".validate").val() === "") {
    alert("Please enter state initial");
    $(".validate").text("Please enter a state initial");
  }
  else {
    var state = $(".validate").val().toLowerCase();
    if (state.length > 2) {
      console.log(state.length);
      state = convert_state(state, "abbrev").toLowerCase();
    }
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
>>>>>>> 782eda16529d26fd97dcb944f528666a72fbb2e0
