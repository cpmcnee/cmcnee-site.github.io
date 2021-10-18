// JavaScript Document// JavaScript Document$( function() {
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "Main Viewport") {
         $("#feedback").css("color","black");
         $("#feedback").html("This is the main viewport. This guy's name is Andy.");
      }

      if ($(this).attr("id") == "Camera Controls") {
         $("#feedback").css("color","black");
         $("#feedback").html("These are the camera controls, they're actually pretty intuitive.");
      }

      if ($(this).attr("id") == "Lighting Controls") {
         $("#feedback").css("color","black");
         $("#feedback").html("These are the lighting controls. They take some getting used to.");
      }
      if ($(this).attr("id") == "Library") {
         $("#feedback").css("color","black");
         $("#feedback").html("This is the library, it's where all your assets are stored.");
      }
      if ($(this).attr("id") == "Adjusttment Dials") {
         $("#feedback").css("color","black");
         $("#feedback").html("These are the control dials, every element in your scene will have them.");
      }

      
  $("#feedback").css("backgroundColor","yellow");

   });
}); 