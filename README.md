# Title
--PANDEMIC SCOUT--

# Description
Mobile based application that dynamically displays covid-19 data based on state. 



https://rapidapi.com/Gramzivi/api/covid-19-data  could use to search by country
https://covidtracking.com/   US specific 
https://rapidapi.com/Yatko/api/coronavirus-map?endpoint=apiendpoint_5c9df527-2111-4553-a09e-e6098736e1d8  Map/graph to be used as banner?


# USER STORY"
as an end user
i want to see covid - 19 outbreaks and confirmed outbreaks by location
so that i get up to date stats


## Acceptance criteria:
- GIVEN a choice of current location or input box for manuel selection
- WHEN the user chooses a location
- THEN the user is provided with most up to date covid-19 info
- AND user is given the option to save this as default location (local storage)


maybe
- GIVEN user chooses to mannually typing in location
- WHEN the user is typing
- THEN a automatic list of location suggestion list shows in a drop down 
- GIVEN user chooses to select location from state map
- WHEN user selects location from map
- THEN user is shown COVID data based on this location
- ONCE location is selected, user is given and option to save this as default location if this is first page load
menu


 Third Party APIs RESOURCES:
https://www.jsdelivr.com/\
https://cdnjs.com/
Geolocation 3rdPartAPI: https://cdnjs.com/libraries/geolocator
US Map 3rdPartAPI: https://newsignature.github.io/us-map/

Server Side APIs RESOURCES:
https://covidtracking.com/   US specific 
https://rapidapi.com/Yatko/api/coronavirus-map?endpoint=apiendpoint_5c9df527-2111-4553-a09e-e6098736e1d8  Map/graph to be used as banner?
Geolocation Server Side API: https://rapidapi.com/damngoodapis/api/geolocation

# Team:
FRONT END: Cameron Walker, Wyatt Hancock
BACK END: Sam Greilick (Map API, third party), Dilan Li (Covid Tracking Api), David Grant (Geolocator api)

"cameron testing"





## Special thanks and accreditations


Awesome rapheal/jquery/svg map that made my life so easy.
https://newsignature.github.io/us-map/

Thanks for da states
https://gist.github.com/bubblerun/a624de5b4fa8ff0980010054a7220977

## Credit
State name to abbreviation function:  
GitHub: calebgrove  
Repository: https://gist.github.com/calebgrove/c285a9510948b633aa47

The State-Name-to-Abbreviation function (function convert_state(name, to) {}) was retrieved from the following website:  
https://joshlevinson.me/2013/03/29/javascript-to-convert-between-states-and-abbreviations/
