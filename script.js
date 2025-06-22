const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let paddleY = 200;
const paddleHeight = 100;
const paddleSpeed = 5;

let ballX = 400;
let ballY = 250;
let ballSpeedX = 4;
let ballSpeedY = 3;

let score = 0; // variable temporal para puntaje

function draw() {
  // Fondo negro
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
}

function update() {
  draw();

  // Movimiento pelota
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Rebotes pelota en paredes superior e inferior
  if (ballY + 10 > canvas.height || ballY - 10 < 0) {
    ballSpeedY *= -1;
  }

  // Rebote pelota en paddle
  if (
    ballX - 10 <= 20 && // cerca del paddle horizontalmente
    ballY >= paddleY &&
    ballY <= paddleY + paddleHeight
  ) {
    ballSpeedX *= -1;
    score++; // aumenta puntaje
  }

  // Rebote pelota en pared derecha
  if (ballX + 10 > canvas.width) {
    ballSpeedX *= -1;
  }
}

document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowUp" && paddleY > 0) {
    paddleY -= paddleSpeed;
  } else if (event.key === "ArrowDown" && paddleY < canvas.height - paddleHeight) {
    paddleY += paddleSpeed;
  }
});

setInterval(update, 1000 / 60);
