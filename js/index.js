//Number of questions. Max=52.
var lines;
var NUMQUESTIONS = 2;
var doneByPopup = false;
var mySound;
mySound = new sound("sound/correct_mario.mp3");
var soundIncorrect;
var soundSelect;
var countdownRocket;
soundIncorrect = new sound("sound/incorrect_mario.mp3");
soundSelect = new sound("sound/start.wav");
countdownRocket = new sound("sound/countdown.mp3")
var ultimavar = 0;
var myjson1;
//Bloqueo de teclas para contestar
var blockkey = false;
var key_AnswerB = false;
var key_AnswerA = false;

var losAtag = document.getElementsByTagName('span');

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
  currentQuestion: 0
};

function playselectButton() {
  soundSelect.play();
}

function blinkcorrect(paragraph_) {
  var whoblink = paragraph_ == "a" ? "first-answer" :
    paragraph_ == "b" ? "second-answer" :
      paragraph_ == "c" ? "third-answer" :
        paragraph_ == "d" ? "fourth-answer" : 'otro numero';
  document.getElementById(whoblink).classList.add("blink_me");
  // var whoblink = paragraph_=="a" ? 1:
  //   			       paragraph_=="b" ? 2:
  //   			       paragraph_=="c" ? 3:
  //   			       paragraph_=="d" ? 4: 'otro numero';
  // document.getElementsByTagName("span")[whoblink].classList.add("blink_me");
}

function blinkcorrectNO() {
  for (var i = 0; i < losAtag.length; i++) {
    losAtag[i].classList.remove("blink_me");
  }
}

