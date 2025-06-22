const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let paddleY = 200;
const paddleHeight = 100;
const paddleSpeed = 5;

let ballX = 400;
let ballY = 250;
let ballSpeedX = 4;
let ballSpeedY = 3;

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
}

function update() {
  draw();

  // Movimiento pelota
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Rebotes pelota
  if (ballY + 10 > canvas.height || ballY - 10 < 0) {
    ballSpeedY *= -1;
  }

  if (ballX + 10 > canvas.width || ballX - 10 < 0) {
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
