$(document).ready(function(){
    //all states need to be lowercase, need to change user input into lowercase later
    var state = "ut";
    $.ajax({
        url: "https://covidtracking.com/api/v1/states/" + state + "/current.json",
        method: "GET"
      })
        .then(function(response) {
            console.log(response);
        })



})