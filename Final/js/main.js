var cowboy;
var platform;

var GRAVITY = 1;
var JUMP = 20;

function setup() {
    createCanvas(windowWidth,windowHeight);

    cowboy = createSprite(200,400);
    cowboy.addAnimation("nomal","assets/cb-s1.png", "assets/cb-s2.png");
    cowboy.addAnimation("stretch","assets/cb-jp1.png","assets/cb-jp1.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png");

      //if defined, the collider will be used for mouse events
    cowboy.setCollider("circle", 0,0,134);

    platform = createSprite(400, 800);
    platform.addAnimation("normal", "assets/grd.png");
}

function draw() {
    background(255,255,255);

    fill (200);

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

