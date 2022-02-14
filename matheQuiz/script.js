var questionCounter = 1;
var userAnswer;
var rightAnswer;
var finish = false;
var firstTime = true;

var failCounter = 0;

var numberOne;
var numberTwo;
var numberThree;
var numberfour;



$("#answerAndQuestion").hide();

function startGameTwo(){
    if(firstTime){
        firstTime = false;
        $('#buttonStart').hide();
        continueGame();
    }
}

function continueGame(){

    switch (failCounter){
        case 1:
            $("#heartOne").hide('slow');
            break;
        case 2:
            $("#heartTwo").hide('slow'); 
            break;
        case 3:
            $("#heartThree").hide('slow');   
            break;
        default:
            break;      
    }

    if(failCounter == 3){
        loose();
    }

    $("#answerAndQuestion").show();

    if(failCounter < 3 && !finish){
        createTask();
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function createTask(){
    
    if(questionCounter === 1){
        $('#questionOne').css('backgroundColor','gray');
        numberOne = getRandomIntInclusive(1,50);
        numberTwo = getRandomIntInclusive(1,50);

        rightAnswer = numberOne + numberTwo;

        $('#taskNumberOne').text(numberOne);
        $('#taskNumberTwo').text(numberTwo);
        $('#opperator').text(' + ');

    }

    else if(questionCounter === 2){
        $('#questionTwo').css('backgroundColor','gray');
        numberOne = getRandomIntInclusive(51,100);
        numberTwo = getRandomIntInclusive(1,50);

        rightAnswer = numberOne - numberTwo;

        $('#taskNumberOne').text(numberOne);
        $('#taskNumberTwo').text(numberTwo);
        $('#opperator').text(' - ');
    }

    else if(questionCounter === 3){
        $('#questionThree').css('backgroundColor','gray');
        numberOne = getRandomIntInclusive(1,100);
        numberTwo = getRandomIntInclusive(1,10);

        rightAnswer = numberOne * numberTwo;

        $('#taskNumberOne').text(numberOne);
        $('#taskNumberTwo').text(numberTwo);
        $('#opperator').text(' * ');
    }
    else if(questionCounter === 4){
        $('#questionFour').css('backgroundColor','gray');
        numberOne = getRandomIntInclusive(1,100);
        numberTwo = getRandomIntInclusive(1,10);

        rightAnswer = numberOne * numberTwo;

        $('#taskNumberOne').text(numberOne);
        $('#taskNumberTwo').text(numberTwo);
        $('#opperator').text(' = ');
        $('#equals').text('/');

      
    }
    else if(questionCounter === 5){
        $('#questionFive').css('backgroundColor','gray');
        numberOne = getRandomIntInclusive(1,10);
        numberTwo = getRandomIntInclusive(1,10);
        numberThree = getRandomIntInclusive(1,10);

        rightAnswer = numberOne * numberTwo * numberThree;

        $('#taskNumberOne').text(numberOne);
        $('#taskNumberTwo').text(numberTwo);
        $('#taskNumberThree').text(numberThree);
        $('#opperator').text(' * ');
        $('#opperatorOne').text(' * ');
        $('#equals').text('=');
        $('#taskNumberThree').show();
        $('#opperatorOne').show();
        
    }
    else if(questionCounter === 6){
        $('#questionSix').css('backgroundColor','gray');
        numberOne = getRandomIntInclusive(1,10);
        numberTwo = getRandomIntInclusive(1,10);
        numberThree = getRandomIntInclusive(1,10);

        rightAnswer = numberOne * numberTwo * numberThree;

        $('#taskNumberOne').text(numberOne);
        $('#taskNumberTwo').text(numberTwo);
        $('#taskNumberThree').text(numberThree);  
    }
    else if(questionCounter === 7){
        $('#questionSeven').css('backgroundColor','gray');
        numberOne = getRandomIntInclusive(1,10);
        numberTwo = getRandomIntInclusive(1,10);
        numberThree = getRandomIntInclusive(1,10);

        rightAnswer = numberOne * numberTwo * numberThree;

        $('#taskNumberOne').text(numberOne);
        $('#taskNumberTwo').text(numberTwo);
        $('#taskNumberThree').text(numberThree);
    }
    else if(questionCounter === 8){
        $('#questionEight').css('backgroundColor','gray');
        numberOne = getRandomIntInclusive(1,10);
        rightAnswer = numberOne * numberOne;

        $('#opperator').text('^2');
        $('#taskNumberOne').text(numberOne);
        $('#taskNumberTwo').hide();
        $('#taskNumberThree').hide();
        $('#opperatorOne').hide();
    }
    else if(questionCounter === 9){
        
        numberOne = getRandomIntInclusive(1,10);
        numberTwo = getRandomIntInclusive(1,10);
        numberThree = getRandomIntInclusive(1,10);

        rightAnswer = numberOne * numberTwo * numberThree;

        $('#opperator').text('*');
        $('#taskNumberOne').text(numberOne);
        $('#taskNumberTwo').text(numberTwo);
        $('#taskNumberThree').text(numberThree);
        $('#taskNumberTwo').show();
        $('#taskNumberThree').show();
        $('#opperatorOne').show();
    }
    
}

function submit(){
    userAnswer = $('#answerInput').val();

    if(questionCounter === 1 && !finish){

        if (userAnswer == rightAnswer){
            questionCounter++;
            $('#questionOne').css('backgroundColor','#3EE876');
        }
        else{
            failCounter++;
        }
        continueGame();
    }
    else if(questionCounter === 2 && !finish){

        if (userAnswer == rightAnswer){
            questionCounter++;
            $('#questionTwo').css('backgroundColor','#3EE876');
        }
        else{
            failCounter++;
        }
        continueGame();
    }
    else if(questionCounter === 3 && !finish){

        if (userAnswer == rightAnswer){
            questionCounter++;
            $('#questionThree').css('backgroundColor','#3EE876');
        }
        else{
            failCounter++;
        }
        continueGame();
    }
    else if(questionCounter === 4 && !finish){

        if (userAnswer == rightAnswer){
            questionCounter++;
            $('#questionFour').css('backgroundColor','#3EE876');
        }
        else{
            failCounter++;
        }
        continueGame();
    }
    else if(questionCounter === 5 && !finish){

        if (userAnswer == rightAnswer){
            questionCounter++;
            $('#questionFive').css('backgroundColor','#3EE876');
        }
        else{
            failCounter++;
        }
        continueGame();
    }
    else if(questionCounter === 6 && !finish){

        if (userAnswer == rightAnswer){
            questionCounter++;
            $('#questionSix').css('backgroundColor','#3EE876');
        }
        else{
            failCounter++;
        }
        continueGame();
    }
    else if(questionCounter === 7 && !finish){

        if (userAnswer == rightAnswer){
            questionCounter++;
            $('#questionSeven').css('backgroundColor','#3EE876');
        }
        else{
            failCounter++;
        }
        continueGame();
    }
    else if(questionCounter === 8 && !finish){

        if (userAnswer == rightAnswer){
            questionCounter++;
            $('#questionEight').css('backgroundColor','#3EE876');
        }
        else{
            failCounter++;
        }
        continueGame();
    }
    else if(questionCounter === 9 && !finish){

        if (userAnswer == rightAnswer){
            $('#questionNine').css('backgroundColor','#3EE876');
            finishGame();
        }
        else{
            failCounter++;
            continueGame();
        }
    }
    $('#answerInput').val('');
}

function finishGame(){
    console.log('WIN')
    $('#taskNumberOne').text('GEWONNEN');
    $('#opperator').hide();
    $('#taskNumberTwo').hide();
    $('#opperatorOne').hide();
    $('#taskNumberThree').hide();
    $('#equals').hide();
    $('input').hide();
    finish = true;
}

function loose(){

    console.log('LOOOOSE')
    $('#taskNumberOne').text('VERLOREN');
    $('#opperator').hide();
    $('#taskNumberTwo').hide();
    $('#opperatorOne').hide();
    $('#taskNumberThree').hide();
    $('#equals').hide();
    $('input').hide();
}

function restartGame(){
    finish = false;
    firstTime = true;
    questionCounter = 1;
    failCounter = 0;
    
    continueGame();

    $('#questionOne').css('background-color', 'gray');
    $('#questionTwo').css('background-color', '');
    $('#questionThree').css('background-color', '');
    $('#questionFour').css('background-color', '');
    $('#questionFive').css('background-color', '');
    $('#questionSix').css('background-color', '');
    $('#questionSeven').css('background-color', '');
    $('#questionEight').css('background-color', '');
    $('#questionNine').css('background-color', '');
    $("#heartOne").show('slow');       
    $("#heartTwo").show('slow');             
    $("#heartThree").show('slow');   
    $('#opperator').show();
    $('#taskNumberTwo').show();
    $('#opperatorOne').hide();
    $('#taskNumberThree').hide();
    $('#equals').show();
    $('input').show();
}