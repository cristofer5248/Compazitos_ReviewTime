//Number of questions. Max=52.

var NUMQUESTIONS = 2;
var mySound;
mySound = new sound("sound/correct_mario.mp3");
var soundIncorrect;
soundIncorrect = new sound("sound/incorrect_mario.mp3");
var questionsMap2 = new Map();
var ultimavar=0;
// var animation='<button type="button" class="btn btn-secondary" data-dismiss="myModal2">Close</button>';
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
    question: "¿Que regalo nos dio Dios para que podamos vivir en santidad?",
    a: "Jesus.",
    b: "Maria.",
    c: "A los profetas.",
    d: "La biblia.",
    answer: "a" });

  questionsMap.set(2, {
    question: "¿Cual fue el sacrificio que hizo Dios para que podamos vivir en santidad?",
    a: "Andar predicando.",
    b: "Hacer milagros.",
    c: "Ayunar.",
    d: "Morir en la cruz por nuestros pecados.",
    answer: "d" });

  questionsMap.set(3, {
    question: "¿Que palabra es sinonimo de la palabra santo?",
    a: "Egoista.",
    b: "Libre de pecado.",
    c: "Trabajador.",
    d: "Malo.",
    answer: "b" });

  questionsMap.set(4, {
    question: "¿Cual de los siguientes versiculos habla de la bondad de Dios?",
    a: "Salmo 145:9.",
    b: "Salmos 1:9.",
    c: "Proverbios 17:9.",
    d: "Colosences 32:1.",
    answer: "a" });

  questionsMap.set(5, {
    question: "¿Bueno es Jehová para con todos",
    a: "Y por siempre su amor.",
    b: "Y sus misericordias sobre todas sus obras.",
    c: "Y su bondad para siempre.",
    d: "Y su amor es eterno.",
    answer: "b" });

  questionsMap.set(6, {
    question: "¿Donde manifiesta Dios su bondad?",
    a: "Amigos.",
    b: "En todas partes.",
    c: "Pastores.",
    d: "El mar.",
    answer: "b" });

  questionsMap.set(7, {
    question: "¿Cuando Dios bueno?",
    a: "Cuando me da lo que quiero.",
    b: "Cuando no me da lo que quiere.",
    c: "Todas.",
    d: "Cuando doy mi ofrenda.",
    answer: "c" });

  questionsMap.set(8, {
    question: "Que debemos hacer por la inmensa bondad de Dios",
    a: "Jugar.",
    b: "Comer.",
    c: "Descansar.",
    d: "Celebrar.",
    answer: "d" });

  questionsMap.set(9, {
    question: "Cuales de estos no es un autoridad?",
    a: "Amigos.",
    b: "Presidente.",
    c: "Tios.",
    d: "Maestros.",
    answer: "a" });

  questionsMap.set(10, {
    question: "Salmos 17:7 Muestra tus maravillosas misericordias",
    a: " tú que ayudas al justo.",
    b: " tú que salvas a los que se refugian a tu diestra.",
    c: " tú que me cuidas en la tormenta.",
    d: " Oh jehova.",
    answer: "b" });
//gerson
  questionsMap.set(11, {
    question: "Formas de mostrar el amor de Dios a los demas",
    a: " Jugando juntos, no perdonando, apoyar.",
    b: " Apoyar, predicando, hacer trampa.",
    c: " Perdonando, dando consejos, predicando.",
    d: " Perdonando, copiar en clases, predicando.",
    answer: "c" });

  questionsMap.set(12, {
    question: "En que versiculo se me fue dicho que somos hijos de Dios",
    a: " 1 Juan 3:3.",
    b: " 2 Juan 3:1.",
    c: " 1 Juan 3:1.",
    d: " Proverbios 3:1.",
    answer: "c" });

  questionsMap.set(13, {
    question: "Que cual de estas opciones no debo honrar a mi padre?",
    a: " Me abandona.",
    b: " Ninguna.",
    c: " Tengo padrastro.",
    d: " Nunca lo conoci.",
    answer: "b" });

    questionsMap.set(14, {
      question: "Que aprendiste de parte de Dios del video sobre el padre visto en el salon?",
      a: "El papa mostro todas las cualidades de un buen padre.",
      b: " El papa estudio mucho para tener su puesto trabajo.",
      c: " El ventilador no le funciono.",
      d: " El papa es mal padre.",
      answer: "a" });

    questionsMap.set(15, {
        question: "Las cualidad de un padre ejemplar como Dios vistas en clases son?",
        a: "Consejero, cree en nosotros, fiel, misericordioso.",
        b: "Fiestero, Feliz, Amable, fiel.",
        c: "Consejero, Feliz, Amable, fiel.",
        d: "Misericordioso, Feliz, Amable, fiel.",
        answer: "a" });

        questionsMap.set(16, {
            question: "Cuales son los deberes de un hijo terrenal?",
            a: "Honrar, no obedecer, menospreciar.",
            b: "Menospreciar, Honrar, tener actitud de respeto.",
            c: "Menospreciar, No obedecer, tener actitud de respeto.",
            d: "No Menospreciar, Honrar, tener actitud de respeto.",
            answer: "d" });

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
  var lquestion = question.length;

  if(lquestion>70){
    reduceFontSize();
  }
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
    if(conceptName==1){
    quizStats.correct2++;
  }
  else{
    quizStats.correct++;
  }
    ramdomGifBad();
    showpopupCorrect();
    soundIncorrect.play();
    quizStats.wrong++;
    this.classList.add("wrong");
  }
