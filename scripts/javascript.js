$(document).ready(function(){
  if ($(window).width() > 500){
    console.log("hello", $(window).width())
   $("#boxmap").removeClass("interactive-map").addClass("large-screen-map");
    console.log($("#map").html())
  }
})
 

