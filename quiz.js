// Define an array of quiz questions and answers
// Define an array of quiz questions and answers
var quizQuestions = [
  {
    question: "Are you sure you`re HyoSeong?",
    options: ["Yes!", "No, I`m Tokki"],
    answer: 1
  },
  {
    question: "What kind of coffee does Aldar prefer? ",
    options: ["Сappuccino", "Espresso"],
    answer: 0
  },
  {
    question: "Why does Aldar love you? ",
    options: ["Because I am the best"],
    answer: 0
  }
];

// Get the start-quiz button
var startQuizButton = document.getElementById("start-quiz");
startQuizButton.addEventListener("click", startQuiz);

// Track the current question index
var currentQuestionIndex = 0;

// Function to start the quiz
function startQuiz() {
  // Remove the start-quiz button
  startQuizButton.style.display = "none";

  // Display the first question
  displayQuestion();
}

// Function to display a question
function displayQuestion() {
  var quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  var questionElement = document.createElement("div");
  questionElement.innerHTML = "<h3>Question " + (currentQuestionIndex + 1) + "</h3>";
  questionElement.innerHTML += "<p>" + quizQuestions[currentQuestionIndex].question + "</p>";

  var options = quizQuestions[currentQuestionIndex].options;
  for (var i = 0; i < options.length; i++) {
    var optionButton = document.createElement("button");
    optionButton.innerHTML = options[i];
    optionButton.addEventListener("click", checkAnswer);
    optionButton.setAttribute("data-index", i);
    questionElement.appendChild(optionButton);
  }

  quizContainer.appendChild(questionElement);
}

// ...


// Function to check the selected answer
function checkAnswer(event) {
  var selectedAnswerIndex = event.target.getAttribute("data-index");
  var correctAnswerIndex = quizQuestions[currentQuestionIndex].answer;

  if (selectedAnswerIndex == correctAnswerIndex) {
    event.target.style.backgroundColor = "green";
    quizQuestions[currentQuestionIndex].correct = true; // Add a new property to track if the answer is correct
  } else {
    event.target.style.backgroundColor = "red";
    quizQuestions[currentQuestionIndex].correct = false; // Add a new property to track if the answer is correct
  }

  // Add "selected" class to the clicked button
  event.target.classList.add("selected");

  // Wait for a short duration before proceeding to the next question
  setTimeout(function () {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      showResults();
    }
  }, 1000);
}


// ...


// Function to show the quiz results
// Function to show the quiz results
function showResults() {
  var numCorrect = 0;
  var quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  var resultContainer = document.getElementById("result");

  for (var i = 0; i < quizQuestions.length; i++) {
    if (quizQuestions[i].correct) {
      numCorrect++;
    }
  }

  if (numCorrect === quizQuestions.length) {
    resultContainer.innerHTML = "<h2>Congratulations! 🎉 <br>You answered all questions correctly. <br> And also congratulations on the fact that we have been dating for 300 days! I didn't forget this time :) I love you! ❤️</h2>";
    resultContainer.innerHTML += "<a href=\"//dpon.gift/en/gifts/3aFuzycR2qP/?utm_source=share&utm_medium=link\"><p>Here's your prize!</p></a>";
  } else {
    resultContainer.innerHTML = "<h2>Quiz Results</h2>";
    resultContainer.innerHTML += "<p>You answered " + numCorrect + " out of " + quizQuestions.length + " questions correctly.</p>";
  }
}


