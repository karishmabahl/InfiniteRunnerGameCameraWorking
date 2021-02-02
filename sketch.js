var ground, background1, backgroundI, score;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4;
var obstacle5, obstacle6, player, playerI;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload() {
  backgroundI = loadImage("background.jpg");
  playerI = loadImage("player.png");
  obstacle1 = loadImage("o.png");

}

function setup() {
  createCanvas(displayWidth*4, displayHeight);

  player = createSprite(50, displayHeight - 250, 10, 10);
  player.addImage("player", playerI);
  player.scale = 0.3

  ground = createSprite(200, 310, 450, 10);
  ground.visible = false;

  score = 0

  obstaclesGroup = createGroup();

}

function draw() {
  background(backgroundI);

  if (keyWentDown("right")) {
    player.x = player.x + 10;
  }

 if (player.x > displayWidth / 2) {
    camera.position.x = displayWidth/2;
    camera.position.x = player.x;
}

  if(player.x > displayWidth - 50){
    player.x = 50;
  }

  console.log(player.x)
  drawSprites();

  textSize(20);
  stroke("white");
  fill("white");
  text("score: " + score, 50, 50)
  score = score + Math.round(getFrameRate() / 60);

  if (frameCount===0 || frameCount % 250 === 0) {
    obstacles = createSprite(displayWidth, displayHeight - 250, 10, 10);
    obstacles.addImage("obstacles", obstacle1);
    obstacles.scale = 0.5;
    obstacles.velocityX = -5;
    //obstacles.lifetime = 300;
  }


}















