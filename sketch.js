const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var sun, planet;

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  sun = ellipse(200,400,50,50);
  //sun.shapeColor = "yellow";
  planet = createSprite(10,400,30,30);
 // planet.shapeColor = "black";
  planet.velocityX = 5;
  planet.setCollider("circle",400,400);
 // planet.rotate(20);
 earth = Bodies.circle(200,200,40);
 World.add(world,earth);
  /*fixedRect=createSprite(400,100,50,80);
  fixedRect.shapeColor = "cyan";
  fixedRect.debug = true;

  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "cyan";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;*/
}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(earth.position.x, earth.position.y,20,20);
 drawSprites();

 if(planet.x - earth.x < earth.width/2 + planet.width/2 && 
  earth.x - planet.x < earth.width/2 + planet.width/2 ){
    planet.destroy();
    //planet.velocityX = planet.velocityX*(-1);
    //earth.velocityX = earth.velocityX*(-1);
}
if(planet.y - earth.y < earth.height/2 + planet.height/2 && 
  earth.y - planet.y < earth.height/2 + planet.height/2){
    planet.destroy();
    //planet.velocityY = planet.velocityY*(-1);
    //earth.velocityY = earth.velocityY*(-1);
  }

}


  
  //movingRect.x = World.mouseX; 
  //movingRect.y = World.mouseY;
 
    

  //drawSprites();

