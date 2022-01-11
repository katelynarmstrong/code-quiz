// questions for quiz
var questions = [
    {
        questionText: "Inside which HTML element do we put the JavaScript?",
        choices:["a. <scripting", "b. <javascript>", "c. <js>", "d. <script>"],
        answer:"d. <script>"
    },
    {
        questionText: "How would you write 'Hello World' in an alert box?",
        choices:["a. msg('Hello World');", "b. alert('Hello World');", "c. msgBox('Hello World')", "d. alertBox('Hello World');"],
        answer:"b. alert('Hello World');"
    },
    {
        questionText: "How do you create a function in JavaScript?",
        choices:["a. function:myFunction()", "b. function=myFunction()", "c. function myFunction()", "d. function:(myFunction)"],
        answer:"b. function=myFunction"
    },
    {
        questionText: "How can you add a comment in a JavaScript?",
        choices:["a. <!--This is a coment-->", "b. 'This is a comment", "c. //This is a comment", "d. /*This is a comment"],
        answer:"c. //This is a comment"
    },
    {
        questionText: "What will the following code return: Boolean(10 > 9)",
        choices: ["a. false", "b. NaN", "c. true", "d. undefined"],
        answer:"c. true"
    },
]

// initialize variables 
currentQuestion = 0;

// Reference variables to html 
var questionsEl = document.querySelector("#questions");
var startBtn = document.querySelector("#start-btn")
let timerDisplay = document.querySelector("#timer")

// Timer that counts down from 60
function countdown() {
    var timeLeft = 60;

// hide timer and question buttons

// hide instructions and start button once quiz begins

// start quiz with timer upon button click

// disable hidden feature

// display quiz questions 

// when user clicks on answer, determine if its correct or incorrect

// incorrect answer decreases the time remaining 

// go on to next question 

// if there are no more questions, end quiz

// if timer runs out, end quiz

// when user hits submit button it adds their score and initials to the leaderboard

// create function to save score of user

// Ensure high score saves to see later 
    event.preventDefault();

// add user to leaderboard for local storage

// hide questions once end of quiz activated 

// update leaderboard in local storage

// get leaderboard from local storage to review standing

// display high scores