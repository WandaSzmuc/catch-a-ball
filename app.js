const square = document.querySelectorAll(".square");
const ball = document.querySelectorAll(".ball");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
  square.forEach((className) => {
    className.classList.remove("ball");
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("ball");

  hitPosition = randomPosition.id;
}

square.forEach((el) => {
  el.addEventListener("mouseup", () => {
    if (el.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
    }
  });
});

function moveBall() {
  let timerId = null;
  timerId = setInterval(randomSquare, 700);
}
moveBall();
function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime === 0) {
    clearInterval(timerId);
    alert(`GAME OVER! Your final score is` + result);
  }
}
let timerId = setInterval(countDown, 1000);
