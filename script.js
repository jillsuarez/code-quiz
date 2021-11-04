var questionEl
//const questionEl = document.querySelector(".question")
var btn = document.querySelector("#correct");


function question () {
    var card = document.querySelector("#card")
    var questions = document.querySelector("#question")
    var btn1 = document.querySelector("#1")
    var btn2 = document.querySelector("#2")
    var btn3 = document.querySelector("#3")
    var btn4 = document.querySelector("#4")

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
}

btn.addEventListener("click", question);