  var PLAY=1;
  var END=0;
  gameState=PLAY;

  var knife,aliegroup,fruitgroup,score,gameover;
  var score=0;
  var gameOverSound,knifeSound,fruitgroup1;

function preload(){
  
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  knife=loadImage("sword.png");
  alien1=loadImage("alien1.png");
  alien2=loadImage("alien2.png");
  gameover=loadImage("gameover.png");
  gameOverSound=loadSound("gameover.mp3");
  knifeSound=loadSound("knifeSwooshSound.mp3");
  
}

function setup(){

  sword=createSprite(300,500,0,0);
  sword.addImage(knife);
  
  aliengroup=new Group();
  fruitgroup=new Group();
  fruitgroup1=new Group();
}

function draw(){

  createCanvas(600,600);
  background("aqua");
  
  if(gameState===PLAY){
  
  sword.x=World.mouseX;
  sword.y=World.mouseY;
    
  fruits();
  enemy();
    fruits1();
 
  if(sword.isTouching(fruitgroup)){
  fruitgroup.destroyEach();
  score=score+2;
    knifeSound.play();
  }
    
    if(sword.isTouching(fruitgroup1)){
  fruitgroup1.destroyEach();
  score=score+2;
    knifeSound.play();
  }
    
  if(sword.isTouching(aliengroup)){
  gameState=END;
  aliengroup.destroyEach();
    gameOverSound.play();
    
  }
  }else if(gameState===END){
  sword.addImage(gameover);
  sword.scale=2;
  sword.x=300;
  sword.y=300;
  }
  
  drawSprites();
  
  textFont("georgia");
  textSize=35;
  text("SCORE:"+score,300,20)
}

function fruits1(){
  if(frameCount%80===0){
  var fruits=createSprite(100,100,10,10);
  fruits.velocityX=+(6+score/4);
    
  var rand=Math.round(random(1,4));
  switch (rand){

  case 1:fruits.addImage(fruit1);
  break;
  case 2:fruits.addImage(fruit2);
  break;
  case 3:fruits.addImage(fruit3);
  break;
  case 4:fruits.addImage(fruit4);
  break;
  default:break; 
  }
  
  fruits.y=Math.round(random(50,420));
  fruits.lifetime=80;
  fruits.scale=0.4;
  fruitgroup1.add(fruits);
  }
}


function fruits(){
  if(frameCount%80===0){
  var fruit=createSprite(500,100,10,10);
  fruit.velocityX=-(6+score/4);
    
  var rand=Math.round(random(1,4));
  switch (rand){

  case 1:fruit.addImage(fruit1);
  break;
  case 2:fruit.addImage(fruit2);
  break;
  case 3:fruit.addImage(fruit3);
  break;
  case 4:fruit.addImage(fruit4);
  break;
  default:break; 
  }
  
  fruit.y=Math.round(random(50,420));
  fruit.lifetime=80;
  fruit.scale=0.4;
  fruitgroup.add(fruit);
  }
}

function enemy(){
  if(frameCount%90===0){
  var alien=createSprite(500,100,10,10);
  alien.velocityX=-(6+score/10);
  
  var monster=Math.round(random(1,2));
  switch (monster){
  case 1:alien.addImage(alien1);
  break;
  case 2:alien.addImage(alien2);
  break;
  default:break;
  }
  
  alien.y=Math.round(random(50,420));
  alien.scale=1.2;
  alien.lifetime=80;
  aliengroup.add(alien);
  }
}


