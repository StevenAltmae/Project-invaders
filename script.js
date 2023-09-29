const ship = document.getElementById('ship');
const alien = document.getElementById('alien');
let gameState = 'start';
let ship_coord = ship.getBoundingClientRect();

ship.style.left = '0px';

document.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    gameState = gameState == 'start' ? 'play' : 'start';
  }

  if (gameState == 'play') {
    switch (event.keyCode) {
      case 37:
          if (ship.style.left != "50px"){
              ship.style.left = parseInt(ship.style.left) - 30 + "px"
              ship_coord = ship.getBoundingClientRect();
          }
          break;
      case 39:
          if (alien.style.left != "50px"){  
              alien.style.left = parseInt(player1.style.left) + 30 + "px"
              ship_coord = ship.getBoundingClientRect();
          }
          break;
    }
  }
});