var player;
var enemies = [];

function setup() {
  createCanvas(640, 480);

  player = new Player();
  enemies.push(new Enemy());
}

function draw() {
    background(255, 0, 255);

    for (var i = enemies.length-1; i >= 0; i--) {
        enemies[i].render();
        enemies[i].hits(player);

        if (enemies[i].offscreen()) // remove enemy, because it is offscreen
            enemies.splice(i, 1);
    }

    player.render();

    if (frameCount % 75 == 0) // add new enemy
        enemies.push(new Enemy());
}

function keyPressed() {
    if (key == ' ') 
        player.up();
}