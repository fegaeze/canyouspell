
// Variables
var wordBank = ["agreement", "lawyer", "lovely", "assignment", "learning", "computer", "keyboard", "pumpkin", "egoistic", "although", 
"american", "business", "challenge", "commercial", "debate", "early", "floor", "damaged", "league", "angels", "caricature", "deadly"];

var playButton = document.querySelector("#playButton");
var submitButton = document.querySelector("#submit");
var nextButton = document.querySelector("#next");
var input = document.querySelector("#word");
var wrongAnswer = document.querySelector("#wrongAnswer");
var rightAnswer = document.querySelector("#rightAnswer");
var scoreText = document.querySelector("#scoreText");
var correction = document.querySelector("#correction");
var correctWord = document.querySelector("#correctWord");
var currentWord = randomWord();

// Functions
function randomWord() {
    return wordBank[Math.floor(Math.random() * wordBank.length)];
};
function speak(placeholder) {
    var chosenWord = new SpeechSynthesisUtterance(placeholder);
    window.speechSynthesis.speak(chosenWord);
};
function reset() {
    input.value = "";
    currentWord = randomWord();
    rightAnswer.classList.remove("d-none");
    wrongAnswer.classList.add("d-none");
    correction.classList.add("d-none");
    scoreText.textContent = "You're Amazing!"
    submitButton.removeAttribute("uk-toggle");
};
function submit() {
    var submittedWord = input.value.toLowerCase();

    if(submittedWord !== currentWord) {
        rightAnswer.classList.add("d-none");
        wrongAnswer.classList.remove("d-none");
        correction.classList.remove("d-none");
        scoreText.textContent = "Wrong, don't give up though!"
        correctWord.innerHTML = "\"" + currentWord + "\"";
    }
};


// Events
playButton.addEventListener("click", function() {
    speak(currentWord);
});
input.addEventListener("change", function() {
    submitButton.removeAttribute("uk-toggle");
    if(input.value.length > 0) {
        submitButton.setAttribute("uk-toggle", "target: #submitted");
    }
})
submitButton.addEventListener("click", submit);
nextButton.addEventListener("click", reset);

