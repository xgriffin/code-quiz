// Declaring variables
let questionsContainer = document.getElementById("questionsContainer");
let answersContainer = document.getElementById("answersContainer");
let nextQuestionBtn = document.getElementById("nextQuestionBtn");
let timer = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let timeLeft = 90;

startBtn.addEventListener("click", startQuiz);
nextQuestionBtn.addEventListener("click", nextQuestion);

// Keeps track of question index
let questionIndex = 0;

// Start quiz function
function startQuiz() {
  populateQuestion();
  startBtn.classList.add("hide");
  timer.classList.remove("hide");
  nextQuestionBtn.classList.remove("hide");
  questionsContainer.classList.remove("hide");
  answersContainer.classList.remove("hide");

  // Start timer function
  let startTimer = setInterval(function () {
    // decreasing timeLeft by 1
    timeLeft--;
    // // when count equals to 0, stop the function
    if (timeLeft === 0) {
      clearInterval(startTimer);
    }
    // display the current time
    timer.innerText = timeLeft;
  }, 1000);
}

function populateQuestion() {
  for (let i = 0; i < questions[questionIndex].answers.length; i++) {
    questionsContainer.innerHTML = questions[questionIndex].question;
    let btn = document.createElement("button");
    btn.innerText = questions[questionIndex].answers[i].text;
    btn.value = questions[questionIndex].answers[i].correct;
    btn.classList.add("btn");
    btn.addEventListener("click", checkAnswer);
    answersContainer.appendChild(btn);
  }
}

function nextQuestion() {
  resetState(answersContainer);
  resetState(questionsContainer);
  questionIndex++;
  populateQuestion();
  if (timeLeft <= 0 || questionIndex > questions.length) {
    clearInterval(startTimer);
    gameOver();
  }
}

function resetState(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function checkAnswer(event) {
  if (event.target.value == "false") {
    // substract 5 seconds if the answer is wrong
    timeLeft = timeLeft - 5;
    this.classList.add("wrongAnswer");
  } else {
    this.classList.add("rightAnswer");
    // skips to next question
    // nextQuestion();
  }
}

// win/lose condition
function gameOver() {}

// Questions database

const questions = [
  {
    question: "Commonly used data types DO not include:",
    answers: [
      { text: "Strings", correct: false },
      { text: "Booleans", correct: false },
      { text: "Alerts", correct: true },
      { text: "Numbers", correct: false },
    ],
  },
  {
    question: "The condition in an if/else statement is enclosed with:",
    answers: [
      { text: "Quotes", correct: false },
      { text: "Parenthesis", correct: true },
      { text: "Curly brackets", correct: false },
      { text: "Square brackets", correct: false },
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    answers: [
      { text: "Numbers and strings", correct: false },
      { text: "Other arrays", correct: false },
      { text: "Booleans", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    answers: [
      { text: "Quotes", correct: true },
      { text: "Curly brackets", correct: false },
      { text: "Parenthesis", correct: false },
      { text: "Commas", correct: false },
    ],
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "JavaSvript", correct: false },
      { text: "Terminal/bash", correct: false },
      { text: "For loops", correct: false },
      { text: "console.log", correct: true },
    ],
  },
];
