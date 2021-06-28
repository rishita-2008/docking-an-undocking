var iss, spacecraft, hasDocked;
hasDocked=false


function preload(){
  bg= loadImage("spacebg.jpg");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(600,350);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.15;
  
  iss = createSprite(330,130);
  iss.addImage(issimg);
  iss.scale = 0.25;
}

function draw() {
  background(bg);
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1);
    if(keyDown("left")){
      spacecraft.x=spacecraft.x-1
      spacecraft.addImage(scimg3)
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft.x=spacecraft.x+1
      spacecraft.addImage(scimg2)
    }

    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(scimg1)
    }

    if(keyDown(UP_ARROW)){
      spacecraft.y=spacecraft.y-2
    }
  }
  
  drawSprites();
}