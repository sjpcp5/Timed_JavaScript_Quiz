// HAVES:
// Array of questions1
// HTML Interface--1 
// Start Button1
// Timer (text box)1
// Button "View high scores"1
// Div to show high scores1
// Instructions
// Text box for the question
// Div to hold buttons for answers
// Buttons for the answers
// Feedback text box (right or wrong)
// End screen (Score)
// Variables:
// Time left
// High scores (array)
// Index of current question
// Score
// Things to do:
// Start Quiz: 
// 1 Hide everything unnecessary
// 2 Display the first question
// 3 start timer
// Display Next Question:
// 1 clear question.innerText 
// 2 display question 
// 2a use question index to get question text
// 2b update question.innerText
// 3 display buttons for answers using a for loop
// 3a delete all buttons in the div where buttons go
// 3b make a for loop that iterates over the answers
// 3c Make a button for each answer
// 3d Connect the button to the answer function
// 3e Add the button to the div
// 4 connect the buttons to the scoring function
// Score an Answer:
// 1 if they're wrong subtract time (using the current question index)
// 2 update feedback
// 3 update question index
// 4 if they're done, display score
// Timer Tick:
// 1 Decrement time left
// 2 update display
// 3 if they're out of time, display score
// Show high scores:
// 1 hide unnecessary stuff
// 2 display high scores
// Display end screen:
// 1 hide unnecessary stuff
// 2 display score
// 3 if they made high score list, add them

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D');
var timeLeft = 90;
var HighScoresEl = document.getElementById('link');
var HighScores = [];

var progress = document.getElementById('progress');

var scoreContainer = document.getElementById('scoreContainer');
var scoreText = document.getElementById('score-text');



const lastQuestionIndex = questions.length -1; 
let runningQuestionIndex = 0;

//varaibles and functions for timer gauge
const questionTime = 10; // 10 sec per question
const gaugeWidth = 150; // pixels
let count = 0;
const gaugeProgressUnit = gaugeWidth/questionTime;
let TIMER;
let score = 0;

// tying a function to render quesitons in HTML through JavaScript 
function renderingQuestions(){
    let q = questions[runningQuestionIndex];
    questionEl.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    console.log(q.question)
    console.log(q)
};

start.addEventListener("click", startQuiz);

// start quiz funciton with timer
function startQuiz(){
    start.style.display = "none";
    renderingQuestions();
    quiz.style.display = "block";
    counterRender();
    renderProgress();
    TIMER =setInterval(counterRender,1000);
    
};



function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++)
    { progress.innerHTML += "<div class= 'prog' id="+ qIndex +"></div>";
    };
};



function counterRender(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = gaugeProgressUnit * count + "px" ;
        count++;


    } else {
        count = 0;
        answerIsWrong();
        if (runningQuestionIndex < lastQuestionIndex) {
            runningQuestionIndex++;
            renderingQuestions();
        } else { 
            // end quiz and show score
            clearInterval(TIMER);
            scoreRender();
                   
        }

    }
};


function checkAnswer(answer){
  if(answer == questions[runningQuestionIndex].answer){
        score++;
        console.log(score)
        console.log(checkAnswer);
        console.log(answer);
        console.log(runningQuestionIndex);
        answerIsCorrect();
    } else {
        answerIsWrong();
    };

    count = 0;
        if (runningQuestionIndex < lastQuestionIndex) {
            runningQuestionIndex++;
            renderingQuestions();
        } else { 
            // end quiz and show score
            clearInterval(TIMER);
            scoreRender();
                   
        };

};

function answerIsCorrect(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "#0f0"
};

function answerIsWrong(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "#f00"

};

/* tenary operator if statement if(Y == "one") { X = 1; } else { X = 0;}
else if statement 
if( Y == "one"){ 
    X = 1; 
    } else if (Y == "zero"){
     X = 0; 
    } else {
    X = 2; 
}  */

function scoreRender(){
    scoreContainer.style.display = "block";
    let scorePerCent = Math.round(100 * score / questions.length);
    let img = ( scorePerCent >= 80) ? "img/5.png":
                (scorePerCent >= 60) ? "img/4.png":
                (scorePerCent >= 40) ? "img/3.png":
                (scorePerCent >= 20) ? "img/2.png": "img/1.png";

    scoreContainer.innerHTML = "<img src=" + img + ">";
    scoreContainer.innerHTML = "<p>" + scorePerCent + "%</p>";
}           

