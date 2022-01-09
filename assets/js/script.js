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
var score = 0;
var quizOver = false;
var time_remaining = 60;
currentQuestion = 0;

// Reference variables to html 
var questionsEl = document.querySelector("#questions");
var startBtn = document.querySelector("#start-btn")
let timerDisplay = document.querySelector("#timer")

// function to hide quiz before user hits begin

// hide instructions and start button once quiz begins

// start quiz and timer when user hits start button 

// function to start quiz with timer

// disable hidden feature

// create function to display quiz questions 

// when user clicks on answer, determine if its correct or incorrect

// correct answer increases the score 

// incorrect answer decreases the time remaining 

// go on to next question 

// if there are no more questions, end quiz

// when user hits submit button it adds their score and initials to the leaderboard

// create function to save score of user

// Ensure high score saves to see later 
    event.preventDefault();

// add user to leaderboard for local storage

// hide questions once end of quiz activated 

// update leaderboard in local storage

// get leaderboard from local storage to review standing

// display high scores