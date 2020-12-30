
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var j_engine , j_world;
var ob1;
var ball;

function setup() {
  createCanvas(400,400);

  j_engine = Engine.create();
  j_world = j_engine.world;

  var options = {
    isStatic : true
  }
  
ob1 = Bodies.rectangle(200,400,300,30, options);
World.add(j_world , ob1);
  console.log(ob1);
  console.log (ob1.position);
  console.log (ob1.position.x);
  
  var balloptions = {
    restitution: 0.5
  }

  ball = Bodies.circle(200,100,30, balloptions);
  World.add(j_world , ball);
}

function draw() {

  Engine.update(j_engine);
  background(0); 
  rectMode(CENTER);
  fill("brown");
  rect(ob1.position.x, ob1.position.y ,300 ,30);
  
  ellipseMode(RADIUS);
  fill("lightblue");
  ellipse(ball.position.x, ball.position.y, 30, 30);
}
