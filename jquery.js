/*eslint-env browser*/
//jQuery.js
var playing=false;
var score;
var i;
var fruit=['apple','banana','cherries','grapes','mango','orange','peach','pear','watermelon'];
var step;
var action;
var trialsLefts;
$(document).ready(function($){
  $("#start").click(function(){
    if(playing==true){
        location.reload();
        
    }else{
        playing=true;
        score=0;
        $("#scorevalue").html(score);
        $("#trialsLefts").show();
        trialsLefts=3;
        addhearts();
        $("#gameover").hide();
        $("#start").html("Reset Game");
        startaction();
    }
});
  $("#fruit1").mouseover(function(){
      score++;
      $("#scorevalue").html(score);
      //document.getElementById("slicesound").play();
      $("#slicesound")[0].play();
    
      clearInterval(action);
      
      $("#fruit1").hide("explode",500);
      
      setTimeout(startaction,800);
  });
   
  


  
    function addhearts(){
        $("#trialsLefts").empty();
for(i=0;i<trialsLefts;i++){
   $("#trialsLefts").append("<img src=\"images/heart.png\" class=\"life\"   / >");
    

    }
    }
   function startaction(){
       $("#fruit1").show();
       choosefruit();
       $("#fruit1").css({'left':Math.round(680*Math.random()),'top':-50});
       step=1+Math.round(5*Math.random());
       action=setInterval(function(){
           $("#fruit1").css('top',$("#fruit1").position().top + step);
                      if($("#fruit1").position().top > $("#fruitcontainer").height()){
                          if(trialsLefts >1){
                               $("#fruit1").show();
       choosefruit();
       $("#fruit1").css({'left':Math.round(680*Math.random()),'top':-50});
       step=1+Math.round(5*Math.random());
                     trialsLefts=trialsLefts-1;
                              addhearts();
                             }
                          else{
                              playing=false;
                              $("#start").html("Start Game");
                              $("#gameover").show();
                              $("#gameover").html("<p>Game Over!</p><p>Your score is "+ score +"</p>");
                              $("#trialsLefts").hide();
                              stopaction();
                          }
                         
                         }    
                          },10);
   }
 function choosefruit(){
     $("#fruit1").attr("src","images/" +fruit[Math.round(8*Math.random())]+".png");
     
 }
function stopaction(){
    clearInterval(action);
    $("#fruit1").hide();
}
});