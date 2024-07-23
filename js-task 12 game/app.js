const data = [
    {
      id: "1",
      title: "Çempionlar liqasını 5 dəfə qaldıran klub?",
      answers: [
        {
          id: "1",
          answer: "Liverpul",
        },
        {
          id: "2",
          answer: "Milan",
        },
        {
          id: "3",
          answer: "Barcelona",
          trueAnswer: true,
        },
        {
          id: "4",
          answer: "Mançester",
        },
      ],
    },
    {
      id: "2",
      title: "Bu adlardan hansı Şekspir pyesinin başlığında yoxdur?",
      answers: [
        {
          id: "1",
          answer: "Darren",
          trueAnswer: true,
        },
        {
          id: "2",
          answer: "Romeo",
        },
        {
          id: "3",
          answer: "Macbeth",
        },
        {
          id: "4",
          answer: "Hamlet",
        },
      ],
    },
    {
      id: "3",
      title:
        "Bu proqram cütlərindən hansı təxminən eyni xidmət növünü təklif edir?",
      answers: [
        {
          id: "1",
          answer: "Snapchat və Grubhub",
        },
        {
          id: "2",
          answer: "Lyft və Uber",
          trueAnswer: true,
        },
        {
          id: "3",
          answer: "Whatsapp və SHAREit",
        },
        {
          id: "4",
          answer: "Tiktok və Spotify",
        },
      ],
    },
    {
      id: "4",
      title: "Kraliça Anna hansı ingilis monarxının qızı idi?",
      answers: [
        {
          id: "1",
          answer: "Henry VIII",
        },
        {
          id: "2",
          answer: "James II",
          trueAnswer: true,
        },
        {
          id: "3",
          answer: "Viktoriya",
        },
        {
          id: "4",
          answer: "William I",
        },
      ],
    },
    {
      id: "5",
      title: "İlk teleskop neçənci ildə düzəlib?",
      answers: [
        {
          id: "1",
          answer: "1589",
        },
        {
          id: "2",
          answer: "1704",
        },
        {
          id: "3",
          answer: "1608",
          trueAnswer: true,
        },
        {
          id: "4",
          answer: "1622",
        },
      ],
    },
  ];

let start = document.querySelector(".start");
let game = document.querySelector(".game");
let next = document.querySelector(".next");
let endGame = document.querySelector(".endGame");
let question = document.querySelector(".question");
let answers = document.querySelectorAll(".answer");
let points = document.querySelector(".points");

let currentQuestionIndex= 0
let correctAnsNum = 0

start.onclick = () => {
    start.classList.add("none")
    next.classList.remove("none")
    game.classList.remove("none")
    endGame.classList.add("none")
    loadQueston()
    points.innerText = `Duzgun cavablarin sayi ${0}`
    
}

next.onclick = () => {
  currentQuestionIndex++
  if (currentQuestionIndex < data.length) {
    loadQueston()
  } else {
      next.classList.add("none")
      endGame.classList.remove("none")
  }
  points.innerText = `Duzgun cavablarin sayi ${correctAnsNum}`
}

endGame.onclick = () => {
  game.classList.add("none")
  start.classList.remove("none")
  currentQuestionIndex = 0
  correctAnsNum = 0
}




function loadQueston() {
  let currentQuestion = data[currentQuestionIndex]
  question.innerText = currentQuestion.title
  answers.forEach((elem, index, array) => {
    elem.innerText = currentQuestion.answers[index].answer
    elem.onclick = () => checkAnswer(currentQuestion.answers[index].trueAnswer, elem)
    
  }) 
}


function checkAnswer(correct, elem) {
  
  if (correct) {
    correctAnsNum++
    elem.style.background = "green"
    
    
  } else {
      elem.style.background = "red"
      
  }
  elem.onclick = null;
  setTimeout(() => {
    elem.style.backgroundColor = "";
    next.click();
}, 100);
}

