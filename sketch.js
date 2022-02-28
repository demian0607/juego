var bg,bgImg
var player,playerImg
var cambioPantalla = 0
var paredes
var esc1,esc2,esc3,esc4,esc5,esc6,esc7,esc8,esc9


function preload(){
  playerImg = loadImage("./personaje/IndividualSprites/adventurerIdle0213.png")
  bgImg = loadImage("./bg/opp5castletiles/environment/tiles/castle/castle.png")
}

function setup(){
  createCanvas(900,450);
  bg = createSprite(450,220)
  bg.addImage(bgImg)
  bg.scale = 2
  player = createSprite(400,280);
  player.addImage(playerImg);
  player.scale = 2
  paredes = createEdgeSprites();
  player.setCollider("rectangle",0,0,20,40)
  esc1 = createSprite(160,320,310,3);
  esc2 = createSprite(350,320,25,25);
  esc2.debug = true
  esc2.setCollider("circle",0,0,30)
  esc3 = createSprite(400,320,100,3)


}

function draw() {
  background("#02033E")



  if(player.x > 900 && cambioPantalla == 0){
    bg.mirrorX(-1);
    player.x = 10
    cambioPantalla = 1
  }

  if(cambioPantalla == 1){
    player.collide(paredes)
  }

  if (keyDown("d")){
    player.x = player.x +5
    player.mirrorX(1)
    
  }

  if (keyDown("a")){
    player.x = player.x -5
    player.mirrorX(-1)
    
  }

  if (keyDown("space")){
    player.velocityY = -5
    player.velocityX = 0
    
  }

  player.velocityY = player.velocityY +0.3

  player.collide(esc1);
  player.collide(esc2);
  player.collide(esc3);
  
  drawSprites()
}

