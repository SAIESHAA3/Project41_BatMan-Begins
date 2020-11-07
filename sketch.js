var thunder, thunderAnimation;
    var man, manAnimation;  
     

function preload(){
   
    thunderAnimation = loadAnimation ("thunderbolt/1.png","thunderbolt/2.png","thunderbolt/3.png","thunderbolt/4.png" );
    manAnimation = loadAnimation ("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png",
    "Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png")  
}

function setup(){
    createCanvas(1000,600);
    thunder = createSprite(500,140,10,10);
    thunder.addAnimation("thunder", thunderAnimation);
    thunder.scale = 0.5;
    
    man = createSprite(100,430,10,10);
    man.addAnimation("man", manAnimation);
    man.scale = 0.5;
    
        
}

function draw(){
    
    background("white"); 

    if(keyDown("UP_ARROW")){
        man.velocityX = 2;
    }
    
    rainDrops ();
    drawSprites();
   
}   

function rainDrops (){
    var drop = createSprite(random(10,990),0,random(2,6),random(20,50));
    drop.velocityY = random(2,6);
    drop.shapeColor = "lightBlue";
    }
