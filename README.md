# Title
--PANDEMIC SCOUT--

# Description
Mobile based application that dynamically displays covid-19 data by state and across the nation. 

API's used
https://covidtracking.com/ - to identify Covid-19 data by state 
https://simplemaps.com - to identify Covid-19 data for the nation to color code the US Map
https://api.ipgeolocation.io/ipgeo?apiKey=8cbff660df8f427d8169bea14803ed60

Alternative to Bootstrap - Materialize CSS

# USER STORY"
As an end user
I want to see Covid - 19 outbreaks and confirmed outbreaks by location
So that I get up to date statistics on the nation and by state

## Acceptance criteria:
- GIVEN a choice of current location or an input box
- WHEN the user chooses a location
- THEN the user is provided with the most up to date covid-19 info
- GIVEN the map of the united states
- THEN the map is color coded to display the severity of infections per state

# Team:
FRONT END: Cameron Walker, Wyatt Hancock
BACK END: Sam Greilick, Dilan Li, David Grant


# Issues Encountered and Resolved:
- The us map we were using had a new script that we were unfamiliar with and so we had to resolve on a new api that allowed us to enter variables into the code.
- the geolocator was not responding with googles geolocator and another geolocation from api.com. So we found the current one that had a very smooth response to comb through.
- the biggest issues we ran into was getting used to using branches instead of committing to the master. That is why api.js still has commits that are not pushed to the master. We had to leave some commits unpushed because they caused to many issues.
- As we made it a mobile first application we decided that it would be best to drop the background on the map as the size of the screen got larger so as to look better for every setting size.
- Collaboration went pretty well but we still have some more to learn about working in pairs as we were more accustomed to splitting up responsibilities and each working on our own thing which still worked out well in the end.

# GitHub Link to Deployed website
https://corvus-cyber.github.io/SCOUT19/

# ScreenShot of Finished website
![]assets/Screen%20Shot%202020-07-09%20at%207.48.33%20PM.png
![]assets/Image%207-9-20%20at%207.48%20PM.jpeg





## Special thanks and Accreditations

Awesome rapheal/jquery/svg map that made my life so easy.
https://newsignature.github.io/us-map/

Thanks for da states
https://gist.github.com/bubblerun/a624de5b4fa8ff0980010054a7220977

State name to abbreviation function:  
GitHub: calebgrove  
Repository: https://gist.github.com/calebgrove/c285a9510948b633aa47

The State-Name-to-Abbreviation function (function convert_state(name, to) {}) was retrieved from the following website:  
https://joshlevinson.me/2013/03/29/javascript-to-convert-between-states-and-abbreviations/

All national and state data are retrieved from the COVID Tracking Project:  
https://covidtracking.com/
