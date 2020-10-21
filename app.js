const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is an example of a low-level programming language?',
      answers: [
        'COBOL',
        'Rust',
        'Assembly',
        'Prolog'
      ],
      correctAnswer: 'Assembly'
    },
    {
      question: 'What is information provided to the computer from a person or from another computer, through devices such as the keyboard, mouse or touch screen?',
      answers: [
        'Input',
        'Output',
        'Keystrokes',
        'Gibberish'
      ],
      correctAnswer: 'Input'
    },
    {
      question: 'What is a trigger from user input or from the computer such as a mouse click, a key press, or a timer?',
      answers: [
        'Input',
        'Event',
        'Listener',
        'Backlog'
      ],
      correctAnswer: 'Event'
    },
    {
      question: 'What is a prioritized list of features or user stories to add to a program?',
      answers: [
        'Input',
        'Traffic Jam',
        'Listener',
        'Backlog'
      ],
      correctAnswer: 'Backlog'
    },
    {
      question: 'What is information that has continuous values instead of jumping from one value without passing through the values between?',
      answers: [
        'Digital',
        'Method',
        'Analog',
        'Optical'
      ],
      correctAnswer: 'Analog'
    },
    {
      question: 'What are conditional expressions that are either true or false?',
      answers: [
        'True',
        'Tertary Operators',
        'Conditional statements',
        'Boolean Expression'
      ],
      correctAnswer: 'Boolean Expression'
    },
    {
      question: 'What is a number that contains a decimal point?',
      answers: [
        'Float',
        'Integer',
        'Real Number',
        'Precision'
      ],
      correctAnswer: 'Float'
    },
    {
      question: 'What is the network of computer networks which communicate through common protocols for accessing information contained inside the computers?',
      answers: [
        'World Wide Web',
        'Internet',
        'Wide Area Network',
        'Local Area Network'
      ],
      correctAnswer: 'Internet'
    },
    {
      question: 'What is a computer program that provides services to other computer programs (and their users) in the same or other computers, it can hold the data/web contet and delivers the web page?',
      answers: [
        'Server',
        'Local Host',
        'Mainframe',
        'Tandy 1000'
      ],
      correctAnswer: 'Server'
    },
    {
      question: 'What is a group of computers that keep track of the IP address for every domain name on the internet?',
      answers: [
        'DNS',
        'IPv6',
        'IPv4',
        'MAC'
      ],
      correctAnswer: 'DNS'
    },
    {
      question: 'What is a procedure to follow, especially using iteration and conditionals?',
      answers: [
        'Algorithm',
        'For Loop',
        'Lambda',
        'Polymorphism'
      ],
      correctAnswer: 'Algorithm'
    },
    {
      question: 'What is the process of taking a finished product and figuring out how it works, deducing how software works based on how it behaves called?',
      answers: [
        'A Felony',
        'Tech Theft',
        'Reverse Engieering',
        'Corporate Espionage'
      ],
      correctAnswer: 'Reverse Engieering'
    },
    {
      question: 'What is a 2D image or animatio that is integrated into a larger scene called?',
      answers: [
        'Picture',
        'Image',
        'Meme',
        'Sprite'
      ],
      correctAnswer: 'Sprite'
    },
    {
      question: 'Who was Ada Lovelace?',
      answers: [
        'Some old lady',
        'How should I know?',
        'One of the first computer programmers',
        'A Judge?'
      ],
      correctAnswer: 'One of the first computer programmers'
    },
    {
      question: 'Grace Hopper held what rank?',
      answers: [
        'Rear Admiral',
        'Captain',
        'Corporal',
        'Ensign'
      ],
      correctAnswer: 'Rear Admiral'
    },
    {
      question: 'What is the difference between a library and a framework?',
      answers: [
        'They are interchangeable terms.',
        'Libraries are dependent upon frameworks.',
        'They both suck, vanilla is best',
        'A Library is a tool but frameworks are a way of life.'
      ],
      correctAnswer: 'A Library is a tool but frameworks are a way of life.'
    },
    {
      question: 'Computers are what?',
      answers: [
        'Realy Smart',
        'Stupid',
        'Everywhere',
        'A government way to spy on us all'
      ],
      correctAnswer: 'Stupid'
    },
    {
      question: 'What is recursion?',
      answers: [
        'Uhh......',
        'A function callback?',
        'A method of solving aproblem where the solution depends on smaller instances of that same problems',
        'A method of forcing the network and programs to act in unison when solving complex problems.'
      ],
      correctAnswer: 'A method of solving aproblem where the solution depends on smaller instances of that same problems'
    },
    {
      question: 'What is polymorphism?',
      answers: [
        'It is a concept that states objects of different types can be accessed through the same interface.',
        'It is a OOP paradigm that allows children to gain properties of parent classes.',
        'It is some fancy computer speak for making a program function with better syntax.',
        'I like bacon.....'
      ],
      correctAnswer: 'It is a concept that states objects of different t ypes can be accessed through the same interface.'
    },
    {
      question: 'What are the four basics of Objected Oriented Programming?',
      answers: [
        'Inheritance, Polymorphism, Programming, User interaction',
        'Encapsulation, Inheritance, Polymorphism, Programming',
        'Abstraction, Encapsulation, Inheritance, Polymorphism',
        'Abstraction, Programming, Dynamic Loading, Memory Management'
      ],
      correctAnswer: 'Abstraction, Encapsulation, Inheritance, Polymorphism'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

const grabStart = () => {
  return ` 
  <div class="block">
    <h3>Ready to test your fundamental computer science knowledge?</h3>
    <button id="beginQuiz">
      Click here!<br />
    </button>
    <p class="tally">20 questions total!</p>
  </div>`
}

const grabQuestion = (i) => {
  store.questionNumber++
  let option = store.questions[i].answers
  return `
          <div class="block questions">
            <h3>Question ${store.questionNumber}</h3>
            <h2>${store.questions[i].question}</h2>
            <hr>
            <form id="questionForm">                
              <input type="radio" id="A" value="${option[0]}" name="spaceqs" required></input>
              <label for="A">${option[0]}</label>
              <input type="radio" id="B" value="${option[1]}" name="spaceqs" required></input>
              <label for="B">${option[1]}</label>
              <input type="radio" id="C" value="${option[2]}" name="spaceqs" required></input>
              <label for="C">${option[2]}</label>
              <input type="radio" id="D" value="${option[3]}" name="spaceqs" required></input>
              <label for="D">${option[3]}</label>
              <input type="submit" value="submit">
            </form>
            <p class="tally">Correct: ${store.score}, Incorrect: ${i - store.score}</p>
          </div>`
}

const grabAnswer = (results, i) => {
  return `
  <div class="block">
    <h3>${results === "correct" ? "You got it!" : "Sorry..."}</h3>
    <hr>
<h3>The correct answer was: ${store.questions[i].correctAnswer}</h3>
    <button id="nextQuestion">Next Question</button>
    <p class="tally">Correct: ${store.score}, Incorrect: ${store.questionNumber - store.score}</p>
  </div>`
}

const grabResults = () => {
  return `<h2>Final Screen</h2>
          <div class="block">
            <h3>Quiz has concluded</h3>
            <p>You answered ${store.score} out of ${store.questions.length} questions correctly!</p>
            <button id="restartQuiz">Try again</button>
            <p></p>
            <p><i>"Developing a compiler was a logical move; but in matters likes this, you don't run against logic - you run against people who cannot change their minds."</i></p>
            <p>- Grace Hopper</p>
          </div>`
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
const renderQuiz = (callback) => {
  if (store.quizStarted === false) {
    $('main').html(grabStart());
  }
  if (store.quizStarted === true) {
    $('main').html(callback);
  }
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

let index = 0;

const tally = () => {

  $('main').on('submit', event => {
    event.preventDefault()
    let correct = store.questions[index].correctAnswer
    let checked = $('input[name="spaceqs"]:checked').val()
    if (correct.includes(checked)) {
      store.score++
      renderQuiz(grabAnswer("correct", index))
      console.log("Yay!")
    } else {
      renderQuiz(grabAnswer("incorrect", index))
      console.log("lame...")
    }
    index++;
  })
}

const nextQuestion = () => {
  $('main').on('click', '#nextQuestion', event => {
    if (store.questionNumber === store.questions.length) {
      renderQuiz(grabResults())
    }
    else { renderQuiz(grabQuestion(index)) }
  }
  )
}

const beginQuiz = () => {
  $('main').on('click', '#beginQuiz', event => {
    store.quizStarted = true;
    $('main').html(grabQuestion(0))
  })
}

const restartQuiz = () => {
  $('main').on('click', '#restartQuiz', event => {
    index = 0;
    store.quizStarted = false;
    store.score = 0;
    store.questionNumber = 0;
    renderQuiz(grabStart());
  })
}

const main = () => {
  renderQuiz();
  beginQuiz();
  tally();
  nextQuestion();
  restartQuiz();
}

//Matrix script found at CSSDeck.com
var s = window.screen;
var width = q.width = s.width;
var height = q.height = s.height;
var letters = Array(256).join(1).split('');

var draw = function () {
  q.getContext('2d').fillStyle='rgba(0,0,0,.05)';
  q.getContext('2d').fillRect(0,0,width,height);
  q.getContext('2d').fillStyle='#0F0';
  letters.map(function(y_pos, index){
    text = String.fromCharCode(3e4+Math.random()*33);
    x_pos = index * 10;
    q.getContext('2d').fillText(text, x_pos, y_pos);
    letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
  });
};
setInterval(draw, 33);


$(main);

