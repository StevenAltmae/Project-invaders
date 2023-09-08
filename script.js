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
        delete keystate[e.keyCode];
    });

    if (keystate[leftKey]) {
        {
            ship.style.left = parseInt(ship.style.left) - 10 + 'px';
        }
    }
    if (keystate[upKey]) {
    //code to be executed when up arrow key is pushed.
    }
    if (keystate[rightKey]) {
        {
            ship.style.left = parseInt(ship.style.left) + 10 + 'px';
        }
    }
    if (keystate[downKey]) {
    //code to be executed when down arrow key is pushed.
    }

    function moveAlien() {
      if (alienX < 280) {
        alienX += 10;
      } else {
        alienX = 0;
        alienY += 30;
      }
      alien.style.left = alienX + 'px';
      alien.style.top = alienY + 'px';
    }

    function checkCollision() {
      const shipRect = ship.getBoundingClientRect();
      const alienRect = alien.getBoundingClientRect();

      if (
        shipRect.right > alienRect.left &&
        shipRect.left < alienRect.right &&
        shipRect.bottom > alienRect.top &&
        shipRect.top < alienRect.bottom
      ) {
        alert('Game Over!');
        location.reload();
      }
    }

    document.addEventListener('keydown', moveShip);

    setInterval(moveAlien, 1000);
    setInterval(checkCollision, 100);