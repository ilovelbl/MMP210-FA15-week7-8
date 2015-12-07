var cowboy;
var platform;

var GRAVITY = 1;
var JUMP = 20;

function setup() {
    createCanvas(800,600);

    cowboy = createSprite(200,200);
    cowboy.addAnimation("nomal","assets/cb-s1.png", "assets/cb-s2.png");
    cowboy.addAnimation("stretch","assets/asterisk_stretching0001.png", "assets/asterisk_stretching0008.png");

      //if defined, the collider will be used for mouse events
    cowboy.setCollider("circle", 0,0,134);

    platform = createSprite(200, 400);
    platform.addAnimation("normal", "assets/small_platform0001.png",  "assets/small_platform0003.png");
}

function draw() {
    background(255,255,255);

    fill (200);
//    textAlign(CENTER);
//    text("Welcome to the Final",400,20);
    cowboy.velocity.y += GRAVITY;
    if(cowboy.collide(platform)){
        cowboy.velocity.y = 0;
        cowboy.changeAnimation("nomal");
    }


  if(keyWentDown("x"))
    {
    cowboy.changeAnimation("stretch");
    cowboy.animation.rewind();
    cowboy.velocity.y = -JUMP;
    }

    drawSprites();
}

