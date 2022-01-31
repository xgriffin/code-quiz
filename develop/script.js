// Declaring variables
let questionsContainer = document.getElementById('questionsContainer');
let answersContainer = document.getElementById('answersContainer');
let nextQuestionBtn = document.getElementById('nextQuestionBtn');
let timer = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let timeLeft = 90;

startBtn.addEventListener('click', startQuiz);
nextQuestionBtn.addEventListener('click', nextQuestion);

// Keeps track of question index
let questionIndex = 0;

