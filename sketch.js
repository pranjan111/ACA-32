
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  Ironmanimages = loadImage("images/iron.png");
  platformImage = loadImage("images/stone.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
 bg.addImage(backgroundImg);
 bg.scale =2;
 bg.velocityY = -10;
 Ironman = createSprite(100,500,40,40);
 Ironman.addImage(Ironmanimages);
 Ironman.scale = 0.3;
 ground = createSprite(200,585,400,10);
 ground.visible = false;
 platformGroup = new Group();
}

function draw() {
  if (bg.y<200){
    bg.y=bg.width/4;}
  if (keyDown("up")) {
    Ironman.velocityY = -10;
  }
  if (keyDown("left")) {
    Ironman.x = Ironman.x - 5;
  }
  if (keyDown("right")) {
    Ironman.x = Ironman.x + 5;
  }
  Ironman.velocityY = Ironman.velocityY + 0.5;
  Ironman.collide(ground);
  generatePlatforms();
  for (var i = 0; i < platformGroup.length; i++){
    var temp = platformGroup.get(i);
    if (temp.isTouching(Ironman)) {
      ironman.collide(temp);
    }

  }

 
    
    drawSprites();
    
   
}
function generatePlatforms() {
  if (frameCount % 60 === 0) {
    var brick = createSprite(1200, 10, 40, 10);
    brick.x = random(50, 850);
    brick.addImage(platformImage);
    brick.velocityY = 5;
    brick.lifetime = 250;
    platformGroup.add(brick);
  }
}
