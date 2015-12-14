var cowboy;
var platform;
var bullets;
var GRAVITY = 1;
var JUMP = 20;

function setup() {
    createCanvas(windowWidth,windowHeight);

    cowboy = createSprite(200,400);
    cowboy.addAnimation("nomal","assets/cb-s1.png", "assets/cb-s2.png");
    cowboy.addAnimation("stretch","assets/cb-jp1.png","assets/cb-jp1.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png");

    cowboy.setCollider("rectangle", 0,0,20,253);


    bullets = createSprite(800,600);
    bullets.addAnimation("shoot","assets/small_circle0001.png");

    bullets.setCollider("po",100,100,1000)

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

    bullets.setSpeed(7,180);
    if (bullets.collide(cowboy)){
        bullets.setSpeed(0,0);
    }



  if(keyWentDown("x"))
    {
    cowboy.changeAnimation("stretch");
    cowboy.animation.rewind();
    cowboy.velocity.y = -JUMP;
    }

    drawSprites();
}

