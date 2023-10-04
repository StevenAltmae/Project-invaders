import EnemyController from "./EnemyController.js";
import Player from "./Player.js";
import BulletController from "./BulletController.js";


const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 600;

const background = new Image();
background.src = "space.jpg";

const playerBulletController = new BulletController(canvas, 10, "red", true);
const enemyBulletController = new BulletController(canvas, 4, "pink", false);
const enemyController = new EnemyController(
  canvas,
  enemyBulletController,
  playerBulletController
);
const player = new Player(canvas, 3, playerBulletController);

let isGameOver = false;
let didWin = false;
let isGameStarted = false; 


function startGame() {
    isGameStarted = true;
    requestAnimationFrame(gameLoop); 
  }

function gameLoop() {
  checkGameOver();
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  displayGameOver();
  if (!isGameOver) {
    enemyController.draw(ctx);
    player.draw(ctx);
    playerBulletController.draw(ctx);
    enemyBulletController.draw(ctx);
    requestAnimationFrame(gameLoop); 
  }
}

function displayStartMenu() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    ctx.fillStyle = "white";
    ctx.font = "36px Arial";
    ctx.fillText("Space Invaders", canvas.width / 2 - 100, canvas.height / 2 - 50);
  
    ctx.fillStyle = "green";
    ctx.fillRect(canvas.width / 2 - 60, canvas.height / 2, 120, 40);
    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    ctx.fillText("Start Game", canvas.width / 2 - 45, canvas.height / 2 + 30);
  
    canvas.addEventListener("click", handleStartClick);
  }

  function handleStartClick(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
  
    if (
        mouseX >= canvas.width / 2 - 60 &&
        mouseX <= canvas.width / 2 + 60 &&
        mouseY >= canvas.height / 2 &&
        mouseY <= canvas.height / 2 + 40
      ) {
        
        canvas.removeEventListener("click", handleStartClick);
        startGame();
      }
    }

    
displayStartMenu();

function displayGameOver() {
  if (isGameOver) {
    let text = didWin ? "You Win" : "Game Over";
    let textOffset = didWin ? 3.5 : 5;

    ctx.fillStyle = "white";
    ctx.font = "70px";
    ctx.fillText(text, canvas.width / textOffset, canvas.height / 2);
  }
}

function checkGameOver() {
  if (isGameOver) {
    return;
  }

  if (enemyBulletController.collideWith(player)) {
    isGameOver = true;
  }

  if (enemyController.collideWith(player)) {
    isGameOver = true;
  }

  if (enemyController.enemyRows.length === 0) {
    didWin = true;
    isGameOver = true;
  }
}

setInterval(game, 1000 / 60);
