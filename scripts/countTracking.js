$(document).ready(function () {

//event listener for the navbar, required by materialize 
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

if ($(window).width() > 500){
  console.log("hello", $(window).width())
 $("#boxmap").removeClass("interactive-map").addClass("large-screen-map");
  console.log($("#map").html())
}

 //if the "Use Current Location" button is clicked, user's current ip will be set as default state
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
      //use state retrieved from geolocator to get state data
      getStateData(state);
      stateChart(state);
      displayStateData();
    });
  })


  $("#state-search").click(function (event) {
    event.preventDefault();
    //input cannot be blank
    if ($(".validate").val() === "") {
      $(".error-message").empty();
      $(".error-message").text("State name cannot be empty");
    } //pop up message if state abbreviation is spelled wrong
    else if ($(".validate").val().length === 2 && !convert_state($(".validate").val(), "name")) {
      $(".error-message").empty();
      $(".error-message").text("Please enter a valid state name");
    } //pop up mesage if state name is spelled wrong 
    else if ($(".validate").val().length > 2 && !convert_state($(".validate").val(), "abbrev")) {
      $(".error-message").empty();
      $(".error-message").text("Please enter a valid state name");
    } // if state is correct, display corresponding state data
    else {
      var state = $(".validate").val().toLowerCase();
      if (state.length > 2) {
        state = convert_state(state, "abbrev").toLowerCase();
      }
      getStateData(state);
      stateChart(state);
      displayStateData();
    }
  })

  function displayStateData() {
    $(".national-data").css("display", "none");
    $(".state-data").css("display", "block");
    $("#myChart").css("display", "block");
    $(".location-entry").css("display", "none");
  }


  //retrieve national counts
  $.ajax({
    url: "https://covidtracking.com/api/v1/us/current.json",
    method: "GET"
  })
    .then(function (response) {
      // console.log(response);
      var date = moment(response[0].date, "YYYYMMDD");
      $(".nat-day").text("*Updated on: " + date.format("MMM Do YYYY") + " between 5 and 6 pm EST");
      $(".nat-pos").text("Total Confirmed Cases: " + response[0].positive.toLocaleString()); 
      $(".nat-pos-increase").text("New Cases: " + response[0].positiveIncrease.toLocaleString());
      $(".nat-hospital").text("Currently Hospitalized: " + response[0].hospitalizedCurrently.toLocaleString());
      $(".recovered").text("Recovered: " + response[0].recovered.toLocaleString());
      $(".deaths").text("Fatalities: " + response[0].death.toLocaleString());
      });



  //This function changes spelled out state names to state abbreviation
  function convert_state(name, to) {
    var name = name.toUpperCase();
    var states = new Array({ 'name': 'Alabama', 'abbrev': 'AL' }, { 'name': 'Alaska', 'abbrev': 'AK' },
      { 'name': 'Arizona', 'abbrev': 'AZ' }, { 'name': 'Arkansas', 'abbrev': 'AR' }, { 'name': 'California', 'abbrev': 'CA' },
      { 'name': 'Colorado', 'abbrev': 'CO' }, { 'name': 'Connecticut', 'abbrev': 'CT' }, { 'name': 'Delaware', 'abbrev': 'DE' },
      { 'name': 'Florida', 'abbrev': 'FL' }, { 'name': 'Georgia', 'abbrev': 'GA' }, { 'name': 'Hawaii', 'abbrev': 'HI' },
      { 'name': 'Idaho', 'abbrev': 'ID' }, { 'name': 'Illinois', 'abbrev': 'IL' }, { 'name': 'Indiana', 'abbrev': 'IN' },
      { 'name': 'Iowa', 'abbrev': 'IA' }, { 'name': 'Kansas', 'abbrev': 'KS' }, { 'name': 'Kentucky', 'abbrev': 'KY' },
      { 'name': 'Louisiana', 'abbrev': 'LA' }, { 'name': 'Maine', 'abbrev': 'ME' }, { 'name': 'Maryland', 'abbrev': 'MD' },
      { 'name': 'Massachusetts', 'abbrev': 'MA' }, { 'name': 'Michigan', 'abbrev': 'MI' }, { 'name': 'Minnesota', 'abbrev': 'MN' },
      { 'name': 'Mississippi', 'abbrev': 'MS' }, { 'name': 'Missouri', 'abbrev': 'MO' }, { 'name': 'Montana', 'abbrev': 'MT' },
      { 'name': 'Nebraska', 'abbrev': 'NE' }, { 'name': 'Nevada', 'abbrev': 'NV' }, { 'name': 'New Hampshire', 'abbrev': 'NH' },
      { 'name': 'New Jersey', 'abbrev': 'NJ' }, { 'name': 'New Mexico', 'abbrev': 'NM' }, { 'name': 'New York', 'abbrev': 'NY' },
      { 'name': 'North Carolina', 'abbrev': 'NC' }, { 'name': 'North Dakota', 'abbrev': 'ND' }, { 'name': 'Ohio', 'abbrev': 'OH' },
      { 'name': 'Oklahoma', 'abbrev': 'OK' }, { 'name': 'Oregon', 'abbrev': 'OR' }, { 'name': 'Pennsylvania', 'abbrev': 'PA' },
      { 'name': 'Rhode Island', 'abbrev': 'RI' }, { 'name': 'South Carolina', 'abbrev': 'SC' }, { 'name': 'South Dakota', 'abbrev': 'SD' },
      { 'name': 'Tennessee', 'abbrev': 'TN' }, { 'name': 'Texas', 'abbrev': 'TX' }, { 'name': 'Utah', 'abbrev': 'UT' },
      { 'name': 'Vermont', 'abbrev': 'VT' }, { 'name': 'Virginia', 'abbrev': 'VA' }, { 'name': 'Washington', 'abbrev': 'WA' },
      { 'name': 'West Virginia', 'abbrev': 'WV' }, { 'name': 'Wisconsin', 'abbrev': 'WI' }, { 'name': 'Wyoming', 'abbrev': 'WY' }
    );
    var returnthis = false;
    $.each(states, function (index, value) {
      if (to == 'name') {
        if (value.abbrev == name) {
          returnthis = value.name;
          return false;
        }
      } else if (to == 'abbrev') {
        if (value.name.toUpperCase() == name) {
          returnthis = value.abbrev;
          return false;
        }
      }
    });
    return returnthis;
  }

  // this function takes in user input as state, and uses that input to retrieve data
  function getStateData(state) {
    $.ajax({
      url: "https://covidtracking.com/api/v1/states/" + state + "/current.json",
      method: "GET"
    })
      .then(function(response) {
      console.log(response);
      $("#state-name").text(response.state);
      var date = moment(response.date, "YYYYMMDD");
      $(".state-day").text("*Updated on: " + date.format("MMM Do YYYY") + " between 5 and 6 pm EST");
      $(".state-pos").text("Total Confirmed Cases: " + response.positive.toLocaleString());
      $(".state-pos-increase").text("New Cases: " + response.positiveIncrease.toLocaleString());
      $(".state-hospital").text("Currently Hospitalized: " + response.hospitalizedCurrently.toLocaleString());
      $(".state-recov").text("Recovered: " + response.recovered.toLocaleString());
      $(".state-deaths").text("Fatalities: " + response.death.toLocaleString());
      });    
  }     


function stateChart(state){
  $.ajax({
    url: "https://covidtracking.com/api/v1/states/" + state + "/daily.json",
    method: "GET"
  })
    .then(function (response) {
      console.log(response);
      //data for datas on State Chart
      var dates = [];
      for (i=13; i>=0; i--){
        dates.push(moment(response[i].date, "YYYYMMDD").format("MMDD"));
      }
      //data for new case on State Chart 
      var dailyNewCases = [];
      for (i=13; i>=0; i--){
        dailyNewCases.push(response[i].positiveIncrease)
      }

//State Chart
var ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dates,
        datasets: [{
            label: 'Daily New Cases',
            data: dailyNewCases,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 1500
                }
            }]
        }
    }
});

      });
}


})

