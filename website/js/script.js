// Quiz state
let currentMode = null;
let questions = [];
let currentQuestionIndex = 0;
let currentShuffledOptions = [];
const MAX_QUESTIONS = 7;

// DOM Elements
const startPage = document.getElementById("start-page");
const quizPage = document.getElementById("quiz-page");
const multipleChoiceBtn = document.getElementById("multiple-choice-btn");
const trueFalseBtn = document.getElementById("true-false-btn");
const backBtn = document.getElementById("back-btn");
const multipleChoiceAnswers = document.getElementById(
  "multiple-choice-answers",
);
const trueFalseAnswers = document.getElementById("true-false-answers");
const questionElement = document.getElementById("question");
const gameNameElement = document.getElementById("game-name");
const progressElement = document.getElementById("progress");
const nextBtn = document.getElementById("next-btn");
const playAgainElement = document.getElementById("play-again");

// API Configuration
const options = {
  method: "GET",
  headers: {
    "X-API-Key":
      "451dd69cf02828a90e9dd8cbcd7351a1dcc11518992ae7ebcb4cf094b5e9fecf",
  },
};

// Start quiz with selected mode
function startQuiz(mode) {
  currentMode = mode;
  currentQuestionIndex = 0;
  questions = [];
  startPage.classList.add("d-none");
  quizPage.classList.remove("d-none");
  questionElement.textContent = "Loading questions...";
  //playAgainElement.textContent = "";

  if (mode === "multiple-choice") {
    multipleChoiceAnswers.classList.remove("d-none");
    trueFalseAnswers.classList.add("d-none");
    fetchQuizData("mcq");
  } else {
    multipleChoiceAnswers.classList.add("d-none");
    trueFalseAnswers.classList.remove("d-none");
    fetchQuizData("tf");
  }
}

// Go back to start page
function goBack() {
  quizPage.classList.add("d-none");
  startPage.classList.remove("d-none");
  currentMode = null;
  questions = [];
  currentQuestionIndex = 0;
}

// Fetch quiz data from API
function fetchQuizData(format) {
  const url = `https://student-api-proxy.onrender.com/api/game-quiz.p.rapidapi.com/quiz/game?id=[1313,1343]&format=${format}&amount=${MAX_QUESTIONS}`;

  fetch(url, options)
    .then((response) => response.json())
    .then((result) => {
      console.log("Full API response:", result);

      // Handle different response structures
      let questionsData = null;

      // Check for proxied response: { data: { data: [...] } }
      if (result.data && result.data.data && Array.isArray(result.data.data)) {
        questionsData = result.data.data;
      }
      // Check for direct response: { data: [...] }
      else if (result.data && Array.isArray(result.data)) {
        questionsData = result.data;
      }

      if (questionsData) {
        console.log(`Received ${questionsData.length} questions from API`);
        // Limit to MAX_QUESTIONS
        questions = questionsData.slice(0, MAX_QUESTIONS);
        console.log(`Using ${questions.length} questions for quiz`);
        displayQuestion();
      } else {
        console.log("Unexpected response structure:", result);
        questionElement.textContent =
          "Error loading questions. Please try again.";
      }
    })
    .catch((error) => {
      console.log(error);
      questionElement.textContent =
        "Error loading questions. Please try again.";
    });
}

// Display current question
function displayQuestion() {
  if (currentQuestionIndex >= questions.length) {
    showResults();
    return;
  }

  const question = questions[currentQuestionIndex];

  // Update progress
  progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

  // Update game name if available
  if (question.extra && question.extra.content) {
    gameNameElement.textContent = question.extra.content;
    gameNameElement.classList.remove("d-none");
  } else {
    gameNameElement.classList.add("d-none");
  }

  // Update question text
  questionElement.textContent = question.question;

  // Clear previous selections
  document.querySelectorAll(".answer-box").forEach((box) => {
    box.classList.remove("selected", "correct", "incorrect");
    box.style.pointerEvents = "auto";
  });

  // Hide next button until answer is selected
  nextBtn.classList.add("d-none");

  if (currentMode === "multiple-choice") {
    displayMultipleChoiceAnswers(question);
  } else {
    displayTrueFalseAnswers(question);
  }
}

