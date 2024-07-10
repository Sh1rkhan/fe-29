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

let start = document.querySelector(".start")
let game = document.querySelector(".game")
let next = document.querySelector(".next")
console.log(next);

start.onclick = function () {
    start.classList.add("none")
    game.classList.remove("none")
}



let question = document.querySelector(".question")
let varA = document.querySelector(".varA")
let varB = document.querySelector(".varB")
let varC = document.querySelector(".varC")
let varD = document.querySelector(".varD")
  



console.log(data.length);



// next.onclick = () => {
//     data[0].id += 1
// }


function showQuestion() {
    
}

next.onclick = () => {
    for (let i = 0; i < data.length; i++) {
        question.innerText = data[i].title;
        
    }
    

}


index+=1;
   if (index<data.length) {
    showQuestion()
   }