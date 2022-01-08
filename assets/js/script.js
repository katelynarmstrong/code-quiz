// questions
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
function hideQuestions(){
    questionsEl.setAttribute("hidden", true)
}

// start quiz when user hits begin button 
startBtn.addEventListener("click", startQuiz);

// function to start timer/quiz
function startQuiz() {
    // disable hidden questions function
    hideQuestions();
    questionsEl.removeAttribute("hidden");

    // initalize current question
    displayQuestion();

    // start timer
    intervalID = setInterval(timerCountdown, 1000);
};

// create a countdown function for the timer

function timerCountdown(){
    time_remaining--;
    if (time_remaining < 0) {
        endQuiz();
    }
    timerDisplay.textContent = time_remaining; 
}

// create function to display quiz questions 

function displayQuestion(){
    let question = questions[currentQuestion];
    let answerChoice = question.choices;

    let questionEl = document.querySelector("#question-text");
    questionEl.textContent = question.questionText;

    for (var i = 0; i < answer-choices.length; i++){
        let answerChoice = answerChoices[i];
        let answerBtn = document.querySelector("#choice"+i);
        answerBtn.textContent = answerChoice;
    }   
}

// when user clicks on answer, determine if its correct or incorrect

document.querySelector("#answer-choices").addEventListener("click",checkAnswer);


// determine if content for selected button and correct answer is the same 
function correctAnswer(answerBtn){
    return answerBtn.textContent === questions[currentQuestion].answer;
}

// check to see if answer selected is correct
function checkAnswer(event){
    let answerBtn = event.target; 
    // correct answer increases the score 
    if (correctAnswer(answerBtn)){
        score = score + 20;
    }
    // incorrect answer decreases the time remaining 
    else {
        if (time_remaining > 10){
            time_remaining = time_remaining - 10;
       }
       else{
           time_remaining = 0;
           endQuiz();
       }
    }

    // go on to next question 
    currentQuestion++;

    // if there are no more questions, end quiz
    if (currentQuestion < questions.length){
        displayQuestion();
    }
    else{
        endQuiz();
    }
}

document.querySelector("#answer-choices").addEventListener("click", checkAnswer)


function endQuiz(){
    let finalScore = document.querySelector("#score")
    finalScore.textContent = "You scored " + score + " points!";
    document.querySelector("#time-remaining").setAttribute("hidden", true);
    document.querySelector("#question-text").setAttribute("hidden", true);
    document.querySelector("#answer-choices").setAttribute("hidden", true);
}

// when user hits submit button it adds their score and initials to the leaderboard
var submitButton = document.querySelector("#initials-btn")

submitButton.addEventListener("click", saveScore);

// create function to save score of user
function saveScore(event){
    // disable refresh 
    event.preventDefault();

    // cannot have initals be null 
    let initials = document.querySelector("#initials");
    if (!initials.value){
        alert("Please enter your initials.");
        return;
    }

    let highScores = {
        initials: initials.value,
        userScore: score
    };

    // add user to leaderboard for local storage
    updateLeaderboard(highScores);

    // hide questions because game is over 
    hideQuestoins();

    // show the top scores
    displayLeaderboard();
}

// update leaderboard in local storage
function updateLeaderboard(highScores){
    let leaderboard = getLeaderboard();
    leaderboard.push(highScores);
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}

// get leaderboard from local storage 
function getLeaderboard(){
    let storedLeaderboard = localStorage.getItem("leaderboard");
    // if nothing in local storage add to existing 
    if (storedLeaderboard !== null){
        let leaderboard = JSON.parse(storedLeaderboard);
        console.log(leaderboard)
        return leaderboard;
    }
    else{
        leaderboard = [];
    }
    return leaderboard;
}

// display high scores from least to greatest
function sortLeaderboard(){
    let leaderboard = getLeaderboard();
    if (!leaderboard){
        return;
    }

    leaderboard.sort(function(a, b){
        return b.userScore - a.userScore;
    });

    return leaderboard;
}

// 
function displayLeaderboard(){
    var leaderboardList = document.querySelector("#leaderboard-list");
    leaderboardList.innerHTML = "";
    let leaderboard = sortLeaderboard();
    for (let i = 0; i < leaderboard.length; i++){
        let userEntry = leaderboard[i];
        let newScore = document.createElement("li");
        newScore.textContent = 
            userEntry.initials + " : " + userEntry.userScore;
        leaderboardList.append(newScore);
    }
}