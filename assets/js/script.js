// questions for quiz
var questions = [
    {
        questionText: "Inside which HTML element do we put the JavaScript?",
        choices:["a. <scripting>", "b. <javascript>", "c. <js>", "d. <script>"],
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
        answer:"b. function=myFunction()"
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
var currentIndex = 0;
var timer = 60;
var score = 0;

// Reference variables to html 
var questionsEl = document.querySelector("#questions");
var question= document.getElementById('question-text')
var startBtn = document.querySelector("#start-btn")
var timerDisplay = document.getElementById("timer")
var options = document.getElementById('answer-choices')
var scoreDisplay = document.getElementById('score')
var scores = document.getElementById('scores')


// start the quiz
startBtn.addEventListener('click', function() {
    document.getElementById('button-container').setAttribute('class', 'hidden')
    renderQuestions()
    startTimer()
})

function startTimer() {
    timerDisplay.textContent = 'Time Remaining: ' + timer
    var currentTime = setInterval(function() {
        timer--
        if(timer === 0 || currentIndex > questions.length - 1) {
            clearInterval(currentTime)
            endQuiz()
        }
        timerDisplay.textContent = 'Time Remaining: ' + timer

    }, 1000)
}

// end the quiz
function endQuiz() {    
    document.getElementById('page-content').setAttribute('class', 'hidden')

    scoreDisplay.textContent = "Final Score:" + score

    // end of quiz variables
    var initials = document.createElement ("input");
    initials.setAttribute('placeholder', 'Your Initials');
    scores.append(initials)

    var submitBtn = document.createElement('button')
    submitBtn.textContent = "Save Score!"
    submitBtn.classList.add('submit-btn');
    scores.append(submitBtn)
    
    var scoreList = {
        finalScore: score,
        initials: initials
    };
    // Save Score actions to local storage
   submitBtn.addEventListener('click', function() {
       
       var initialsOnSubmit = initials.value
       window.location.href = ("./highscores.html");
    localStorage.setItem("score", score);
    localStorage.setItem("initials", initialsOnSubmit);
    event.preventDefault();
   })
}

// functions to cycle questions
function renderQuestions() {
    if (currentIndex > questions.length - 1) {
        return
    }
    options.textContent = ''
    document.getElementById('score').textContent = 'Current Score: ' + score
    question.textContent = questions[currentIndex].questionText

    for(var i = 0; i < questions[currentIndex].choices.length; i++) {
        var answerBtn = document.createElement('button')
        answerBtn.classList.add('answer-btn');
        answerBtn.textContent = questions[currentIndex].choices[i]
        options.append(answerBtn)
// answer effects
        answerBtn.addEventListener('click', function(event) {
            if(event.target.textContent === questions[currentIndex].answer) {
                score += 20
            } else {
                timer -= 10
            }
            currentIndex++
            renderQuestions()
        })
    }
}



