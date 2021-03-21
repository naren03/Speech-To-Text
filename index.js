window.SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;

const speakBtn = document.getElementById('speak');
const output = document.querySelector('.result');
const mainBox = document.querySelector('.container');
//speech recognition var
let myRecognition = new window.SpeechRecognition();
//random Number generator
// let randomNumber = Math.floor(Math.random() * 100) + 1;
let randomNumber = 15;
console.log('Number:' + randomNumber);

//clicking on speak now
speakBtn.addEventListener('click', () => {
	myRecognition.start();
});

myRecognition.addEventListener('result', (event) => {
	let userInput = event.results[0][0].transcript;
	chkNumber(userInput);
});

//functions

function chkNumber(number) {
	speakBtn.style.display = 'none';

	if (number === randomNumber) {
		mainBox.innerHTML = `<div class="answer"><h1>Congrats! You Have Guessed The Number</h1><h3>It Was ${number}</h3></div>`;

		let playAgain = document.createElement('a');

		playAgain.innerHTML = 'Play Again';

		playAgain.addEventListener('click', () => {
			window.location.reload();
		});

		mainBox.children[0].appendChild(playAgain);
	} else if (randomNumber > number) {
		let answer = document.createElement('div');

		answer.setAttribute('class', 'user-input');

		answer.innerHTML = `<p>You Said:</p><span>${number}</span><p class="message">Go Higher</p>`;
		output.appendChild(answer);
	} else {
		let answer = document.createElement('div');

		answer.setAttribute('class', 'user-input');

		answer.innerHTML = `<p>You Said:</p><span>${number}</span><p class="message">Go Lower</p>`;

		output.appendChild(answer);
	}
}
