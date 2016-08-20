//need answer choices, and functions, if then statements
//need timer
//need buttons so person can select answer
//need answers right and wrong
//need reset function
window.onload = function(){
  alert("You will have 5 minutes, to complete 12 trivia questions that are based around the 1960's in the US. Press the start button to begin. After choosing your answer, please press next to go on to the next question. If at anytime you wish to start over or play again, press the start over button." )
}

function timeConverter (t){
        var minutes = Math.floor(t/60);
        var seconds = t - (minutes * 60);
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        if (minutes === 0){
            minutes = "00";
        } else if (minutes < 10){
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }



$('#start').on('click', function (g) {
var t = 0;
$("#start").hide();



(function(g) {
	var questions = [{
    question: "Who was the president of the US during the Cuban Missle Crisis?",
    choices: ["Ronald Reagan", "John F. Kennedy", "George Washnigton", "L.B. Johnson"],
    correctAnswer: 1
  }, 
  {
	 question: "Who won the most Stanley Cups in the 1960's?",
	 choices: ["Montreal Candians","Toronto Maple Leafs","Chicago Blackhawks","New York Rangers"],
	 correctAnswer: 0
  }, 
  {
	 question: "Who was the first man to walk on the moon?",
	 choices: ["Lance Armstrong","Buzz Aldrin","Gus Grissom","Neil Armstrong"],
	 correctAnswer: 3
  }, 
  {
	 question: "What year did Martin Luther King give his famous - I Have A Dream Speech?",
	 choices: ["1967","1965","1963","1969"],
	 correctAnswer: 2
  }, 
  {
	 question: "What infamous group came to America from the UK in 1964?",
	 choices: ["The Beatles","The Rolling Stones","The Who","Bob Dylan"],
	 correctAnswer: 0
  }, 
  {
	 question: "On what date did the Green Bay Packers beat The Kansas City Cheifs in Super Bowl I?",
	 choices:["Febuary 5, 1962","January 15, 1967","March 1, 1968","Febuary 15, 1966"],
	 correctAnswer: 1
  }, 
  {
	 question: "In what year was Mary Poppins released?",
	 choices: ["1962","1969","1965","1964"],
	 correctAnswer: 3
  }, 
  {
	 question:"Who won the World Series in 1969?",
	 choices: ["New York Yankees","New York Mets","St.Louis Cardinals","Detroit Tigers"],
	 correctAnswer: 1
  }, 
  {
	 question:"What famous cartoon appeared on CBS for the first time in 1969?",
	 choices: ["Scooby Doo","Tom & Jerry","Looney Tunes","Wacky Races"],
	 correctAnswer: 0
  }, 
  {
	 question:"What did the Supreme Court case of Miranda v. Arizona in 1966 conclude?",
	 choices: ["Segregation is wrong","Right to fair trial","Police must read suspects their rights","None of the above"],
	 correctAnswer: 2
  }, 
  {
	 question:"Who won the Academy Award for best picture in 1965?",
	 choices: ["Darling","My Fair Lady","The Sound of Music","Oliver!"],
	 correctAnswer: 2
  }, 
  {
	 question:"What car did Ford debut at the 1964 World's Fair?",
	 choices: ["Mustang","Fairlane","Falcon","Galaxy"],
	 correctAnswer: 0
}];


  
    var questionCounter = 0; 
    var selections = []; 
    var quiz = $('#game'); 
  
  
    displayNext();
  
  
    $('#next').on('click', function (e) {
        e.preventDefault();
    
    
        if(quiz.is(':animated')) {        
            return false;
        }
        choose();
    
    
        if (isNaN(selections[questionCounter])) {
            alert('Please make a selection!');
        } 
        else {
            questionCounter++;
            displayNext();
        }
    });
  
  
    $('#startOver').on('click', function (e) {
        e.preventDefault();
    
        if(quiz.is(':animated')) {
          return false;
        }

        questionCounter = 0;
        selections = [];
        t=0;
        displayNext();
    });
  
  
    $('.button').on('mouseenter', function () {
        $(this).addClass('active');
    });

    $('.button').on('mouseleave', function () {
        $(this).removeClass('active');
    });
  
  


    function createQuestion(index) {
        var qElement = $('<div>', {
        id: 'question'
        });
    
        var header = $('<h2>Question ' + (index + 1) + ':</h2>');
        qElement.append(header);
    
        var question = $('<p>').append(questions[index].question);
        qElement.append(question);
    
        var radioButtons = createRadios(index);
        qElement.append(radioButtons);
    
        return qElement;
    };
  
  
    function createRadios(index) {
        var radioList = $('<ul>');
        var item;
        var input = '';

        for (var i = 0; i < questions[index].choices.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += questions[index].choices[i];
          item.append(input);
          radioList.append(item);
        }
        return radioList;
    };
  
  
    function choose() {
        selections[questionCounter] = +$('input[name="answer"]:checked').val();
    };
  
  
    function displayNext() {
        quiz.fadeOut(function() {
            $('#question').remove();
      
            if(questionCounter < questions.length){
              var nextQuestion = createQuestion(questionCounter);
              quiz.append(nextQuestion).fadeIn();

                if (!(isNaN(selections[questionCounter]))) {
                    $('input[value='+selections[questionCounter]+']').prop('checked', true);
                }
        
   
                if(questionCounter === 0){
                    $('#next').show();
                }
            }
            else {
              var scoreElem = displayScore();
              quiz.append(scoreElem).fadeIn();
              $('#next').hide();
              $('#start').show();
            }
        });
    };
  


    function displayScore() {
        var score = $('<p>',{id: 'question'});
    
        var numCorrect = 0;

        for (var i = 0; i < selections.length; i++) {
            if (selections[i] === questions[i].correctAnswer) {
                numCorrect++;
            }
        }
    
        score.append('You got ' + numCorrect + ' questions out of ' + questions.length + ' right!');
        return score;
  };

})();



	   var timer = setInterval(function() { 
         myTimer() 
        }, 1000);

	   function myTimer() {
  	     document.getElementById("timer").innerHTML = timeConverter(t++);

  	     if (t == 300) {
  	     timesUp();
  	     }
  	 };

  	 function timesUp() {
  		    $('#timer').html('<h2>Time\'s Up!</h2>');
  		    alert("Times Up! Game Over!")
  		    gameReset();
          return;
      };

    function gameReset() {
   	      questionCounter = 0;
          selections = [];
          t = 0;
      };
  });