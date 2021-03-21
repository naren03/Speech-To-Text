window.SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;

//speech recognition var
let myRecognition = new window.SpeechRecognition();
//random Number generator
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log('Number:' + randomNumber);
//all event listeners
const speakBtn = document.getElementById('speak');
const mainBox = document.querySelector('.container');

//clicking on speak now
// speakBtn.addEventListener('click', (e) => {
// 	e.preventDefault();
myRecognition.start();
// });

myRecognition.addEventListener('result', (event) => {
	let userInput = event.results[0][0].transcript;
	chkNumber(userInput);
});

myRecognition.addEventListener('end', () => {
	myRecognition.start();
});

document.body.addEventListener('click', (e) => {
	if ((e.target.id = 'play-again')) {
		window.location.reload();
	}
});
//functions

function chkNumber(msg) {
	const number = +msg;
	// speakBtn.style.display = 'none';

	//display what user said
	mainBox.appendChild = `<p>You Said:</p><span>${number}</span>`;

	if (Number.isNaN(number)) {
		// let answer = document.createElement('div');
		// answer.setAttribute('class', 'user-input');
		// answer.innerHTML = `<p>You Said:</p><span>${number}</span><p class="message">It Is Not Valid Number</p>`;
		mainBox.appendChild = `<p class="message">It Is Not Valid Number</p>`;
	} else if (number === randomNumber) {
		document.body.innerHTML = `<div class="container"><div class="answer"><h1>Congrats! You Have Guessed The Number</h1><h3>It Was ${number}</h3><a id="play-again>Play Again</a></div></div>`;

		// mainBox.children[0].appendChild(playAgain);
	} else if (number < randomNumber) {
		mainBox.appendChild = `<p class="message">Go Higher</p>`;
	} else if (number > randomNumber) {
		mainBox.appendChild = `<p class="message">Go Lower</p>`;
	} else if (number > 100 || number < 1) {
		mainBox.appendChild = `<p class="message">Number Should Be Between 1-100</p>`;
	} else {
		return;
	}
}
