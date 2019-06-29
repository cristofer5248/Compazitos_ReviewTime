// Number of questions. Max=52.
const NUMQUESTIONS = 20;

// List of questions.
let questionsMap = new Map();

// The sequence of the quiz.
let quizSequence = [];

// Store the quiz stats.
let quizStats = {
	counter: 0,
	correct: 0,
	wrong: 0,
	currentQuestion: 0,
};	

// The questions.
function quizQuestions() {
	questionsMap.set(1, {
		question: "Which Spanish Island is known as 'The Island of Eternal Spring'?",
		a: "Tenerife.",
		b: "Majorca.",
		c: "Gran Canaria.",
		d: "La Gomera.",
		answer: "a",
	});
	questionsMap.set(2, {
		question: "What is the largest planet in our solar system?",
		a: "Mercury.",
		b: "Neptune.",
		c: "Saturn.",
		d: "Jupiter.",
		answer: "d",
	});
	questionsMap.set(3, {
		question: "What was the name of the first manmade satellite that was launched into space in 1957?",
		a: "Apollo.",
		b: "Sputnik.",
		c: "Enterprise.",
		d: "Soyuz.",
		answer: "b",
	});
	questionsMap.set(4, {
		question: "What is the name of the world's highest uninterrupted waterfall and in what country is it located?",
		a: "Angel Falls, Venezuela.",
		b: "Tugula Falls, South Africa.",
		c: "Niagara Falls, Canada and United Stats.",
		d: "Vinnufossen, Norway.",
		answer: "a",
	});
	questionsMap.set(5, {
		question: "What is the chemical symbol for iron?",
		a: "Ir.",
		b: "Fe.",
		c: "On.",
		d: "IJzer.",
		answer: "b",
	});
	questionsMap.set(6, {
		question: "Who wrote the novel 'To Kill a Mockingbird', published in 1960?",
		a: "Bruce Lee.",
		b: "Harper Lee.",
		c: "Lee Towers.",
		d: "Tommy Lee.",
		answer: "b",
	});
	questionsMap.set(7, {
		question: "What painter is famous for cutting off part of his ear?",
		a: "Rembrandt Van Rijn.",
		b: "Piet Mondriaan.",
		c: "Vincent Van Gogh.",
		d: "Johannes Vermeer.",
		answer: "c",
	});
	questionsMap.set(8, {
		question: "The Communist Manifesto was written by which two German philosophers?",
		a: "Martin Heidegger and Friedrich Nietzsche.",
		b: "Adolf Hitler and Herman Goring.",
		c: "Ludwig Feuerbach and Albert Schweitzer.",
		d: "Karl Marx and Friedrich Engels.",
		answer: "d",
	});
	questionsMap.set(9, {
		question: "Who directed the 1977 movie Star Wars?",
		a: "George Lucas.",
		b: "Luke Skywalker.",
		c: "Stephen Spielberg.",
		d: "Martin Scorsese.",
		answer: "a",
	});
	questionsMap.set(10, {
		question: "What was the name of the passenger train service created in 1883 that connected Paris and Constantinople?",
		a: "The Constantinople Express.",
		b: "The Orient Express.",
		c: "The Trans-Siberian Express.",
		d: "The Trans-Europe Express.",
		answer: "b",
	});
	questionsMap.set(11, {
		question: "How many stripes are on the flag of the United States?",
		a: "50 Stripes.",
		b: "17 Stripes.",
		c: "13 Stripes.",
		d: "20 Stripes.",
		answer: "c",
	});
	questionsMap.set(12, {
		question: "Lemurs, a type of primate, are native to what island nation?",
		a: "Indonesia.",
		b: "Sri Lanka.",
		c: "Phillipines..",
		d: "Madagascar.",
		answer: "d",
	});
	questionsMap.set(13, {
		question: "The largest volcano ever discovered in our solar system is located on which planet?",
		a: "Jupiter.",
		b: "Earth.",
		c: "Venus.",
		d: "Mars.",
		answer: "d",
	});
	questionsMap.set(14, {
		question: "What is name of the world’s largest and most powerful particle accelerator?",
		a: "Large Hadron Collider.",
		b: "Relativistic Heavy Ion Collider.",
		c: "Antiproton Decelerator.",
		d: "Super Proton Synchrotron.",
		answer: "a",
	});
	questionsMap.set(15, {
		question: "Joseph Smith was the founder of what religion?",
		a: "Scientology.",
		b: "Jehova's Witnesses.",
		c: "Latter Day Saints.",
		d: "Josephism.",
		answer: "c",
	});
	questionsMap.set(16, {
		question: "What character is murdered by George in the John Steinbeck novella 'Of Mice and Men'?",
		a: "His brother: Lennie.",
		b: "His mother: Annie.",
		c: "His friend: Bennie.",
		d: "His wife: Jennie.",
		answer: "a",
	});
	questionsMap.set(17, {
		question: "Which 1979 film included a spaceship called Nostromo?",
		a: "Star Trek.",
		b: "Alien.",
		c: "Star Wars.",
		d: "The Black Hole.",
		answer: "b",
	});
	questionsMap.set(18, {
		question: "One kilobyte is equal to how many bytes?",
		a: "1000 bytes.",
		b: "1048 bytes.",
		c: "1001 bytes.",
		d: "1024 bytes.",
		answer: "d",
	});
	questionsMap.set(19, {
		question: "Who is credited to be the first person to circumnavigate the globe?",
		a: "Christopher Columbus.",
		b: "Abel Tasman.",
		c: "Ferdinand Magellan.",
		d: "Vasco da Gama.",
		answer: "c",
	});
	questionsMap.set(20, {
		question: "How many fingers do the Simpsons cartoon characters have?",
		a: "Five.",
		b: "Three.",
		c: "Four.",
		d: "Seven.",
		answer: "c",
	});
	questionsMap.set(21, {
		question: "What is the only sea on Earth with no coastline?",
		a: "The Sargasso Sea.",
		b: "The North Sea.",
		c: "The Scotia Sea.",
		d: "The Black Sea.",
		answer: "a",
	});
	questionsMap.set(22, {
		question: "What city connects two continents?",
		a: "Montreal.",
		b: "Brussels.",
		c: "Istanbul.",
		d: "Damascus.",
		answer: "c",
	});
	questionsMap.set(23, {
		question: "In what year did Cuba formally gain it's independence from Spain?",
		a: "1779.",
		b: "1902.",
		c: "1812.",
		d: "1492.",
		answer: "b",
	});
	questionsMap.set(24, {
		question: "In what month is the Earth closest to the sun?",
		a: "June.",
		b: "Januari.",
		c: "March.",
		d: "September.",
		answer: "b",
	});
	questionsMap.set(25, {
		question: "Which country and it's territories cover the most time zones?",
		a: "Russia.",
		b: "England.",
		c: "United States.",
		d: "France.",
		answer: "d",
	});
	questionsMap.set(26, {
		question: "How many people have walked on the moon?",
		a: "12.",
		b: "17.",
		c: "5.",
		d: "32155.",
		answer: "a",
	});
	questionsMap.set(27, {
		question: "Marie Curie was the first person to win two of what award?",
		a: "The Oscars.",
		b: "The Nobel Prize.",
		c: "Olympic Golden Medals.",
		d: "The Golden Globe Awards.",
		answer: "b",
	});
	questionsMap.set(28, {
		question: "Who is the author of The Hobbit and the Lord of the Rings trilogy?",
		a: "George R.R. Martin.",
		b: "Ernest Hemmingway.",
		c: "J.R.R. Tolkien.",
		d: "Lewis Carroll.",
		answer: "c",
	});
	questionsMap.set(29, {
		question: "How old must a person be to run for President of the United States?",
		a: "18.",
		b: "23.",
		c: "35.",
		d: "42.",
		answer: "c",
	});
	questionsMap.set(30, {
		question: "In 1893, which country became the first to give women the right to vote?",
		a: "The Netherlands.",
		b: "Denmark.",
		c: "Canada.",
		d: "New Zealand.",
		answer: "d",
	});
	questionsMap.set(31, {
		question: "New York City was originally known by which Dutch name?",
		a: "Nieuw Rotterdam.",
		b: "Haarlem.",
		c: "Breukelen.",
		d: "Nieuw Amsterdam.",
		answer: "d",
	});
	questionsMap.set(32, {
		question: "Sulayman Reis was a notorious Ottoman pirate, but what was his real name?",
		a: "Sinan Pasha.",
		b: "Edward Teach.",
		c: "Thomas Cavendish.",
		d: "Ivan Dirkie De Veenboer.",
		answer: "d",
	});
	questionsMap.set(33, {
		question: "What does the Japanese phrase, 'domo arigato' mean in English?",
		a: "Thank you very much.",
		b: "Have a nice day.",
		c: "Goodbye.",
		d: "Nice to meet you.",
		answer: "a",
	});
	questionsMap.set(34, {
		question: "What vitamin is produced when a person is exposed to sunlight?",
		a: "Vitamin A.",
		b: "Vitamin B.",
		c: "Vitamin C.",
		d: "Vitamin D.",
		answer: "d",
	});
	questionsMap.set(35, {
		question: "The European Organization for Nuclear Research is known by what four letter acronym?",
		a: "KNMI.",
		b: "CERN.",
		c: "NASA.",
		d: "EONR.",
		answer: "b",
	});
	questionsMap.set(36, {
		question: "What layer of the atmosphere lies between the troposphere and mesosphere?",
		a: "Heliosphere.",
		b: "Thermosphere.",
		c: "Stratosphere.",
		d: "Innersphere.",
		answer: "c",
	});
	questionsMap.set(37, {
		question: "What is the capital of North Korea?",
		a: "Seoul.",
		b: "Pyonyang.",
		c: "Taipei.",
		d: "Jakarta.",
		answer: "b",
	});
	questionsMap.set(38, {
		question: "Yerevan, one of the world's oldest continuously inhabited cities, is the capital of what country?",
		a: "The Islamic Republic of Iran.",
		b: "The Republic of Armenia.",
		c: "The Republic of Macedonia.",
		d: "The Republic of Azerbaijan.",
		answer: "b",
	});
	questionsMap.set(39, {
		question: "What is the capital city of Australia?",
		a: "Adelaide.",
		b: "Sydney.",
		c: "Canberra.",
		d: "Melbourne.",
		answer: "c",
	});
	questionsMap.set(40, {
		question: "In what country would you find Mount Kilimanjaro?",
		a: "Kenia.",
		b: "Angola.",
		c: "Tanzania.",
		d: "Zimbabwe.",
		answer: "c",
	});
	questionsMap.set(41, {
		question: "The Southern Ocean surrounds which continent?",
		a: "Australia.",
		b: "South-America.",
		c: "Europe.",
		d: "Antarctica.",
		answer: "d",
	});
	questionsMap.set(42, {
		question: "The US military installation Area 51 is located in which state?",
		a: "California.",
		b: "New Mexico.",
		c: "Nevada.",
		d: "Colorado.",
		answer: "c",
	});
	questionsMap.set(43, {
		question: "What language do they speak in Brazil?",
		a: "Spanish.",
		b: "Portuguese.",
		c: "English.",
		d: "They don't speak any language.",
		answer: "b",
	});
	questionsMap.set(44, {
		question: "Which city has the largest population in the world?",
		a: "New York, United States.",
		b: "Beijing, China.",
		c: "Mexico City, Mexico.",
		d: "Tokyo, Japan.",
		answer: "d",
	});
	questionsMap.set(45, {
		question: "Valletta is the capital of what Mediterranean country?",
		a: "Malta.",
		b: "Italy.",
		c: "France.",
		d: "Albania.",
		answer: "a",
	});
	questionsMap.set(46, {
		question: "According to physics, what are the four fundamental forces in nature?",
		a: "Strong Force, Electromagnetic Force, Weak Force, Gravitational Force.",
		b: "Space, time, Gravity, Electricity.",
		c: "Nuclear Force, Gravitational Force, Electromagnatic Force, Thermodynamical Force.",
		d: "Light Side of the Force, Dark Side of the Force, Force Push, Force Lightning.",
		answer: "a",
	});
	questionsMap.set(47, {
		question: "Schrödinger's cat is a thought experiment dealing with which type of mechanics?",
		a: "Quantum Mechanics.",
		b: "Elektro Mechanics.",
		c: "Spacetime Mechanics.",
		d: "Animal Welfare Mechanics.",
		answer: "a",
	});
	questionsMap.set(48, {
		question: "Who is the author of the book 'A Brief History of Time'?",
		a: "Stephen King.",
		b: "Stephen Hawking.",
		c: "King Stephen I.",
		d: "Albert Einstein.",
		answer: "b",
	});
	questionsMap.set(49, {
		question: "In what year was the first Apple computer released?",
		a: "1981.",
		b: "1972.",
		c: "1976.",
		d: "1989.",
		answer: "c",
	});
	questionsMap.set(50, {
		question: "The companies HP, Microsoft and Apple were all started in a what?",
		a: "Bedroom.",
		b: "Garage.",
		c: "Attic.",
		d: "Bathroom.",
		answer: "b",
	});
	questionsMap.set(51, {
		question: "What is the address of Sherlock Holmes?",
		a: "10 Downing Street.",
		b: "46A Harley Street.",
		c: "1600 Pennsylvania Avenue.",
		d: "221B Baker Street.",
		answer: "d",
	});
	questionsMap.set(52, {
		question: "What falling object is said to have inspired Isaac Newton's theories about gravity?",
		a: "Pineapple.",
		b: "Coconut.",
		c: "Pear.",
		d: "Apple.",
		answer: "d",
	});
}

