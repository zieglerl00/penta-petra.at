

var randomNumber;
var noDoubleClick = false;

$('#topLeft').css('visibility','hidden');
$('#topMid').css('visibility','hidden');
$('#topRight').css('visibility','hidden');

$('#midLeft').css('visibility','hidden');

$('#midRight').css('visibility','hidden');

$('#botLeft').css('visibility','hidden');
$('#botMid').css('visibility','hidden');
$('#botRight').css('visibility','hidden');


function startGame(){   
    if(!noDoubleClick){
        noDoubleClick = true;
        $('#midMid').css('visibility','hidden');
        createEnemies();
    } 
}

var finish = false;

var interval;

function countdown() {
  clearInterval(interval);
  interval = setInterval( function() {
      var timer = $('.js-timeout').html();

      timer = timer.split(':');

      var minutes = timer[0];
      var seconds = timer[1];
      
      seconds -= 1;

      if (minutes < 0) return;

      else if (seconds < 0 && minutes != 0) {
          minutes -= 1;
          seconds = 59;
      }
      else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

      $('.js-timeout').html(minutes + ':' + seconds);

      if (minutes == 0 && seconds == 0){
        clearInterval(interval);
        finish = true;
        noDoubleClick = false;
      } 
  }, 1000);
}

$('#buttonID').click(function () {
  $('.js-timeout').text("0:30");
  countdown();
});

function createEnemies(){
       
    getVisible();
    
    setTimeout(function(){    
        getInvisible()     
    },700);
}

var evilNumber;
var isVisible;

function getVisible(){

    
    randomNumber = getRandomIntInclusive(1,9);
    evilNumber = randomNumber;
    isVisible = true;

    switch (randomNumber){
        case 1:
            $('#topLeft').css('visibility','visible');
            break;
        case 2:
            $('#topMid').css('visibility','visible');
            break;    
        case 3:
            $('#topRight').css('visibility','visible');
            break;
        case 4:
            $('#midLeft').css('visibility','visible');
            break;
        case 5:
            $('#midMid').css('visibility','visible');
            break;
        case 6:
            $('#midRight').css('visibility','visible');
            break;
        case 7:
            $('#botLeft').css('visibility','visible');
            break;
        case 8:
            $('#botMid').css('visibility','visible');
            break;
        case 9:
            $('#botRight').css('visibility','visible');
            break;
    }
        
    

}



function getInvisible(){

    var numberForInvis;
    numberForInvis = randomNumber;
    isVisible = false;

    console.log(numberForInvis)

    switch (numberForInvis){
        case 1:
            $('#topLeft').css('visibility','hidden');
            break;
        case 2:
            $('#topMid').css('visibility','hidden');
            break;    
        case 3:
            $('#topRight').css('visibility','hidden');
            break;
        case 4:
            $('#midLeft').css('visibility','hidden');
            break;
        case 5:
            $('#midMid').css('visibility','hidden');
            break;
        case 6:
            $('#midRight').css('visibility','hidden');
            break;
        case 7:
            $('#botLeft').css('visibility','hidden');
            break;
        case 8:
            $('#botMid').css('visibility','hidden');
            break;
        case 9:
            $('#botRight').css('visibility','hidden');
            break;
    }

    if(!finish){
        createEnemies();
    }
    else{
        $('#midMid').css('visibility','visible');
    }

}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
 
  var pointCounter = 0;

function checkIfVisible(){

    
    console.log("HELLO")

    if(isVisible && evilNumber == 1){
        pointCounter++;
    }
    else if(isVisible && evilNumber == 2){
        pointCounter++;
    }
    else if(isVisible && evilNumber == 3){
        pointCounter++;
    }
    else if(isVisible && evilNumber == 4){
        pointCounter++;
    }
    else if(isVisible && evilNumber == 5){
        pointCounter++;
    }
    else if(isVisible && evilNumber == 6){
        pointCounter++;
    }
    else if(isVisible && evilNumber == 7){
        pointCounter++;
    }
    else if(isVisible && evilNumber == 8){
        pointCounter++;
    }
    else if(isVisible && evilNumber == 9){
        pointCounter++;
    }

    $('h2').text(pointCounter);

}