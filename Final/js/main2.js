var asterisk;
var platform;

var GRAVITY = 1;
var JUMP = 15;

function setup() {
  createCanvas(800,400);

  asterisk = createSprite(200, 200);
  asterisk.addAnimation("normal", "assets/asterisk_normal0001.png", "assets/asterisk_normal0003.png");
  asterisk.addAnimation("stretch", "assets/asterisk_stretching0001.png", "assets/asterisk_stretching0008.png");

  //if defined, the collider will be used for mouse events
  asterisk.setCollider("circle", 0,0,64);

  platform = createSprite(200, 300);
  platform.addAnimation("normal", "assets/small_platform0001.png",  "assets/small_platform0003.png");
}

function draw() {
  background(255,255,255);

  fill(200);

  asterisk.velocity.y += GRAVITY;

  if(asterisk.collide(platform)) {
    asterisk.velocity.y = 0;
    asterisk.changeAnimation("normal");
    }


  if(keyWentDown("x") || mouseWentDown(LEFT))
    {
    asterisk.changeAnimation("stretch");
    asterisk.animation.rewind();
    asterisk.velocity.y = -JUMP;
    }


  SdrawSprites();
}
