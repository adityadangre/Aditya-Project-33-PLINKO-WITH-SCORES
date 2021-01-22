var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var dscore=[],dx=[],dy=[];
var divisionHeight=300;
var score =0, count=0;
var particle;
var gameState="PLAY";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  for (var l=0; l<10;l++){
    dscore.push(floor(random(1,10))*50);
    
  }
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }  
}
 
function draw() {
 background("black");
 textSize(20)
 text("Score : "+score,20,30);
 /*text("500",25,550);
 text("500",105,550);
 text("500",185,550);
 text("500",265,550);
 text("100",345,550);
 text("100",425,550);
 text("100",500,550);
 text("200",585,550);
 text("200",665,550);
 text("200",745,550);*/
 var px=25;
 for(l=0;l<10;l++){
   text(dscore[l],px,550);
   px=px+80;
 }

 Engine.update(engine);
  
 for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  
  if(particle!=null){
   particle.display();
   particles.push(particle);
   if(particle.body.position.y>500){
        var p=particle.body.position.x
        if(p>0 && p<80){
          score=score+dscore[0];
          particle=null;
        }else
        if(p>80 && p<160){
          score=score+dscore[1];
          particle=null;
        }else
        if(p>160 && p<240){
          score=score+dscore[2];
          particle=null;
        }else
        if(p>240 && p<320){
          score=score+dscore[3];
          particle=null;
        }else
        if(p>320 && p<400){
          score=score+dscore[4];
          particle=null;
        }else
        if(p>400 && p<480){
          score=score+dscore[5];
          particle=null;
        }else
        if(p>480 && p<560){
          score=score+dscore[6];
          particle=null;
        }else
        if(p>560 && p<640){
          score=score+dscore[7];
          particle=null;
        }else
        if(p>640 && p<720){
          score=score+dscore[8];
          particle=null;
        }else
        if(p>720 && p<800){
          score=score+dscore[9];
          particle=null;
        }     
    }
    /* if(particle.body.position.x<330){
     
       score=score+500;
       particle=null;
       console.log("500");
     }
     else{
       if(particle.body.position.x>330 && particle.body.position.x<550) {
        console.log(particle.body.position.x);
         score=score+100;
         particle=null;
         console.log("100");
       }
       else{
         if(particle.body.position.x>550 && particle.body.position.x<800){
          console.log(particle.body.position.x);
           score=score+200;
           particle=null;
           console.log("200");
         }
       }
     }
   }*/
 }
 for (var j = 0; j < particles.length; j++) {
   
  particles[j].display();
     
 }
 if(count>=5 && gameState==="END") {
  textSize(50);
   text("GAME OVER",240,240);
   textSize(25);
   text("Press Space To Start Again",240,330);
 }

}
function mousePressed(){
  if(gameState!="END"){
    particle=new Particle(mouseX,10,10,10);
    console.log(particle);
    count=count+1;
    if(count>=5)
    gameState="END";
  }
}

function keyPressed()
{
  console.log(gameState);
  if(keyCode===32){
   gameState="PLAY"
   score=0;
   count=0;
   particles=[];
   particle=null;
}
}
/* if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   }*/
 
 /* for (var j = 0; j < particles.length; j++) {
       
    particles[j].display();
       
   }*/