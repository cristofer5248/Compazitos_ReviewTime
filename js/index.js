//Number of questions. Max=52.

var NUMQUESTIONS = 2;
var mySound;
mySound = new sound("sound/correct_mario.mp3");
var soundIncorrect;
soundIncorrect = new sound("sound/incorrect_mario.mp3");
//esta es la contante que no puedo cambiar en todo el ciclo de ejecucion


/*
/*const NUMQUESTIONS = 2;
$("button:#enviar1").click(function () {
  NUMQUESTIONS = $('#limitq').val();
}
*/





// List of questions.
let questionsMap = new Map();

// The sequence of the quiz.
let quizSequence = [];

// Store the quiz stats.
let quizStats = {
  counter: 0,
  correct: 0,
  correct2: 0,
  wrong: 0,
  currentQuestion: 0 };


// The questions.
function quizQuestions() {

  questionsMap.set(1, {
    question: "¿Quien fue Hagar?",
    a: "Una egipcia.",
    b: "Un egipcio.",
    c: "Amigo de Abraham.",
    d: "Ninguna.",
    answer: "a" });

  questionsMap.set(2, {
    question: "¿Que hizo Hagar con el niño?",
    a: "Lo dejo en el rio nilo.",
    b: "Lo dejo solo en la casa.",
    c: "Lo vendio.",
    d: "Lo un lugar a distancia de un tiro con arco.",
    answer: "d" });

  questionsMap.set(3, {
    question: "¿Que hizo la mama de moises con el?",
    a: "Lo vendio a los egipcios.",
    b: "Lo oculto y lo solto en el rio nilo.",
    c: "Lo cuido hasta que crecio fuerte.",
    d: "Ninguna.",
    answer: "b" });

  questionsMap.set(4, {
    question: "¿Cual de estos fue un milagro de Moises?",
    a: "Abrió el mar.",
    b: "Salvar a muchos con el arca.",
    c: "Sano a un ciego.",
    d: "Ninguno.",
    answer: "a" });

  questionsMap.set(5, {
    question: "¿Cual fue el regalo que la mama de moises le daba cada año?",
    a: "Dinero.",
    b: "Ninguna.",
    c: "Nintendo switch.",
    d: "Juguetes.",
    answer: "b" });

  questionsMap.set(6, {
    question: "¿Que paso con el bebe cuando dos madres querian un bebe😮? (1reyes3:26)",
    a: "No se le dio a nadie.",
    b: "El rey decidio dividirlo.",
    c: "Lee Towers.",
    d: "Tommy Lee.",
    answer: "b" });

  questionsMap.set(7, {
    question: "¿Cual de estos Dios no nos manda ha hacer?",
    a: "Honrar.",
    b: "Bendecir.",
    c: "Relagar dinero.",
    d: "Amar.",
    answer: "c" });

  questionsMap.set(8, {
    question: "Dios dice que somos ___  y ___ del espiritu santo",
    a: "Personas y siervos.",
    b: "Amigos y hermanos.",
    c: "Comprados y bendecidos.",
    d: "templo y morada.",
    answer: "d" });

  questionsMap.set(9, {
    question: "Cuales de estos no es un autoridad?",
    a: "Amigos.",
    b: "Presidente.",
    c: "Tios.",
    d: "Maestros.",
    answer: "a" });

  questionsMap.set(10, {
    question: "Sometase pues  a toda Romanos13:1-2?",
    a: "Persona.",
    b: "Autoridad.",
    c: "Pastor.",
    d: "Familiar.",
    answer: "b" });


}

// Get the containers.
let questionContainer = document.getElementById("the-question"),
answerA = document.getElementById("first-answer"),
answerB = document.getElementById("second-answer"),
answerC = document.getElementById("third-answer"),
answerD = document.getElementById("fourth-answer"),
scoreCounter = document.getElementById("score-counter");
scoreCounter2 = document.getElementById("score-counter2");

// Add question keys to the quiz sequence array.
function determineSequence() {
  // Populate quizSequence.
  for (let [key, value] of questionsMap) {
    quizSequence.push(key);
  }

  // Shuffle an array.
  function shuffle(array) {
    let currentIndex = array.length,
    temporaryValue,
    randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
    // See: http://stackoverflow.com/a/2450976/4429450
  }

  // Randomize quizSequence.
  quizSequence = shuffle(quizSequence);
}

// Get the next question.
function getNextQuestion() {
  // Up the counter.
  quizStats.counter++;

  // Get the question number.
  let qn = quizSequence.shift();

  // Set up the question and answers.
  let a = questionsMap.get(qn).a,
  b = questionsMap.get(qn).b,
  c = questionsMap.get(qn).c,
  d = questionsMap.get(qn).d,
  question = questionsMap.get(qn).question;

  // Print the questions.
  questionContainer.textContent = question;
  answerA.textContent = a;
  answerB.textContent = b;
  answerC.textContent = c;
  answerD.textContent = d;

  // Track the current question.
  quizStats.currentQuestion = qn;
}

