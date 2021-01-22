
// So, I gave you a three-step todo list earlier, but I've changed that to five steps:
// 1. Display questions as buttons 
// 2. Let user click on buttons
// 3. If user clicked the right button, increase their score. Otherwise, decrease their time
// 4. Display the next question, or display their score if they have finished the quiz
// 5. Ask for their initials to save the score in local storage (local storage)

var questionDiv = document.querySelector("#cardQuestions");
var questionNum = 0 

let questions = [ 
    {
        Q: "What is a boolean?",
        A: "True or False",
        answerArray: ["If and Else", "True or False", "For and While loops", "Roastbeef Sandwich"]
    },
    {
        Q: "How is a string identified?",
        A: "They are writen between single or double quotes",
        answerArray: [" as a T or F question", "writen between single or double quotes", "seperated by + and , ", "none of the above"]
    },
    {
        Q: "Define a Variable?",
        A: "Container for storing data values",
        answerArray: ["An if else if statment", "", "Objects that add values together", "Container for storing data values"]
    },
    {
        Q: "How are functions executed?",
        A: "When something calls or invokes it",
        answerArray: ["By way of a click", "When and operator is subtracted from it", "When something calls or invokes it", "When the style sheet is called"]
    },
    {
        Q: "What are loops used for?",
        A: "To execute a block of code a number of times",
        answerArray: ["To exucute an if else if statements", "To identify a boolean", "To stop a function", "To execute a block of code a number of times"]
    },
    {
        Q: "What is Global Scope?",
        A: "Varaibles declared outside a function",
        answerArray: ["Varaibles declared in HTML", "Variables declared outside a function", "The run time of a loop", "Only recognized inside their functions"]
    }
];   

function renderQuestion() {
    console.log("question " + questionNum)
    var question = document.createElement("p") 
    question.textContent = questions [questionNum].Q;
    questionDiv.appendChild(question);
    questionNum ++; 
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
