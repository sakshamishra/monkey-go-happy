


var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(400,400);
  monkey=createSprite(80,315,20,20)  
   monkey.addAnimation("moving", monkey_running);
   monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

 survivalTime=0;
}


function draw() {
 background(255);
 
   stroke("black");
  textSize(25);
  fill("black")
  text("survivalTime:"+survivalTime,100,50);
  survivalTime = Math.round(frameCount/30);


  if(ground.x<0) {
    ground.x=ground.width/2;
   }
  
   if(keyDown("space")){
     monkey.velocityY = -12;
   }
  
  
    monkey.velocityY =  monkey.velocityY +0.8
  
   monkey.collide(ground);
  
  spawnBanana();
  spawnObstacle();
  
      
  
  drawSprites();
}
 function spawnBanana(){
  //making cloud only once in 60 frames
  if (frameCount % 60 === 0){
    //making cloud outside canvas and giving velocity
   banana = createSprite(400,300,40,20);
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    //spawning clouds at random heights
    banana.y = Math.round(random(150,80));
    //adjusting depth to put trex infront of cloud on display
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  }
}

  function spawnObstacle(){
  //making cloud only once in 60 frames
  if (frameCount % 140 === 0){
    //making cloud outside canvas and giving velocity
   obstacle = createSprite(400,322,40,20);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.13;
    obstacle.velocityX = -5;
    //spawning clouds at random heights
    //adjusting depth to put trex infront of cloud on display
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  }
}