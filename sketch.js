
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,400);
  ground = createSprite (250,390,1000,10);
ground.velocityX=-5;
  monkey = createSprite (100,355,1,1);
  monkey.addAnimation("a",monkey_running);
  monkey.scale=0.1;
  
}


function draw() {
background("white");
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown ("space")&&monkey.y==354.3){
    monkey.velocityY=-15;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  rock();
  fruit();
  drawSprites();
}

function rock (){
  if(frameCount%75==0){
    obstacle = createSprite (500,360,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-10;
    obstacle.scale=0.30;
  }
    
}
function fruit(){
  if(frameCount%75==0){
    banana = createSprite (500,200,10,10);
    banana.addImage(bananaImage);
    banana.velocityX=-10;
    banana.scale=0.1;
  }
}




