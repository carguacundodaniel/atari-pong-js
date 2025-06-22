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
