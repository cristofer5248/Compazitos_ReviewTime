  //Number of questions. Max=52.
  var NUMQUESTIONS = 2;
  var mySound;
  mySound = new sound("sound/correct_mario.mp3");
  var soundIncorrect;
  soundIncorrect = new sound("sound/incorrect_mario.mp3");
  var ultimavar = 0;
  var myjson1;
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

  // The questions.
  function mifuncionnoob() {
    let myRequest = new Request("json/example.json");
    fetch(myRequest)
      .then(function(resp) {
        return resp.json();
      })
      .then(function(data) {

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

  function quizQuestions() {
    questionsMap.set(1, {
      question: "¿Como se llamaba la parte del tabernaculo donde se entraba solo una vez al año?",
      a: "Lugar Santisimo.",
      b: "Templo Sagrado.",
      c: "Templo de Dios.",
      d: "Casa de Dios.",
      answer: "a"
    });
    questionsMap.set(2, {
      question: "¿Quienes podria entrar al lugar santimo?",
      a: "El pueblo.",
      b: "Pastores.",
      c: "Reyes.",
      d: "Sumosacerdote.",
      answer: "d"
    });
    questionsMap.set(3, {
      question: "¿Que pasaba si Dios no recibia la ofrenda?",
      a: "Dejaba de ser Sumosacerdote.",
      b: "Caia al suelo sin vida.",
      c: "Solo regresaba.",
      d: "Debia seguir orando.",
      answer: "b"
    });
    questionsMap.set(4, {
      question: "¿Como se llamaba lo que el sumo Sumosacerdote llevaba en el pecho?",
      a: "Pectoral de justicia.",
      b: "La tabla de la ley.",
      c: "Pectoral del pacto.",
      d: "Pectoral de la ley.",
      answer: "a"
    });
    questionsMap.set(5, {
      question: "Que representaba el pectoral del Sumosacerdote",
      a: "Los frutos del espiritu.",
      b: "El pueblo de Dios.",
      c: "Las generaciones.",
      d: "Los mandamientos.",
      answer: "b"
    });
    questionsMap.set(6, {
      question: "¿Que representaba cada piedra y de que estaba hecha lo que tenia el Sumosacerdote en el pecho (piedras)?",
      a: "Las tribus y solo eran de colores.",
      b: "Las tribus, diferentes minerales.",
      c: "Los mandamientos, solo eran pintadas.",
      d: "Las generaciones y solo estaban pintadas.",
      answer: "b"
    });
    questionsMap.set(7, {
      question: "¿Cual de estas fue una clase en el salon?",
      a: "Mi Dios es fuerte.",
      b: "El que madruga Dios lo ayuda.",
      c: "Mi Dios es celoso.",
      d: "Dios omnipotente.",
      answer: "c"
    });
    questionsMap.set(8, {
      question: "Porque Dios es celoso?",
      a: "Porque es un mandamiento.",
      b: "Porque creemos que el es asi.",
      c: "Lo dice el libro de Genesis.",
      d: "Porque el es fiel y los idolos nos pueden fallar.",
      answer: "d"
    });
    questionsMap.set(9, {
      question: "Cuales son las intrucciones para hacer un idolo?",
      a: "Buscar algo con lo que no puedas vivir y luego desesperarte por el.",
      b: "Buscar algo que no uses y luego, usarlo dos dias y cambiarlo",
      c: "Buscar algo con lo no podamos vivir y luego regalarlo.",
      d: "Buscar algo con lo que podamos vivir y luego no te desesperes por usarlo .",
      answer: "a"
    });
    questionsMap.set(10, {
      question: "Porque Dios debe ser temido?",
      a: " No tiene miedo a nadie.",
      b: " Porque el es fiel y cumple sus promesas, bendiciones y maldiciones.",
      c: " Porque es poderoso.",
      d: " Porque lo dicen en exodo.",
      answer: "b"
    });
    //gerson
    questionsMap.set(11, {
      question: "Donde dice que Dios es temido?",
      a: " Malaquias 1:60.",
      b: " Proverbios 1:18.",
      c: " Malaquias 1:14.",
      d: " Genesis 2:5.",
      answer: "c"
    });
    questionsMap.set(12, {
      question: "En que historia biblica algiuen no le tuvo temor al poder de Dios",
      a: " Juan y Maria.",
      b: " Pedro y Jesus.",
      c: " Moises y faraon.",
      d: " Noe.",
      answer: "c"
    });

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
      mySound.play();
      ramdomGif();
      //aqui

      showpopupCorrect();
      this.classList.add("correct");
    } else {
      if (conceptName == 1) {
        quizStats.correct2++;
      } else {
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
      //desapecer
      setTimeout(function() {
        $('#myModal2').modal('hide');
      }, 3000);
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

  });

  function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
      this.sound.play();
    }
    this.stop = function() {
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
    this.play = function() {
      this.sound.play();
    }
    this.stop = function() {
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
    setTimeout(function() {
      document.getElementById('badpoint').className = "animated hinge";
    }, 3000);
  }

  function keyeventabcd(event) {
    var key1 = event.keyCode;
    if (key1 == 49) {
      document.getElementById('teamS').selectedIndex = "0";

    } else if (key1 == 50) {
      document.getElementById('teamS').selectedIndex = "1";

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
    var checkbox1 = document.getElementById("customq");
    checkbox1.checked ? console.log('iniciando') : quizQuestions();
    // preguntas quemadas activar
    determineSequence();

    getNextQuestion();
    addEventListeners();
    addDataAttributes();
  };

  function checkbox_action(){
    var checkbox1 = document.getElementById("customq");
    checkbox1.checked ? desaparecerbtn1() : desaparecerbtn2();
  }

  function desaparecerbtn1(){
    document.getElementById("n_btn").style.display="none";
    document.getElementById("i_btn").style.display="block";
  }
  function desaparecerbtn2(){
    document.getElementById("i_btn").style.display="none";
    document.getElementById("n_btn").style.display="block";
  }


  $('#go').click(function() {
    var lines = $('#input').val().split(/\n/);
    var output = [];
    var outputText = [];
    var i_nq = 1;
    var divisible = lines.length % 6;
    alert(divisible);
    if (divisible === 0) {
      console.log('es divisible');

      for (var i = 0; i < lines.length; i++) {


        while (i % 6 !== 0 || i === 0) {
          if (/\S/.test(lines[i])) {
            // only push this line if it contains a non whitespace character.
            output.push($.trim(lines[i]));
            i++;
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
        i_nq++;
      }
    }
    console.log(output);
    NUMQUESTIONS = 1;
    iniciarwe();
  })
