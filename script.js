
// var questionEl
// //const questionEl = document.querySelector(".question")
var startQuizBtn = document.querySelector("#start-quiz");
var i = 0;

var timerEl = document.getElementById('timer');
var timeLeft = 90;
var newTime;

var scoreEl = document.getElementById('score');


// let score = 0;


var questionList = [
    {
        text: "Commonly used data types DO NOT Include:",
        choices: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ],
        answer: "alerts"
    },
    {
        text: "The condition in an if/else statement is enclosed with ______.",
        choices: [
            "quotes",
            "curly brackets",
            "parenthesis",
            "square brackets"
        ],
        answer: "parenthesis"
    },
    {
        text: "Arrays in JavaScript can be used to store_____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        text: "String values must be enclosed within ____ when being assigned to variables.",
        choices: [
            "commas",
            "curly braces",
            "quotes",
            "parenthesis"
        ],
        answer: "quotes"
    },
    {
        text: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [
            "JavaScript",
            "terminal/bash",
            "for loops",
            "console.log"
        ],
        answer: "console.log"
    }
]


function startGame () {
    var card = document.querySelector("#card")
    var questionsSection = document.querySelector("#question-section")
    card.setAttribute("class", "hide")
    questionsSection.removeAttribute("class", "hide")
    question();
    countdown();
}

function question () {
    var questions = document.querySelector("#question-place")
    questions.textContent = questionList[i].text
    var buttonBox = document.getElementById("button-box");
    buttonBox.innerHTML = "";
    questionList[i].choices.forEach(function(choice){
        var choiceButton = document.createElement("button")
        choiceButton.textContent = choice;
        choiceButton.setAttribute("value", choice)
        choiceButton.onclick = checkAnswers;

        buttonBox.appendChild(choiceButton);
    })
     
}

function checkAnswers () {
    console.log(this.value)
    if (this.value !== questionList[i].answer) {
        console.log("wrong")
        timeLeft -= 10;
        console.log(timeLeft)
    }
    else {
        console.log("correct")
    }
    i++;
    if (i === questionList.length) {
        console.log("run end function");
        endGame ();
    }
    else {
        question();
    }
}

function countdown() {
    var timeInterval = setInterval(function () {
        if (i === questionList.length) {
            // timerEl.textContent = '';
            clearInterval(timeInterval)
            console.log(timeLeft)
            scoreEl.textContent = timeLeft;
        }
        if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
    console.log(timeLeft)
  }; 


  function endGame () {
    //hide card
    var questionsSection = document.querySelector("#question-section")
    var finalScore = document.querySelector("#final-score")
    questionsSection.setAttribute("class", "hide")
    finalScore.removeAttribute("class", "hide")
    //stop timer 

  };

//   var saveScores = function () {
//     formEl.querySelector("#initials").textContent = "name"
//   };

// saveScores.addEventListener("click", function() {
//     console.log("scores")
//     localStorage.setItem("scores", JSON.stringify(scores))
// })



startQuizBtn.addEventListener("click", startGame);

