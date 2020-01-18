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

var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("questions");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
var choiceD = document.getElementById('D');
var timeLeft = 90;
var HighScoresEl = document.getElementById('link');
var HighScores = [];

var progress = document.getElementById('progress');

var scoreContainer = document.getElementById('scoreContainer');
var scoreText = document.getElementById('score-text');

let lastQuestionIndex = questions.length - 1; 

let runningQuesitonIndex = 0;

// tying a function to render quesitons in HTML through JavaScript 
function renderingQuestions(){
    let q = quesitons[runningQuesitonIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
};

//varaibles and functions for timer gauge
const questionTime = 10; // 10 sec per question
const gaugeWidth = 180; // pixels
let count = 0;
const gaugeProgressUnit = gaugeWidth/questionTime;

function counterRender(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = gaugeProgressUnit * count + "px" ;
        count++;


    } else {
        count = 0;
        answerIsWrong();
        if (runningQuesitonIndex < lastQuestionIndex) {
            runningQuesitonIndex++;
            question();
        } else { clearInterval(TIMER);
            
        
        
        }

    }
};

let TIMER = setInterval(counterRender,1000);

function checkAnswer(answer){
    if(questions[runningQuesitonIndex].correct == answer){
        score++;
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
};
