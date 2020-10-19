var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	
	Box1=createSprite(400,550,200,30);
	Box1.shapeColor=color("red")
	Box2=createSprite(300,510,30,100);
	Box2.shapeColor=color("red")
	Box3=createSprite(500,510,30,100);
	Box3.shapeColor=color("red")

	packageSprite=createSprite(width/2, 50, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.1

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 550, width, 10 , {isStatic:true});
 	World.add(world, ground);

	boxx1 = Bodies.rectangle(400, 550, 200, 30, {isStatic:true});
	World.add(world, boxx1);
	boxx2 = Bodies.rectangle(300, 510, 30, 100, {isStatic:true});
	World.add(world, boxx2);
	boxx3 = Bodies.rectangle(500, 510, 30, 100, {isStatic:true});
	World.add(world, boxx3);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
	}
}
