const ship = document.getElementById('ship');
const alien = document.getElementById('alien');
    let alienX = 0;
    let alienY = 50;

var leftKey = 37, upKey = 38, rightKey = 39, downKey = 40;
var keystate;
document.addEventListener("keydown", function (e) {
    keystate[e.keyCode] = true;
});
document.addEventListener("keyup", function (e) {
    delete keystate[e.keyCode];xx
});

document.addEventListener('keyup', (event) => {
  delete keystate[event.keyCode];
});

function moveShip() {
  if (keystate[leftKey] && parseInt(getComputedStyle(ship).left) > 40) {
    ship.style.left = parseInt(getComputedStyle(ship).left) - 10 + 'px';
  }
  if (keystate[rightKey] && parseInt(getComputedStyle(ship).left) < window.innerWidth - parseInt(getComputedStyle(ship).width)) {
    ship.style.left = parseInt(getComputedStyle(ship).left) + 10 + 'px';
  }
}

function moveAlien() {
  const alienPosition = parseInt(getComputedStyle(alien).left);
  const randomMove = Math.floor(Math.random() * 21) - 10;
  const newAlienPosition = alienPosition + randomMove;

function checkCollision() {
      const shipRect = ship.getBoundingClientRect();
      const alienRect = alien.getBoundingClientRect();

function shoot() {
  if (bullet.style.display === 'none') {
    bullet.style.display = 'block';
    bullet.style.left = parseInt(getComputedStyle(ship).left) + 20 + 'px';
    bullet.style.top = (parseInt(getComputedStyle(ship).top) - 10) + 'px';
    let bulletPosition = parseInt(getComputedStyle(bullet).top);
    const bulletSpeed = 1;
  }
    function moveBullet() {
      if (bulletPosition > -10) {
        bulletPosition -= bulletSpeed;
        bullet.style.top = bulletPosition + 'px';

        const shipRect = ship.getBoundingClientRect();
        const alienRect = alien.getBoundingClientRect();
        const bulletRect = bullet.getBoundingClientRect();

        if (
          bulletRect.right > alienRect.left &&
          bulletRect.left < alienRect.right &&
          bulletRect.bottom > alienRect.top &&
          bulletRect.top < alienRect.bottom
        ) {
          bullet.style.display = 'none';
          alien.style.left = '50%';
          alien.style.top = '20px';
        } else {
          requestAnimationFrame(moveBullet);
        }
      } else {
        bullet.style.display = 'none';
      }
      moveBullet();
  }
}
document.addEventListener('keydown', (event) => {
  if (event.keyCode === spaceKey) {
    shoot();
  }
});

  setInterval(moveShip, 16);
  setInterval(moveAlien, 1000);
  }
}
