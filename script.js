const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let paddleY = 200;
const paddleHeight = 100;
const paddleSpeed = 5;

let ballX = 400;
let ballY = 250;
let ballSpeedX = 4;
let ballSpeedY = 3;

let score = 0;
let gameOver = false;

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Paddle
  ctx.fillStyle = "white";
  ctx.fillRect(10, paddleY, 10, paddleHeight);

  // Pelota
  ctx.beginPath();
  ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();

  // Puntaje
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Puntaje: " + score, 10, 30);

  // Mensaje game over
  if (gameOver) {
    ctx.font = "40px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("¡Game Over!", canvas.width / 2 - 100, canvas.height / 2);
  }
}

function resetBall() {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  // Cambiar dirección inicial al azar
  ballSpeedX = 4 * (Math.random() > 0.5 ? 1 : -1);
  ballSpeedY = 3 * (Math.random() > 0.5 ? 1 : -1);
}

function update() {
  if (gameOver) return; // Detener juego si terminó

  draw();

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballY + 10 > canvas.height || ballY - 10 < 0) {
    ballSpeedY *= -1;
  }

  // Rebote pelota en paddle
  if (
    ballX - 10 <= 20 &&
    ballY >= paddleY &&
    ballY <= paddleY + paddleHeight
  ) {
    ballSpeedX *= -1;
    score++;
  }

  // Si la pelota pasa el paddle: game over
  if (ballX - 10 < 0) {
    gameOver = true;
  }

  if (ballX + 10 > canvas.width) {
    ballSpeedX *= -1;
  }
}

document.addEventListener("keydown", function(event) {
  if (gameOver && event.key === "Enter") {
    // Reiniciar juego al presionar Enter
    score = 0;
    gameOver = false;
    resetBall();
  }
  if (event.key === "ArrowUp" && paddleY > 0) {
    paddleY -= paddleSpeed;
  } else if (event.key === "ArrowDown" && paddleY < canvas.height - paddleHeight) {
    paddleY += paddleSpeed;
  }
});

resetBall();
setInterval(update, 1000 / 60);
