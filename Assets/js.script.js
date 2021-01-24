
// So, I gave you a three-step todo list earlier, but I've changed that to five steps:
// 1. Display questions as buttons 
// 2. Let user click on buttons
// 3. If user clicked the right button, increase their score. Otherwise, decrease their time
// 4. Display the next question, or display their score if they have finished the quiz
// 5. Ask for their initials to save the score in local storage (local storage)

//revised ques/answer array
let questionsArray = [ 

    question1 ={
        question: "What is a boolean?",
        correctAnswer: "True or False",
        answerArray: ["If and Else", "True or False", "For and While loops", "A string"]
    },
    question2 = {
        question: "How is a string identified?",
        correctAnswer: "Contained within single or double quotes",
        answerArray: ["Can be aswered as T or F", "Writen between single or double quotes", "seperated by plus sign and comma ", "Contained within square brackets"]
    },
    question3 = {
        question: "Define a Variable?",
        correctAnswer: "Container for storing data values",
        answerArray: ["An if else if statment", "A method of operation", "Objects that add values together", "Container for storing data values"]
    },
    question4 = {
        question: "How are functions executed?",
        correctAnswer: "When something calls or invokes them",
        answerArray: ["By way of a click", "When an operator is subtracted from it", "When something calls or invokes them", "When the style sheet is called"]
    },
    question5 = {
        question: "What are loops used for?",
        correctAnswer: "To execute a block of code a number of times",
        answerArray: ["To exucute an if else if statements", "To identify a boolean", "To stop a function", "To execute a block of code a number of times"]
    },
    question6 = {
        question: "What is Global Scope?",
        correctAnswer: "Varaibles declared outside a function",
        answerArray: ["Varaibles declared in HTML", "Variables declared outside a function", "The run time of a loop", "Only recognized inside their functions"]
    }
];   

//added user score and high score array and score variable
let highScorers = [];

//Header
let viewScores = document.getElementById('view-scores');
let timer = document.getElementById('timer');
console.log("view scores: ", viewScores);
console.log("timer: ", timer);

//add main section start, question, initial pages
//Start Page
let startPage = document.getElementById('start-page');
let startButton = document.getElementById('start-button');

//Question Page
let questionPage = document.getElementById('question-page');
let question = document.getElementById('question');
let answers = document.getElementById('answers');
let feedback = document.getElementById('feedback');


//Initials Page
let intitialEnter = document.getElementById('initial-enter');
let displayScore = document.getElementById('display-score');
let initialText = document.getElementById('initial-text');
let submitInitial = document.getElementById('submit-initial');

//Added Highscore Page
let highscorePage = document.getElementById('highscore-page');
let highscoreContainer = document.getElementById('highscore-container');
let goBack = document.getElementById('go-back');
let clearHighscores = document.getElementById('clear-highscores');


let pageArray = [startPage, questionPage, intitialEnter, highscorePage];

//adds eventListener funcitonality to each button on index.html
viewScores.addEventListener("click", openHighscorePage);
startButton.addEventListener("click", startQuiz);
submitInitial.addEventListener("click", organizeHighscores);
clearHighscores.addEventListener("click", clearHighScorers);
goBack.addEventListener("click", openStartPage);



//Takes a function of all DOM pointers as an array and adds class hide to each
//Used in startQuiz(), openInitialsPage(), openHighscorePage(), and openStartpage()
function hideAll() {
    for (let i = 0; i < pageArray.length; i++) {
        if (!pageArray[i].classList.contains('hide')) {
            pageArray[i].classList.add('hide');
        }
    }
}
//----------------------------------
//Adds hide class to timer
//Used in openInitialsPage() and openHighscorePage()
function hideTimer() {
    if (!timer.classList.contains('hide')) {
        timer.classList.add('hide');
    }
}

let isQuizzing = false; //Will be True when questions are on the screen
let quizTime = 50; //quizTime is how many seconds the test will last.
let secondsLeft; //current number of seconds left on timer
timer.textContent = "Time: " + quizTime; //Prints initial timer on screen
let questionIndex;
let finalScore = 0;
let numberCorrect;
let numberIncorrect;

//Outputs a randomized array including the numbers 0 to the length of an array
//Used to randomize the order of the questions
function questionOrder(arr) {
    let arrIndex = [];
    for (let i = 0; i < arr.length; i++) {
        arrIndex.push(i);
    }
    return arrayShuffle(arrIndex);
}

//Used in conjunction with questionUpdater() for a random order of questions
let questionArrayOrder;

