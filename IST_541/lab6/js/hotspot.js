// JavaScript Document$( function() {
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "Save as and Tag") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, this is wherre you name your file.");
      }

      if ($(this).attr("id") == "Save") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, that's how you save. With the save button.");
      }

      if ($(this).attr("id") == "Select a Format") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, this is where you select the file type.");
      }
      if ($(this).attr("id") == "Export Terrain") {
         $("#feedback").css("color","red");
         $("#feedback").html("No,this exports the terrain under the model.");
      }
  $("#feedback").css("backgroundColor","yellow");

   });
}); 