function musicplayBackground() {
  var npista = Math.floor(Math.random() * 3) + 1;
  var audioelemente = document.createElement("AUDIO");
  audioelemente.id = 'musicplayer';

  if (audioelemente.canPlayType("audio/mpeg")) {
    audioelemente.setAttribute("src", "sound/background" + npista + ".mp3");
  }
  // x.setAttribute("controls", "controls");
  audioelemente.setAttribute("autoplay", "autoplay");
  audioelemente.setAttribute("loop", "loop");
  document.body.appendChild(audioelemente);
}
// The questions.
function mifuncionnoob() {
  let myRequest = new Request("json/example.json");
  fetch(myRequest)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {

      myjson1 = data;

      console.log("tamaño del json: " + myjson1.length);
      var counterquestionloop = 0;
      quizQuestions();
      for (i = 0; i < myjson1.length; i++) {
        counterquestionloop = i + 1;

        console.log('por lo menos entro aqui counter: ' + counterquestionloop);
        console.log('Datos:' + JSON.stringify(myjson1[i].question));

        try {
          questionsMap.set(counterquestionloop, {
            question: JSON.stringify(myjson1[i].question),
            a: JSON.stringify(myjson1[i].a),
            b: JSON.stringify(myjson1[i].b),
            c: JSON.stringify(myjson1[i].c),
            d: JSON.stringify(myjson1[i].d),
            answer: JSON.stringify(myjson1[i].answer)
          });
        } catch (error) {
          console.error(error);
        }

      }
    });
  console.log("(ESTOY AJUERA)Podemos ver e dato" + JSON.stringify(myjson1[0].question));
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
  if (lquestion > 70) {
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
    var correctAnswerText;
    
    switch(correctAnswer){
    case "a":
      correctAnswerText = questionsMap.get(quizStats.currentQuestion).a;
      break;
    case "b":
      correctAnswerText = questionsMap.get(quizStats.currentQuestion).b;
      break;
    case "c":
      correctAnswerText = questionsMap.get(quizStats.currentQuestion).c;
      break;
    case "d":
      correctAnswerText = questionsMap.get(quizStats.currentQuestion).d;
      break;
    default:
      alert('alerta roja');
      break;
    }
    
    $("#respuestaShowed").text('La respuesta correcta es: '+correctAnswerText);


  // Check given and correct answers.
  var conceptName = $('#teamS').find(":selected").val();
  
  if (givenAnswer === correctAnswer) {
    //aqui
    // alert(conceptName);
    if (conceptName == 1) {
      quizStats.correct++;
    } else {
      quizStats.correct2++;
    }
    soundSelect.play();
    blinkcorrect(givenAnswer)
    setTimeout(function () {
      mySound.play();
      ramdomGif();
      showpopupCorrect();
    }, 3000);

  } else {
    if (conceptName == 1) {
      quizStats.correct2++;
    } else {
      quizStats.correct++;
    }
    soundSelect.play();
    blinkcorrect(givenAnswer)
    setTimeout(function () {
      ramdomGifBad();
      showpopupCorrect();
      soundIncorrect.play();
      quizStats.wrong++;

    }, 3000)
    this.classList.add("wrong");
  }
  hidequestion();
  // Update the counter.
  scoreCounter.textContent = quizStats.correct;
  scoreCounter2.textContent = quizStats.correct2;
  // Check if max num of questions has been reached.
  //limitQ = $('#msg').html($('input:textbox').val());
  if (quizStats.counter < NUMQUESTIONS) {
    setTimeout(clearClasses, 4000);
    setTimeout(getNextQuestion, 4000);
    setTimeout(blinkcorrectNO, 4000);
    setTimeout(countdown, 4000);

  }
  // If so, stop the quiz.
  else {
    setTimeout(function () {
      showTheResults();
    }, 4000);

    //desapecer
    setTimeout(function () {
      $('#myModal2').modal('hide');
    }, 8000);
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
$(document).ready(function ($) {
  musicplayBackground();
});

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  }
  this.stop = function () {
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
  this.play = function () {
    this.sound.play();
  }
  this.stop = function () {
    this.sound.pause();
  }
}

function cambiarConstante() {
  NUMQUESTIONS = document.getElementById("limitq").value;
  console.log("valor: " + NUMQUESTIONS);
  iniciarwe();
  $('#myModal').modal('hide');
};

function showpopupCorrect() {
  $('#myModal2').modal('show');
  // setTimeout(function() {
  //  $('#myModal2').modal('hide');
  //   }, 3000); si queremos que desaparesca con el tiempo
  $('#myModal2').modal('hide');
}

function ramdomGif() {
  $(".modalpopup").html("");
  var gifIndex = Math.floor(Math.random() * 2) + 1;
  var text1 = '<center><h1 class="animated infinite bounceInLeft" style="color: green; font-size: 3.0em;">Excelente 1+</h1></center>';
  var imgtag = "<img src='gifs/" + gifIndex + ".gif' alt='win' onclick='hidemodal()'>" + text1;
  // imgtag+=closebutton;
  $(".modalpopup").append(imgtag);
}

function ramdomGifBad() {
  $(".modalpopup").html("");
  var gifIndex = Math.floor(Math.random() * 2) + 1;
  var text1 = '<center><h1 id="badpoint" class="animated infinite flash" style="color: red; font-size: 2.0em; font-family:">Punto al otro equipo😭➡️+1</h1></center>';
  var imgtag = "<img src='gifs/bad/" + gifIndex + ".gif' alt='win' onclick='hidemodal()'>" + text1;
  $(".modalpopup").append(imgtag);  
  animateDelete();
}

function ramdomGifCongrant() {
  var gifIndex = Math.floor(Math.random() * 2) + 1;
  var imgtag = "<center><img src='gifs/congratulation/" + gifIndex + ".gif' alt='win'></center>";
  $(".result-text").append(imgtag);
}

function hideCounter() {
  var countertag = document.getElementsByClassName("score")[0].style.display = "none";
}

function hidequestion() {
  document.getElementById('first-answer').style.visibility = "hidden";
  document.getElementById('second-answer').style.visibility = "hidden";
  document.getElementById('third-answer').style.visibility = "hidden";
  document.getElementById('fourth-answer').style.visibility = "hidden";
}

function reduceFontSize() {
  document.getElementById('the-question').style.fontSize = 'x-large';
}

function animateDelete() {
  setTimeout(function () {
    document.getElementById('badpoint').className = "animated hinge";
  }, 3000);
}

function keyeventabcd(event) {
  var key1 = event.keyCode;
  if (!blockkey) {
    if (key1 == 65) { //player A Grupo A letra de teclado A
      document.getElementById('teamS').selectedIndex = "0";
      blockkey = true;
      key_AnswerB = false;
      key_AnswerA = true;
      alert('Equipo A tomó la iniciativa');
      countdown();
    } else if (key1 == 13) { //Player B grupo B letra de teclado enter
      document.getElementById('teamS').selectedIndex = "1";
      alert('Equipo B tomó la iniciativa');
      blockkey = true;
      key_AnswerA = false;
      key_AnswerB = true;
      countdown();

    }
  }
  //RESPONDER LITERALES PLAYER 1 (A)
  if (key_AnswerA) {
    if (key1 == 90) { //letra de teclado Z
      document.getElementById("first-answer").click(); //apretar la opcion a
      key_AnswerA = false;
      blockkey = false;
    } else if (key1 == 88) { //letra de teclado X
      document.getElementById("second-answer").click(); //apretar la opcion b
      key_AnswerA = false;
      blockkey = false;
    } else if (key1 == 67) { //Letra de teclado C
      document.getElementById("third-answer").click(); //apretar la opcion c
      key_AnswerA = false;
      blockkey = false;
    } else if (key1 == 86) { //Letra de teclado V
      document.getElementById("fourth-answer").click(); //apretar la opcion d
      key_AnswerA = false;
      blockkey = false;
    }
  }
  if (key_AnswerB) {
    if (key1 == 50) { //letra de teclado 2
      document.getElementById("first-answer").click(); //apretar la opcion a
      key_AnswerB = false;
      blockkey = false;
    } else if (key1 == 51) { //letra de teclado 3
      document.getElementById("second-answer").click(); //apretar la opcion b
      key_AnswerB = false;
      blockkey = false;
    } else if (key1 == 52) { //Letra de teclado 4
      document.getElementById("third-answer").click(); //apretar la opcion c
      key_AnswerB = false;
      blockkey = false;
    } else if (key1 == 49) { //Letra de teclado 1
      document.getElementById("fourth-answer").click(); //apretar la opcion d
      key_AnswerB = false;
      blockkey = false;
    }
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

function iniciarwe() {
  // var checkbox1 = document.getElementById("customq");
  // checkbox1.checked ? console.log('iniciando') : quizQuestions();

  // preguntas quemadas activar
  determineSequence();

  getNextQuestion();
  addEventListeners();
  addDataAttributes();
};

function checkbox_action() {
  var checkbox1 = document.getElementById("customq");
  checkbox1.checked ? desaparecerbtn1() : desaparecerbtn2();
}

function desaparecerbtn1() {
  for (var i = 0; i < losAtag.length; i++) {
    losAtag[i].style.visibility = "visible";
  }
}

function desaparecerbtn2() {
  for (var i = 0; i < losAtag.length; i++) {
    losAtag[i].style.visibility = "hidden";
  }
}


$('#go').click(function () {
  doneByPopup? ProcessChildMessage(lines):ProcessChildMessage();
  $('#myModal3').modal('hide');
  var chalkboard = document.getElementById("content1");
  document.getElementById("i_btn").style.display = "none";
  document.getElementById("open-child-window").style.display = "none";
  soundSelect.play();
  setTimeout(function () {
    document.getElementById("tituloletra").className = "threeD animated fade out";
  }, 1200);
  setTimeout(function () {
    document.getElementById('header').style.display = "none";
    chalkboard.style.display = "block";
    chalkboard.style.marginTop = "6%";
    chalkboard.classList.add('animated', 'zoomIn');
  }, 2000);
  countdownRocket.play();
  var mirocket = document.getElementById('logo');
  mirocket.className = 'animatedrocket logoWithoutAnimation';
  mirocket.classList.add('shake-hard', 'shake-constant');
  setTimeout(function () {
    mirocket.className = 'animatedrocket logoWithoutAnimation animated fadeOutUpBig';
  }, 2000)
  setTimeout(function () {
    mirocket.className = 'animatedrocket logoAdios';
  }, 3000)

  document.getElementById('musicplayer').pause();

})

function ProcessChildMessageSave(message){
  ProcessChildMessage(message);
  lines = message; 
  
}

function startgame1(){
  ProcessChildMessage(lines);
  document.getElementById("go").click();
}

function ProcessChildMessage(message) {
  //var lines;
  if (message != null) {
    lines = message;
  } else {
    lines = $('#input').val().split(/\n/);
  }
  var output = [];
  var outputText = [];
  var i_nq = 1;
  var indexq_n = 0;
  var divisible = lines.length % 6;
  if (divisible === 0) {
    console.log('es divisible');

    var i = 0;
    var j = 0;
    while (i < lines.length) {
      while (j < 6) {
        if (/\S/.test(lines[i])) {
          // only push this line if it contains a non whitespace character.
          output.push($.trim(lines[i]));
          i++;
          j++;
        }

        questionsMap.set(i_nq, {
          question: output[0],
          a: output[1],
          b: output[2],
          c: output[3],
          d: output[4],
          answer: output[5]
        });


      }
      output = [];
      indexq_n = i_nq;
      NUMQUESTIONS = i_nq;
      i_nq++;
      j = 0;
      doneByPopup = message != null ? true: false;
    }
    console.log("procesado en parent");
  } else {
    alert('Las preguntas ingresadas no corresponden al formato correcto, porfavor volver a revisar');
  }
  iniciarwe();
  // alert('Se han registrado: ' + indexq_n + " preguntas");



}
