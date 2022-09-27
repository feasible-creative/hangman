//Randomly select word from array
//fill in underscores for missing letters until guessed
//retrieve guess from player
//if correct, fill in underscore
//if incorrect, add body part
//once word is guessed or full body is built, end game

const words = ["car", "boat", "plane"];
const word = document.querySelector("#word");
const hangman = document.querySelector("#hangman");

const startButton = document.querySelector('#start');
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];



startButton.addEventListener('click', () => {

const randomIndex = Math.floor(Math.random() * words.length);
const randomWord = words[randomIndex];
// console.log(randomWord);

const keyboardContainer = document.querySelector("#container");
const guess = document.querySelector("#guesses");

const letters = [...randomWord];
word.textContent = letters.join(" ");

// console.log(letters);


for (i = 0; i <= alphabet.length - 1; i++) {
  const keys = document.createElement("button");
  keys.textContent = alphabet[i];
  keys.classList.add("keyboard");
  keyboardContainer.appendChild(keys);

  keys.addEventListener("click", () => {
    if (letters.includes(keys.textContent)) {
      console.log("YES");
      word.style.color = "gold";
    }

    // console.log(letters[0])

    console.log(keys.textContent);
    guess.textContent += keys.textContent;
    // console.log(randomWord.includes(keys.textContent));

    if (!randomWord.includes(keys.textContent)) {
      hangman.textContent += "add body part";
    }

    if (keys.textContent === "") {
      alert("Try a different letter");
    }

    keys.textContent = "";
  });
}

});
