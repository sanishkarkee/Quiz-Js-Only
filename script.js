// Step 1 : Define quiz data

const quizData = [
  {
    question: 'what does HTML stands for?',
    options: [
      'HyperText Markup Language',
      'Hyper Transfer Markup Language',
      'Hypertext Machine Language',
      'Hyperlink and text Markup Language',
    ],
    correct: 0,
  },

  {
    question: 'What does CSS stand for?',
    options: [
      'Computer Style Sheets',
      'Creative Style Sheets',
      'Coded Style Sheets',
      'Cascading Style Sheets',
    ],
    correct: 3,
  },

  {
    question: 'What does JavaScript primarily provide in web development?',
    options: ['Interactivity', 'Styling', 'Structure', 'Database Management'],
    correct: 0,
  },

  {
    question: 'What does HTTP stand for?',
    options: [
      'Hypertext Transfer Process',
      'Hypertext Transfer Protocol',
      'Hypertext Transmission Protocol',
      'Hypertext Transport Protocol',
    ],
    correct: 1,
  },

  {
    question: 'What does SEO stand for?',
    options: [
      'Search Engine Operations',
      'Search Enhancement Optimization',
      'Site Engagement Optimization',
      'Search Engine Optimization',
    ],
    correct: 3,
  },

  {
    question: 'What does PHP stand for?',
    options: [
      'Preprocessed Hypertext',
      'Personal Home Page',
      'Hypertext Preprocessor',
      'Private Home Page',
    ],
    correct: 2,
  },

  {
    question: 'What does SQL stand for?',
    options: [
      'Standard Query Language',
      'Structured Query Language',
      'Sequential Query Language',
      'Structured Quiz Language',
    ],
    correct: 1,
  },

  {
    question: 'What does XML stand for?',
    options: [
      'eXpanded Markup Language',
      'eXperimental Markup Language',
      'eXternal Markup Language',
      'eXtensible Markup Language',
    ],
    correct: 3,
  },

  {
    question: 'What does API stand for?',
    options: [
      'Automated Program Interface',
      'Application Programming Interface',
      'Advanced Programming Interface',
      'Automated Protocol Integration',
    ],
    correct: 1,
  },

  {
    question: 'What does URL stand for?',
    options: [
      'Uniform Resource Locator',
      'Universal Resource Locator',
      'Unified Resource Locator',
      'Unique Resource Locator',
    ],
    correct: 0,
  },

  {
    question: 'What does FTP stand for?',
    options: [
      'File Transmission Protocol',
      'File Transfer Process',
      'File Translation Protocol',
      'File Transfer Protocol',
    ],
    correct: 3,
  },

  {
    question: 'What does DOM stand for in web development?',
    options: [
      'Data Object Model',
      'Dynamic Object Model',
      'Document Object Model',
      'Design Object Model',
    ],
    correct: 2,
  },

  {
    question: 'What does LAN stand for in networking?',
    options: [
      'Large Area Network',
      'Local Area Network',
      'Longitudinal Area Network',
      'Limited Access Network',
    ],
    correct: 1,
  },

  {
    question: 'What does SSL stand for in web security?',
    options: [
      'Security Socket Layer',
      'Secure Server Language',
      'Safe Socket Layer',
      'Secure Sockets Layer',
    ],
    correct: 3,
  },

  {
    question: 'What does CDN stand for in web technology?',
    options: [
      'Centralized Data Network',
      'Content Delivery Network',
      'Cloud Delivery Network',
      'Content Distribution Network',
    ],
    correct: 1,
  },

  {
    question: 'What does IDE stand for in software development?',
    options: [
      'Interactive Development Environment',
      'Intuitive Development Environment',
      'Integrated Development Environment',
      'Internet Development Environment',
    ],
    correct: 2,
  },
];

// Step 2: Javascript initializations
const quiz = document.querySelector('#quiz');

const scores = document.querySelector('.score');

const answerElm = document.querySelectorAll('answer');

const [questionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    '#question, .option_1, .option_2, .option_3, .option_4'
  );

const submitBtn = document.querySelector('#submit');

let currentQuiz = 0;
let score = 0;

// Step 3: Load quiz functions

const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz];
  console.log(question, options);

  //   replacing static question with dynamic questions from js
  questionElm.innerText = `${currentQuiz + 1}: ${question}`;

  scores.innerText = `Your score: ${score}/${quizData.length}`;

  options.forEach(
    (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
  );
};

loadQuiz();

// Get selected answer from the button click
getSelectedOption = () => {
  //   let ans_index;
  //   answerElm.forEach((curOption, index) => {
  //     if (curOption.checked) {
  //       ans_index = index;
  //     }
  //   });
  //   return ans_index;
  let answerElement = Array.from(answerElm);
  return answerElement.findIndex((curElem) => curElem.checked);
};

// Deselected Answers
const deselectedAnswers = () => {
  return answerElm.forEach((curElem) => (curElem.checked = false));
};

submitBtn.addEventListener('click', () => {
  const selectedOptionIndex = getSelectedOption();
  console.log(selectedOptionIndex);

  //   Score dekhauna
  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score = score + 1;
  }
  //   submit press garne bittikai next question load hunxa
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    deselectedAnswers();
    loadQuiz();
  }
  //   Question sakiye paxi score dekhauna lai
  else {
    quiz.innerHtml = `
    <div class="result">
    <h2> 🏆Your score: ${score}/${quizData.length} correct answers </h2>
    <p>Congratulations on completing the quiz!🎉 </p>
    <button class="reload-button" onclick="location.reload()">Play Again 🔁</button>
    `;
  }
});
