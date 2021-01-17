var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(700,600);
   ball = createSprite(random(20,750),200,50,50)
   ball.shapeColor = "white"
   ball.velocityX = 4;
   ball.velocityY = 8;
   block1 = createSprite(70,580,150,30)
   block1.shapeColor = "red"
   block2 = createSprite(250,580,150,30)
   block2.shapeColor = "orange"
  block3 = createSprite(430,580,150,30)
   block3.shapeColor = "purple"
   block4 = createSprite(620,580,150,30)
   block4.shapeColor = "blue"


    

}

function draw() {
    background(rgb(169,169,169));
   
    edges = createEdgeSprites();
   ball.bounceOff(edges)

    if(block1.isTouching(ball)&& ball.bounceOff(block1)){
        ball.shapeColor = "red"
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "orange"
        ball.velocityX = 0
        ball.velocityY = 0
    }

    if(block3.isTouching(ball)&& ball.bounceOff(block3)){
        ball.shapeColor = "purple"
    }

    if(block4.isTouching(ball)&& ball.bounceOff(block4)){
        ball.shapeColor = "blue"
    }
   
    drawSprites();
    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
