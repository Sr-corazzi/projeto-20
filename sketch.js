  var canvas;
var block1,block2,block3,block4;
  var ball
var edges;




function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
     block1.shapeColor = "blue";

      block2 = createSprite(295,580,200,30);
       block2.shapeColor = "orange";

        block3 = createSprite(495,580,200,30);
         block3.shapeColor = "green";
    
          block4 = createSprite(695,580,200,30);
           block4.shapeColor = "red";



    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(205,155,55);
    ball.velocityY=5;
    ball.velocityX=25;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    
        //ball.bounceOff(block1);
      //ball.bounceOff(block2);
   //ball.bounceOff(block3);
 //ball.bounceOff(block4);
    if( ball.isTouching(block1)){
        ball.shapeColor = "blue";
        ball.velocityY=ball.velocityY*(-1);
    }
        if(block2.isTouching(ball) ){
            ball.shapeColor = "orange";
            ball.velocityY=-5;
        }
            if(block3.isTouching(ball)){
                ball.shapeColor = "green";
                ball.velocityY=ball.velocityY*(-1);
            }
                if(block4.isTouching(ball)){
                    ball.shapeColor = "red";
                    ball.velocityY=ball.velocityY*(-1);
                }
        drawSprites();
}
