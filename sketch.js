var sumo1,sumo2,sumo11,sumo21;
var feild,button1,button2;
var a,dowm,a1,down1,feild1;
function preload() {
sumo11=loadImage("assets/sumo1.png");
sumo21=loadImage("assets/sumo2.png");
w1=loadImage("assets/w.png");
down1=loadImage("assets/down.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  feild1=createSprite(width/2,height/2,height/2+height/6,height/2+height/6);
  feild1.visible=false;
  feild1.debug=true;
  sumo1=createSprite(width/2,height/4,1,1);
  sumo1.addImage(sumo11);
  sumo1.scale=0.3;
  sumo1.setCollider("rectangle",0,0,150,150);
  sumo2=createSprite(width/2,height/2+height/4,1,1);
  sumo2.addImage(sumo21);
  sumo2.scale=0.3;
  sumo2.setCollider("rectangle",0,0,150,150);
  w= createSprite(width/2,height/2+height/3+height/12,height/15,height/15); 
  w.addImage(w1);
  w.scale=0.1;
  down= createSprite(width/2,height/10,height/15,height/15); 
  down.addImage(down1);
  down.scale=0.15;
}

function draw() {
  background("white");
  feild=ellipse(width/2,height/2,height/2+height/6,height/2+height/6);
  button1=ellipse(width/2,height/10,height/15,height/15);
  button2=ellipse(width/2,height/2+height/3+height/12,height/15,height/15); 
  if(keyWentDown("w")){
    sumo2.position.y-=5;
    if (sumo2.isTouching(sumo1)) {
      sumo1.position.y-=5;
    }
  }
  if(keyWentDown("down")){
    sumo1.position.y+=5;
    if (sumo1.isTouching(sumo2)) {
      sumo2.position.y+=5;
    }
  }
  
  if (!sumo1.isTouching(feild1)) {
    sumo1.destroy();
  }
  if (!sumo2.isTouching(feild1)) {
    sumo2.destroy();
  }
  drawSprites();
}