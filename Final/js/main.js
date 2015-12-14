var cowboy;
var platform;
var bullets;
var GRAVITY = 1;
var JUMP = 20;

function setup() {
    createCanvas(850,850);


    cowboy = createSprite(200,610);
    cowboy.addAnimation("nomal","assets/cb-s1.png", "assets/cb-s2.png");
    cowboy.addAnimation("stretch","assets/cb-jp1.png","assets/cb-jp1.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png");
    cowboy.addAnimation("died","assets/cb-die1.png","assets/cb-die2.png","assets/cb-die3.png","assets/cb-die4.png","assets/cb-die5.png","assets/cb-die6.png","assets/cb-die6.png","assets/cb-die6.png","assets/cb-die6.png","assets/cb-die6.png","assets/cb-die6.png","assets/cb-die6.png");

    cowboy.setCollider("rectangle", 0,0,0,253);


    bullets = createSprite(800,600);
    bullets.addAnimation("shoot","assets/b1.png");

    platform = createSprite(400, 800);
    platform.addAnimation("normal", "assets/grd.png");
}

function draw() {
    background(155,155,155);

    fill (200);

    cowboy.velocity.y += GRAVITY;
    if(cowboy.collide(platform)){
        cowboy.velocity.y = 0;
//        cowboy.changeAnimation("nomal");
    }

    if(keyWentDown("a"))
        {
        cowboy.changeAnimation("stretch");
        cowboy.animation.rewind();
        cowboy.velocity.y = -JUMP;
        }


        bullets.setSpeed(7,180);
        if (bullets.collide(cowboy)){
            bullets.remove();
            cowboy.changeAnimation("died");
        }


    drawSprites();
}