// Get the containers.
let questionContainer = document.getElementById("the-question"),
		answerA = document.getElementById("first-answer"),
		answerB = document.getElementById("second-answer"),
		answerC = document.getElementById("third-answer"),
		answerD = document.getElementById("fourth-answer"),
		scoreCounter = document.getElementById("score-counter");

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
	answerA.setAttribute("data-answer", ( "a" ));
	answerB.setAttribute("data-answer", ( "b" ));
	answerC.setAttribute("data-answer", ( "c" ));
	answerD.setAttribute("data-answer", ( "d" ));
}

// Check the answer.
function checkTheAnswer() {
	// Get the answers.
	let givenAnswer = this.dataset.answer,
			correctAnswer = questionsMap.get(quizStats.currentQuestion).answer;
	
	// Check given and correct answers.
	if (givenAnswer === correctAnswer) {
		quizStats.correct++;
		this.classList.add("correct");
	}
	else {
		quizStats.wrong++;
		this.classList.add("wrong");
	}
	
	// Update the counter.
	scoreCounter.textContent = quizStats.correct;
	
	// Check if max num of questions has been reached.
	if ( quizStats.counter < NUMQUESTIONS) {
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
			numWrong = document.getElementById("num-wrong"),
			numTotal = document.getElementById("num-total");
	
	// Get the results.
	let correct = quizStats.correct,
			wrong = quizStats.wrong,
			total = NUMQUESTIONS;
	
	// Print the results.
	numCorrect.textContent = correct;
	numWrong.textContent = wrong;
	numTotal.textContent = total;
	
	// Display the results.
	document.getElementsByClassName("results-container")[0].classList.add("display");
}

//Let's start!
(function startQuiz() {
	// Init.
	quizQuestions();
	determineSequence();
	getNextQuestion();
	addEventListeners();
	addDataAttributes();
})();