hidequestion();
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

//mifuncionnoob();

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
      // setTimeout(function() {
      //  $('#myModal2').modal('hide');
      //   }, 3000); si queremos que desaparesca con el tiempo

         $('#myModal2').modal('hide');

}

function ramdomGif(){

  $(".modalpopup").html("");
  var gifIndex = Math.floor(Math.random()*2)+1;
  var text1= '<center><h1 class="animated infinite bounceInLeft" style="color: green; font-size: 3.0em;">Excelente 1+</h1></center>';
  var imgtag ="<img src='gifs/"+gifIndex+".gif' alt='win' onclick='hidemodal()'>"+text1;

  // imgtag+=closebutton;
  $(".modalpopup").append(imgtag);
}
function ramdomGifBad(){

  $(".modalpopup").html("");
  var gifIndex = Math.floor(Math.random()*2)+1;
  var text1= '<center><h1 id="badpoint" class="animated infinite flash" style="color: red; font-size: 2.0em; font-family:">Punto al otro equipo😭➡️+1</h1></center>';
  var imgtag ="<img src='gifs/bad/"+gifIndex+".gif' alt='win' onclick='hidemodal()'>"+text1;
  $(".modalpopup").append(imgtag);
  animateDelete();
}
function ramdomGifCongrant(){
  var gifIndex = Math.floor(Math.random()*2)+1;
  var imgtag ="<center><img src='gifs/congratulation/"+gifIndex+".gif' alt='win'></center>";

  $(".result-text").append(imgtag);

}
function hideCounter(){
  var countertag = document.getElementsByClassName("score")[0].style.display="none";
}

function hidequestion(){
  document.getElementById('first-answer').style.visibility="hidden";
  document.getElementById('second-answer').style.visibility="hidden";
  document.getElementById('third-answer').style.visibility="hidden";
  document.getElementById('fourth-answer').style.visibility="hidden";
}
function reduceFontSize(){
  document.getElementById('the-question').style.fontSize='x-large';
}

function animateDelete(){
  setTimeout(function() {
    document.getElementById('badpoint').className="animated hinge";
    }, 3000);
}
function keyeventabcd(event){
  var key1 = event.keyCode;
  if(key1==49){
    document.getElementById('teamS').selectedIndex="0";
    alert('Grupo A selecionado')
  }
  else if(key1==50){
    document.getElementById('teamS').selectedIndex="1";
    alert('Grupo B selecionado')
  }
}



// var myInit = {  method:'GET',
//                 headers:{
//                     'Content-Type':'application/json'
//                 },
//                 mode:'cors',
//                 cache:'default'
//               };
// }

function mifuncionnoob(){
let myRequest = new Request("json/example.json");
var myjson;

fetch(myRequest)
  .then(function(resp){
    return resp.json();
})
.then(function(data){
  myjson = data;

  var myJSON = JSON.stringify(myjson[0].question);
  var myJSON1 = JSON.stringify(myjson[0].a);
  var myJSON2 = JSON.stringify(myjson[0].b);
  var myJSON3 = JSON.stringify(myjson[0].c);
  var myJSON4 = JSON.stringify(myjson[0].d);
  var myJSON5 = JSON.stringify(myjson[0].answer);

  document.getElementById("footer").innerHTML = myJSON;
ultimavar=2;
  questionsMap2.set(1, {
    question: myJSON,
    a: myJSON1,
    b: myJSON2,
    c: myJSON3,
    d: myJSON4,
    answer: myJSON5 });
});
let questionsMap3 = new Map();
questionsMap3.set(1, {
  question: "¿Que regalo nos dio Dios para que podamos vivir en santidad?",
  a: "Jesus.",
  b: "Maria.",
  c: "A los profetas.",
  d: "La biblia.",
  answer: "a" });
console.log(ultimavar);
}
