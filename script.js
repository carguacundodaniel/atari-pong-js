const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function draw() {
  // Fondo negro
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Paddle
  ctx.fillStyle = "white";
  ctx.fillRect(10, 200, 10, 100);

  // Pelota
  ctx.beginPath();
  ctx.arc(400, 250, 10, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
}

setInterval(draw, 1000 / 60);
<<<<<<< HEAD
=======

let ballX = 400;
let ballY = 250;
let ballSpeedX = 4;
let ballSpeedY = 3;

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Paddle fijo
  ctx.fillStyle = "white";
  ctx.fillRect(10, 200, 10, 100);

  // Pelota en movimiento
  ctx.beginPath();
  ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();

  // Movimiento
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Rebotes
  if (ballY + 10 > canvas.height || ballY - 10 < 0) {
    ballSpeedY *= -1;
  }

  if (ballX + 10 > canvas.width || ballX - 10 < 0) {
    ballSpeedX *= -1;
  }
}
>>>>>>> ebb7f90 (feat: agregar movimiento automático de la pelota con rebotes)
