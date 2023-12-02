//2 Adicione o código para importar os módulos no arquivo sketch.js:
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



// 3 Adicione create canvas (adicionar tela), engine (mecanismo), e world (mundo)dentro da função setup() no arquivo sketch.js.
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  //4 Escreva o código dentro da função setup() no arquivo sketch.js para criar a variável ball_options e o objeto bola.
  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   // explica e faz antes
   var ground_options ={
     isStatic: true
   };
  
  
// 7 aluno Crie o corpo retângulo chamado ground (solo) e adicione ao world dentro da funçãosetup():
  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);
  
// 5. Adicione o objeto bola ao mundo:
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  // 6. Atualize os movimentos Adicione as posições x e y da bola:
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  // 8. Dentro da função draw(), exiba o corpo do retângulo:
  rect(ground.position.x,ground.position.y,500,20);
 
console.log(ground.position.y);

  
  
}