// Display multiple choice answers
function displayMultipleChoiceAnswers(question) {
  console.log("Question object:", question);
  const answerA = document.getElementById("answer-a");
  const answerB = document.getElementById("answer-b");
  const answerC = document.getElementById("answer-c");
  const answerD = document.getElementById("answer-d");

  // Combine correct and incorrect answers, then shuffle
  currentShuffledOptions = [
    question.options.correct,
    ...question.options.incorrect,
  ];
  shuffleArray(currentShuffledOptions);

  answerA.textContent = `A. ${currentShuffledOptions[0]}`;
  answerB.textContent = `B. ${currentShuffledOptions[1]}`;
  answerC.textContent = `C. ${currentShuffledOptions[2]}`;
  answerD.textContent = `D. ${currentShuffledOptions[3]}`;
}

// Display true/false answers
function displayTrueFalseAnswers(question) {
  console.log("True/False question:", question);
  console.log("Correct answer:", question.options.correct);
  // True/False buttons are static in HTML ("True" and "False")
  // Correct answer is in question.options.correct ("true" or "false" as string)
}

// Shuffle array in place
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Handle answer selection
function handleAnswerClick(event) {
  const clickedBox = event.target.closest(".answer-box");
  if (!clickedBox) return;

  const question = questions[currentQuestionIndex];
  const correctAnswer = question.options.correct;

  // Disable further clicks
  document.querySelectorAll(".answer-box").forEach((box) => {
    box.style.pointerEvents = "none";
  });

  // Determine if the clicked answer is correct
  let isCorrect = false;

  if (currentMode === "multiple-choice") {
    // Map data-answer (A/B/C/D) to the shuffled option index
    const answerMap = { A: 0, B: 1, C: 2, D: 3 };
    const selectedIndex = answerMap[clickedBox.dataset.answer];
    const selectedText = currentShuffledOptions[selectedIndex];
    isCorrect = selectedText === correctAnswer;

    // Always highlight the correct answer green
    const correctIndex = currentShuffledOptions.indexOf(correctAnswer);
    const correctLetter = ["A", "B", "C", "D"][correctIndex];
    const correctBox = multipleChoiceAnswers.querySelector(
      `[data-answer="${correctLetter}"]`,
    );
    correctBox.classList.add("correct");
  } else {
    // True/False mode
    const selectedValue = clickedBox.dataset.answer;
    isCorrect = selectedValue === String(correctAnswer).toLowerCase();

    // Always highlight the correct answer green
    const correctBox = trueFalseAnswers.querySelector(
      `[data-answer="${String(correctAnswer).toLowerCase()}"]`,
    );
    correctBox.classList.add("correct");
  }

  // If the user picked wrong, also mark their selection red
  if (!isCorrect) {
    clickedBox.classList.add("incorrect");
  }

  // Show next button
  nextBtn.classList.remove("d-none");
}

// Go to next question
function nextQuestion() {
  currentQuestionIndex++;
  displayQuestion();
}

// Show results when quiz is complete
function showResults() {
  questionElement.textContent = "Quiz Complete!";
  playAgainElement.textContent = "Reload to play again.";
  progressElement.textContent = `You answered ${questions.length} questions`;
  gameNameElement.classList.add("d-none");
  multipleChoiceAnswers.classList.add("d-none");
  trueFalseAnswers.classList.add("d-none");
  nextBtn.classList.add("d-none");
}

// Event Listeners
multipleChoiceBtn.addEventListener("click", () => startQuiz("multiple-choice"));
trueFalseBtn.addEventListener("click", () => startQuiz("true-false"));
backBtn.addEventListener("click", goBack);
nextBtn.addEventListener("click", nextQuestion);
multipleChoiceAnswers.addEventListener("click", handleAnswerClick);
trueFalseAnswers.addEventListener("click", handleAnswerClick);
