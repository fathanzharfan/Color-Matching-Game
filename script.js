// script.js
const colors = [
  "red", "blue", "green", "yellow",
  "purple", "orange", "pink", "brown"
];

let correctColor = "";
let score = 0;

const targetColor = document.getElementById("targetColor");
const choices = document.getElementById("choices");
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

function getRandomColors() {
  let shuffled = [...colors].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
}

function startGame() {
  result.textContent = "";
  choices.innerHTML = "";

  let options = getRandomColors();
  correctColor = options[Math.floor(Math.random() * options.length)];

  targetColor.style.background = correctColor;

  options.forEach(color => {
    const div = document.createElement("div");
    div.classList.add("choice");
    div.style.background = color;

    div.onclick = function () {
      if (color === correctColor) {
        score++;
        result.textContent = "Correct!";
      } else {
        result.textContent = "Wrong! Correct answer was " + correctColor;
      }

      scoreDisplay.textContent = score;
    };

    choices.appendChild(div);
  });
}

startGame();
