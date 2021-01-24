
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

//added user score and high score array
let highScorers = [];

//Header
let viewScores = document.getElementById('view-scores');
let timer = document.getElementById('timer');
console.log("view scores: ", viewScores);
console.log("timer: ", timer);
//-------------------------------------------STOPPED





//renders questions at the html <p> site
function renderQuestion() {
    console.log("question " + questionNum)
    var question = document.createElement("p") 
    question.textContent = questions [questionNum].Q;
    questionDiv.appendChild(question);
    questionNum ++; 
    }

//buttons to show answer choices
function answerArray(){
    console.log("answer" + answerArrayNum)
    var answer = document.createElement()
    answer.textContent = answer [answerArrayNum].A;
    answerArrayNum.appendChild(answer);
    answerArrayNum ++;
}    


var countDown = document.getElementById("countdown")
var timer = 30;
countDown.textContent = "Time: "+ timer;
var secondsLeft;

document.getElementById("startQuiz").addEventListener("click", function(){

    secondsLeft = timer;
    
    var downloadTimer = setInterval(function function1() {
        secondsLeft--;

        countDown.textContent = "Time: " + secondsLeft;

        if(secondsLeft < 0 ) {
            clearInterval(downloadTimer);
            alert("Time is up");
        }
    },1000);
    renderQuestion();
});




//     myVar = setInterval(function () {
//         timerCount--;
//         timerElement.textContent = timerCount;
//         if (--timerCount >= 0) {
//         clearInterval(timer);
//         }
//     }, 15000);
// }
// var timerElement = document.querySelector(".timer-count");
        // var startButton = document.querySelector(".start-button")
        // var timer;
        // var timerCount;
// arrays to randomize flashing the questions on cards in the form of an alert
// arrays to create possible answers to each question 
// may need init function
// user will start timer when clicked and has 2 minutes to finish 
//set timer when button is clicked
//your score increases with each correct answer
