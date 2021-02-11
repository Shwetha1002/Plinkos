const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var platform, plinkos;
var particles1 = [];
var plinkos1 = [];
var divisions1 = [];
var divisionHeight = 300;


var engine, world;

function setup() {
  engine = Engine.create();
    world = engine.world;
  createCanvas(480,800);
 // createSprite(400, 200, 50, 50);
platform = new Ground(240, 780, 480, 20)
//plinkos = new Plinko(20,20,10)
for (k= 0; k <= width; k = k+80){
  divisions1.push(new Division(k, height- divisionHeight/2, 10, divisionHeight));
  }

for (j= 40; j <= width; j = j+50){
    plinkos1.push(new Plinko(j,75,10));
    }

for (j= 15; j <= width-10; j = j+50){
      plinkos1.push(new Plinko(j,175,10));
      }
 for (j= 40; j <= width; j = j+50){
  plinkos1.push(new Plinko(j,275,10));
   }
 for (j= 15; j <= width-10; j = j+50){
 plinkos1.push(new Plinko(j,375,10));
 }



}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  platform.display();
  //plinkos.display();
if(frameCount % 60 ==0) {
  particles1.push(new Particles (random(width/2-10, width/2+10),10,10));
}

  for (k= 0; k < divisions1.length; k++){
    divisions1[k].display();
   
    }
    for (j= 0; j < plinkos1.length; j++){
      plinkos1[j].display();
     
      }

      for (f= 0; f < particles1.length; f++){
        particles1[f].display();
       
        }
      


  
  

  drawSprites();
}