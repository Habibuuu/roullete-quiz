const quizData = [
  {
    question: "Menurut anda manakah password berikut yang paling aman?",
    a: "Ycj24@mH.",
    b: "Password",
    c: "Friend5_Rom4ns_C0untrymen!",
    d: "Candy69",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

//Jawaban
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    }
    //Jawab benar
    if (score == 1) {
      quiz.innerHTML = `
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <center>
      <div class="pyro">
      <div class="before"></div>
      <div class="after"></div>
      </div>
      <div class="emoji emoji--haha">
           <div class="emoji__face">
               <div class="emoji__eyes"></div>
               <div class="emoji__mouth">
               <div class="emoji__tongue"></div>
               </div>
           </div>
       </div>
       <h1>Selamat anda benar !!!</h1>
       <a href="javascript:history.back()"><button onclick="location.reload()">Reload</button></a>
       </center>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <audio autoplay id="benar" src="./applause.mp3" type="audio/mp3"></audio>
   
      `;
    }
    //jawaban salah
    else {
      score = 2;
      quiz.innerHTML = `
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <center>
      <div class="emoji emoji--sad">
         <div class="emoji__face">
             <div class="emoji__eyebrows"></div>
             <div class="emoji__eyes"></div>
             <div class="emoji__mouth"></div>
         </div>
         </div>
         <h1>Waktu Habis !!!</h1>
     <a href="javascript:history.back()"><button onclick="location.reload()">Reload</button></a>
     </center>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <audio autoplay id="telat" src="./telat.mp3" type="audio/mp3"></audio>

   `;
    }
  }
});

//Waktu habis
var sec = 15;
var myTimer = document.getElementById("myTimer");
var submit = document.getElementById("submit");
window.onload = countDown;

function countDown() {
  if (sec < 1) {
    myTimer.innerHTML = "0";
  } else {
    myTimer.innerHTML = sec;
  }
  if (sec <= 0) {
    submit.setAttribute("disabled", true);

    if (score == 0) {
      quiz.innerHTML = `
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <center>
      <div class="emoji emoji--sad">
         <div class="emoji__face">
             <div class="emoji__eyebrows"></div>
             <div class="emoji__eyes"></div>
             <div class="emoji__mouth"></div>
         </div>
         </div>
         <h1>Waktu Habis !!!</h1>
     <a href="javascript:history.back()"><button onclick="location.reload()">Reload</button></a>
     </center>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <audio autoplay id="telat" src="./telat.mp3" type="audio/mp3"></audio>

   `;

      $("#myTimer").fadeTo(2500, 0);
      submit.innerHTML = "Click Me!";
      return;
    }
  }
  sec -= 1;
  window.setTimeout(countDown, 1000);
}
