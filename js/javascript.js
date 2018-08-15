/*Page2-transition from computer to CPU*/
$(document).ready(function() {
  $("#content").click(function() {
   var puff = $("#wholecomputer").toggle("puff", "slow");
    var cpucase = "<img src='https://i.imgur.com/wTT2kO7.png'/>";
    var cpudisplay = $(cpucase).addClass("computer");
    var firstdisplay= $(puff).after(cpudisplay);
  });
  //Mickeymouse1 move from Mouse to CPU
  $(".mickey1").click(function(){
    $(".modal-content-mouse").fadeIn();
  }); 
  $(".check1").click(function(){
    $(".modal-content-mouse").hide();
    $(".mickey1").css({
     WebkitTransform: 'translate(750%, 30%)',
     MozTransform: 'translate(750%, 30%)',
     transform: 'translate(750%, 30%)',
     MozTransitionDuration: '3s',
     WebkitTransitionDuration: '3s',
     transitionDuration: '3s',
     'visibility': 'hidden'
    });
    $(".mickey2").delay(3000).fadeIn();
  });
  
  //mickey2 move from CPU to Memory
   $(".mickey2").click(function(){
    $(".modal-content-cpu").fadeIn();
  }); 
  $(".check2").click(function(){
    $(".modal-content-cpu").hide();
    $(".mickey2").css({
     WebkitTransform: 'translate(0, -350%)',
     MozTransform: 'translate(0%, -350%)',
     transform: 'translate(0%, -350%)',
     MozTransitionDuration: '3s',
     WebkitTransitionDuration: '3s',
     transitionDuration: '3s',
     'visibility': 'hidden'
    });
    $(".mickey3").delay(3000).fadeIn();
  }); 
  
  //mickey3 move from Memory to CPU again
  $(".mickey3").click(function(){
    $(".modal-content-memory").fadeIn();
  }); 
  $(".check3").click(function(){
    $(".modal-content-memory").hide();
    $(".mickey3").css({
     WebkitTransform: 'translate(0%, 350%)',
     MozTransform: 'translate(0%, 350%)',
     transform: 'translate(0%, 350%)',
     MozTransitionDuration: '3s',
     WebkitTransitionDuration: '3s',
     transitionDuration: '3s',
     'visibility': 'hidden'
    });
    $(".mickey4").delay(3000).fadeIn();
  });
    
  //mickey4 move from CPU to Computer Screen
  $(".mickey4").click(function(){
    $(".modal-content-cpu2").fadeIn();
  }); 
  $(".check4").click(function(){
    $(".modal-content-cpu2").hide();
    $(".mickey4").css({
     WebkitTransform: 'translate(650%, -10%)',
     MozTransform: 'translate(650%, -10%)',
     transform: 'translate(650%, -10%)',
     MozTransitionDuration: '3s',
     WebkitTransitionDuration: '3s',
     transitionDuration: '3s',
     'visibility': 'hidden'
    });
    $(".mickey5").delay(3000).fadeIn();
  });  
  
  //mickey5
  $(".mickey5").click(function(){
    $(".modal-content-display").fadeIn();
  }); 
  $(".check5").click(function(){
    $(".modal-content-display").hide();
  });   
});

/*Page4- drag and drop Quiz*/
$(function() {
var tick = "<span>✔</span>";
var colortick = $(tick).css({
        color: "5BC236",
        "margin-left": "15%",
        "margin-top": "-35%",
        "position": "absolute"
      });
  $(".filled").draggable();
  $("#text10").droppable({
    drop: function(event, ui) {
         $(this).hide();
         var answer1 = $("#answer1").addClass("blank").after(colortick);      
    }
  });
});

$(function() {
  var tick = "<span>✔</span>";
var colortick = $(tick).css({
        color: "5BC236",
        "margin-left": "15%",
        "margin-top": "-25%",
        "position": "absolute"
      });
  $(".filled").draggable();
  $("#text11").droppable({
    drop: function(event, ui) {
         $(this).hide();
         var answer2 = $("#answer2").addClass("blank").after(colortick);      
    }
  });
});  
  
$(function() {
var tick = "<span>✔</span>";
var colortick = $(tick).css({
        color: "5BC236",
        "margin-left": "80%",
        "margin-top": "-38%",
        "position": "absolute"
      });
  $(".filled").draggable();
  $("#text12").droppable({
    drop: function(event, ui) {
         $(this).hide();
         var answer3 = $("#answer3").addClass("blank").after(colortick);      
    }
  });
});


  

