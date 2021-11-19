var questionEl
//const questionEl = document.querySelector(".question")
var startQuizBtn = document.querySelector("#start-quiz");
var btn1 = document.querySelector("#one")
var btn2 = document.querySelector("#two")
var btn3 = document.querySelector("#three")
var btn4 = document.querySelector("#four")
var answerType = document.querySelector("#answer-type");
var index = 0;
// var displayTimer = document.querySelector("#timer")
var second
var timerEl = document.getElementById('timer');
let score = 0;

function question () {
    var card = document.querySelector("#card")
    var questions = document.querySelector("#question-place")

    var questionList = [
        "Commonly used data types DO NOT Include:",
        "The condition in an if/else statement is enclosed with ______.",
        "Arrays in JavaScript can be used to store_____.",
        "String values must be enclosed within ____ when being assigned to variables.",
        "A very useful tool used during development and debugging for printing content to the debugger is:",
    ]

    var btn1List = [
        "stings",
        "quotes",
        "numbers and strings",
        "commas",
        "JavaScript",
    ]

    var btn2List = [
        "booleans",
        "curly brackets",
        "other arrays",
        "curly brackets",
        "terminal/bash",
    ]

    var btn3List = [
        "alerts",
        "parenthesis",
        "booleans",
        "quotes",
        "for loops",
    ]

    var btn4List = [
        "numbers",
        "square brackets",
        "all of the above",
        "parenthesis",
        "console.log",
    ]

    questions.innerHTML = questionList [index];
    one.innerHTML = btn1List [index];
    two.innerHTML = btn2List [index];
    three.innerHTML = btn3List [index];
    four.innerHTML = btn4List [index];
    
}

function answerOne() {
    if (index === 0 ) [
        answerType.innerHTML = "Incorrect"
    ]
    if (index === 1 ) [
        answerType.innerHTML = "Incorrect"
    ]
    if (index === 2 ) [
        answerType.innerHTML = "Correct"
    ] 
    if (index === 3 ) [
        answerType.innerHTML = "Incorrect"
    ]
    if (index === 4 ) [
        answerType.innerHTML = "Incorrect"
    ]
    index ++
    question ()
}
function answerTwo() {
    if (index === 0 ) [
        answerType.innerHTML = "Incorrect"
    ]
    if (index === 1 ) [
        answerType.innerHTML = "Incorrect"
    ]
    if (index === 2 ) [
        answerType.innerHTML = "Incorrect"
    ] 
    if (index === 3 ) [
        answerType.innerHTML = "Incorrect"
    ]
    if (index === 4 ) [
        answerType.innerHTML = "Incorrect"
    ]
    index ++
    question ()
}
function answerThree() {
    if (index === 0 ) [
        answerType.innerHTML = "Correct"
    ]
    if (index === 1 ) [
        answerType.innerHTML = "Correct"
    ]
    if (index === 2 ) [
        answerType.innerHTML = "Incorrect"
    ] 
    if (index === 3 ) [
        answerType.innerHTML = "Correct"
    ]
    if (index === 4 ) [
        answerType.innerHTML = "Incorrect"
    ]
    index ++
    question ()
}
function answerFour() {
    if (index === 0 ) [
        answerType.innerHTML = "Incorrect"
    ]
    if (index === 1 ) [
        answerType.innerHTML = "Incorrect"
    ]
    if (index === 2 ) [
        answerType.innerHTML = "Incorrect"
    ] 
    if (index === 3 ) [
        answerType.innerHTML = "Incorrect"
    ]
    if (index === 4 ) [
        answerType.innerHTML = "Correct"
    ]
    index ++
    question ()
}

// Timer that counts down from 5
function countdown() {
    var timeLeft = 90;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  // setInterval("What do I do", "When do I do it?")
  
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        //displayMessage();
      }
    }, 1000);
    console.log(timeLeft)
  }

 countdown(); 
/* 
var saveScores = function () {
    localStorage.setItem("scores", JSON.stringify(scores));
} 

function penalty () {
   timer - 10000
};

function startTimer () {

    //console.log("hello");
    /*if (timer > 0) {
        var activeTimer = timer - 1000;
        console.log(timer)
    }
    setInterval(startTimer, 1000)
};

// var timerRunning = setInterval(startTimer,1000);
// console.log(timerRunning)
*/

startQuizBtn.addEventListener("click", question);
// startQuizBtn.addEventListener("click", startTimer);
btn1.addEventListener("click", answerOne);
btn2.addEventListener("click", answerTwo);
btn3.addEventListener("click", answerThree);
btn4.addEventListener("click", answerFour);
