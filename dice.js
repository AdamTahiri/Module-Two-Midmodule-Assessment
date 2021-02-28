// const dice = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"];
const dice = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

const input = document.querySelector("#die-number-input");
const showDice = document.querySelector("#dice-para");
const sumOfDice = document.querySelector("#sum-para");
const historyUl = document.querySelector("ul");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  sumOfDice.textContent = "Sum = "
  sum = 0;
  displayDice = "";
  for (let i = 0; i < input.valueAsNumber; i++) {
    let randIdx = Math.floor(Math.random() * dice.length);
    displayDice += dice[randIdx];
    sum += randIdx + 1;
  }
  showDice.textContent = displayDice;
  sumOfDice.textContent = sumOfDice.textContent + sum;

  if (input.valueAsNumber > 0) {
    const li = document.createElement("li");
    li.textContent = `${displayDice} = ${sum}`;
    historyUl.appendChild(li);
  }
    form.reset();
});