// Add event listeners.
function addEventListeners() {
  answerA.addEventListener("click", checkTheAnswer);
  answerB.addEventListener("click", checkTheAnswer);
  answerC.addEventListener("click", checkTheAnswer);
  answerD.addEventListener("click", checkTheAnswer);
}

// Add data attributes.
function addDataAttributes() {
  answerA.setAttribute("data-answer", "a");
  answerB.setAttribute("data-answer", "b");
  answerC.setAttribute("data-answer", "c");
  answerD.setAttribute("data-answer", "d");
}

// Check the answer.
function checkTheAnswer(parameter1) {
  // Get the answers.
  let givenAnswer = this.dataset.answer,
  correctAnswer = questionsMap.get(quizStats.currentQuestion).answer;

  // Check given and correct answers.
  var conceptName = $('#teamS').find(":selected").val();

  if (givenAnswer === correctAnswer) {
    //aqui
    // alert(conceptName);
        if(conceptName==1){
    quizStats.correct++;
  }
  else{
    quizStats.correct2++;

  }
    mySound.play();
    ramdomGif();
    showpopupCorrect();
    this.classList.add("correct");
  } else
  {
    ramdomGifBad();
    showpopupCorrect();
    soundIncorrect.play();
    quizStats.wrong++;
    this.classList.add("wrong");
  }

  // Update the counter.
  scoreCounter.textContent = quizStats.correct;
  scoreCounter2.textContent = quizStats.correct2;

  // Check if max num of questions has been reached.
  //limitQ = $('#msg').html($('input:textbox').val());

  if (quizStats.counter < NUMQUESTIONS) {
    setTimeout(clearClasses, 2000);
    setTimeout(getNextQuestion, 2000);
  }
  // If so, stop the quiz.
  else {
      showTheResults();
    }
}

// Clear classes.
function clearClasses() {
  answerA.classList.remove("correct", "wrong");
  answerB.classList.remove("correct", "wrong");
  answerC.classList.remove("correct", "wrong");
  answerD.classList.remove("correct", "wrong");
}

// The results.
function showTheResults() {
  // Get the containers.
  let numCorrect = document.getElementById("num-correct"),
  numCorrect2 = document.getElementById("num-correct2"),
  numWrong = document.getElementById("num-wrong"),
  numTotal = document.getElementById("num-total");


  // Get the results.
  let correct = quizStats.correct,
  correct2 = quizStats.correct2,
  wrong = quizStats.wrong,
  total = NUMQUESTIONS;


  // Print the results.
  numCorrect.textContent = correct;
  numCorrect2.textContent = correct2;
  numWrong.textContent = wrong;
  numTotal.textContent = total;

  // Display the results.
  document.getElementsByClassName("results-container")[0].classList.add("display");
  ramdomGifCongrant();
}

//Let's start!

$(document).ready(function($) {

// $('#myModal2').modal('show');
});


function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
function sound2(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

function iniciarwe() {
  quizQuestions();
  determineSequence();
  getNextQuestion();
  addEventListeners();
  addDataAttributes();
};

function cambiarConstante(){
NUMQUESTIONS = document.getElementById("limitq").value;
console.log("valor: "+NUMQUESTIONS);
iniciarwe();
$('#myModal').modal('hide');
};

function showpopupCorrect(){
  $('#myModal2').modal('show');
      setTimeout(function() {
       $('#myModal2').modal('hide');
        }, 3000);
}

function ramdomGif(){

  $(".modalpopup").html("");
  var gifIndex = Math.floor(Math.random()*2)+1;
  var imgtag ="<img src='gifs/"+gifIndex+".gif' alt='win'>";
  $(".modalpopup").append(imgtag);
}
function ramdomGifBad(){

  $(".modalpopup").html("");
  var gifIndex = Math.floor(Math.random()*2)+1;
  var imgtag ="<img src='gifs/bad/"+gifIndex+".gif' alt='win'>";
  $(".modalpopup").append(imgtag);
}
function ramdomGifCongrant(){
  var gifIndex = Math.floor(Math.random()*2)+1;
  var imgtag ="<center><img src='gifs/congratulation/"+gifIndex+".gif' alt='win'></center>";
  console.log(imgtag);
  $(".result-text").append(imgtag);

}
function hideCounter(){
  var countertag = document.getElementsByClassName("score")[0].style.display="none";
}

var json = (function () {
    var json = null;
    $.ajax({
        // 'async': false,
        // 'global': false,
        'url': 'json/example.json',
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();
console.log(JSON.stringify(json));
