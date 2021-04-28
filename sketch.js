const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var boy,boyImg;
var tree;
var stone;
var m1,m2,m3,m4,m5,m6,m7,m8,m9;
var rubbad;
var gameState = "onSling";

function preload(){
  boyImg=loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

  ground=new Ground(400,390,800,10);
  
  tree= new Tree(600,300);

  stone= new Stone(145,255,0.5);

  m1=new Mango(580,150,10,10);
  m2=new Mango(600,220,10,10);
  m3=new Mango(680,100,10,10);
  m4=new Mango(480,160,10,10);
  m5=new Mango(740,155,10,10);
  m6=new Mango(620,70,10,10);
  m7=new Mango(660,170,10,10);
  m8=new Mango(530,200,10,10);
  m9=new Mango(530,110,10,10);

  rubbad=new Sling(stone.body,{x:145,y:255})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);

  ground.display();
  boy=image(boyImg,130,205,135,185);
  tree.display();
  stone.display();

  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();

  rubbad.display();

  detectCollision(stone,m1);
  detectCollision(stone,m2);
  detectCollision(stone,m3);
  detectCollision(stone,m4);
  detectCollision(stone,m5);
  detectCollision(stone,m6);
  detectCollision(stone,m7);
  detectCollision(stone,m8);
  detectCollision(stone,m9);

  textSize(20)
  text("Drag,aim,and shoot the mangoes off the tree",10,30)
  text("Press space to get a second chance",10,60)
}

function mouseDragged(){
  if (gameState=="onSling"){
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  rubbad.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
     rubbad.attach(stone.body);
     gameState="onSling"
  }
}

function detectCollision(lstone,lmango){

  mangoPos=lmango.body.position
  stonePos=lstone.body.position
  
  var distance=dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y)
  
  	if(distance<=lmango.radius+lstone.radius)
    {
     Matter.Body.setStatic(lmango.body,false);
    }

  }