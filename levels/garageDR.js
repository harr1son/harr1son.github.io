var isDown = false;
var bbqLighterTry = 0;
var garageBabyTry = 0;
var gasCanTry = 0;
var extCordTry = 0;
var fertilizerTry = 0;
var origOffset;

$(document).ready(function () {
  $(".drag").draggable();

  $(".drag").hover(function( event ) {
    if(!isDown){
      thisWidth = $("#"+event.target.id).width();
      thisHeight = $("#"+event.target.id).height();
      $("#"+event.target.id).width(thisWidth+10);
      $("#"+event.target.id).height(thisHeight+10);
    }
  }, function( event ) {
    if(!isDown){
      $("#"+event.target.id).width(thisWidth);
      $("#"+event.target.id).height(thisHeight);
    }
  });

  $(".drag").mouseup(function( event ) {
    $("#"+event.target.id).width(thisWidth);
    $("#"+event.target.id).height(thisHeight);
    $(".helper").css('opacity', '0');;
    isDown = false;

    //var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";

    //object specs
    var objectOffset = $("#"+event.target.id).offset();
    var objectHeight = $("#"+event.target.id).height();
    var objectWidth = $("#"+event.target.id).width();
    var objectCenterX = objectOffset.left + (objectWidth/2);
    var objectCenterY = objectOffset.top + (objectHeight/2);

    //flame specs
    var spotName = event.target.id+"Spot";
    var flameOffset = $("#"+spotName).offset();
    var flameHeight = $("#"+spotName).height();
    var flameWidth = $("#"+spotName).width();
    var flameCenterX = flameOffset.left + (flameWidth/2);
    var flameCenterY = flameOffset.top + (flameHeight/2);

    var dist = Math.sqrt( (Math.pow(flameCenterX - objectCenterX,2)) + (Math.pow(flameCenterY - objectCenterY,2)) )

    if(dist < 75){
      switch(event.target.id){
        case "bbqLighter":
          $('#bbqLighter').hide();
          $('#bbqLighterFirm').toggle();
          showPopover('bbqLighter');
          decrementCnt();
          break;
        case "garageBaby":
          $('#garageBaby').hide();
          showPopover('garageBaby');
          decrementCnt();
          break;
        case "gasCan":
          $('#gasCan').hide();
          $('#gasCanFirm').toggle();
          showPopover('gasCan');
          decrementCnt();
          break;
        case "extCord":
          $('#extCord').hide();
          showPopover('extCord');
          decrementCnt();
          break;
        case "fertilizer":
          $('#fertilizer').hide();
          showPopover('fertilizer');
          decrementCnt();
          break;
        default:
          break;
      }
    }
  });

  $(".drag").mousedown(function( event ) {
    isDown = true;
    origOffset = $("#"+event.target.id).offset();
    switch(event.target.id){
      case "bbqLighter":
        bbqLighterTry++;
        if(bbqLighterTry > 3){
          $("#bbqLighterSpot").css('opacity', '1');
        }
        break;
      case "garageBaby":
        garageBabyTry++;
        if(garageBabyTry > 3){
          $("#garageBabySpot").css('opacity', '1');
        }
        break;
      case "gasCan":
        gasCanTry++;
        if(gasCanTry > 3){
          $("#gasCanSpot").css('opacity', '1');
        }
        break;
      case "extCord":
        extCordTry++;
        if(extCordTry > 3){
          $("#extCordSpot").css('opacity', '1');
        }
        break;
      case "fertilizer":
        fertilizerTry++;
        if(fertilizerTry > 3){
          $("#fertilizerSpot").css('opacity', '1');
        }
        break;
      default:
        break;
    }
  });

});
