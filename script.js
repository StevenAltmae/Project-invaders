const ship = document.getElementById('ship');
const alien = document.getElementById('alien');
const bullet = document.getElementById('bullet');

const leftKey = 37;
const rightKey = 39;
const spaceKey = 32;

const keystate = {};

document.addEventListener('keydown', (event) => {
  keystate[event.keyCode] = true;
});

document.addEventListener('keyup', (event) => {
  delete keystate[event.keyCode];
});

function moveShip() {
  if (keystate[leftKey] && parseInt(getComputedStyle(ship).left) > 0) {
    ship.style.left = parseInt(getComputedStyle(ship).left) - 10 + 'px';
  }
  if (keystate[rightKey] && parseInt(getComputedStyle(ship).left) < window.innerWidth - parseInt(getComputedStyle(ship).width)) {
    ship.style.left = parseInt(getComputedStyle(ship).left) + 10 + 'px';
  }
}

function moveAlien() {
  const alienPosition = parseInt(getComputedStyle(alien).left);
  const randomMove = Math.floor(Math.random() * 21) - 10; // Random movement between -10px and 10px
  const newAlienPosition = alienPosition + randomMove;

  if (newAlienPosition >= 0 && newAlienPosition <= window.innerWidth - parseInt(getComputedStyle(alien).width)) {
    alien.style.left = newAlienPosition + 'px';
  }
}

function shoot() {
  if (bullet.style.display === 'none') {
    bullet.style.display = 'block';
    bullet.style.left = parseInt(getComputedStyle(ship).left) + 20 + 'px';
    bullet.style.top = (parseInt(getComputedStyle(ship).top) - 10) + 'px';
    let bulletPosition = parseInt(getComputedStyle(bullet).top);
    const bulletSpeed = 1;

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
    

document.addEventListener('keydown', (event) => {
  if (event.keyCode === spaceKey) {
    shoot();
  }
});

setInterval(moveShip, 16);
setInterval(moveAlien, 1000);
