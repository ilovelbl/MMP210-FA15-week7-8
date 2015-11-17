var globalColor;

var r, g, b, o, p, q, r, s, t, circleSize;
function setup() {
    //create canvas
    createCanvas(windowWidth, windowHeight);
    r = random(255);
    g = random(200);
    b = random(200);
    o = random(255);
    p = random(255);
    q = random(255);
    u = random(255);
    s = random(255);
    t = random(255);

    circleSize = 60;

    var x = 0;
    var y = 0;


    for(var i = 0; i < 20; i ++){
        drawChip(x,y);
        x += 25*8+2;
//        y += 25;
            if( x > width){
            y += 25*10;
            x = 10;
            }
    }
}



function drawChip (startX,startY){
    globalColor = color (255,0,0);
    strokeWeight (1);
    stroke ('gray');
    fill ('lightgreen');
    quad (startX,startY,startX+25*6,startY,startX+25*6+20,startY+20,startX+20,startY+20); //quad ABCD (TOP GREEM)

    fill ('lightgray');
    quad (startX+20, startY+20, startX+20+25*6, startY+20, startX+25*8,startY+25*2,startX+25*2, startY+25*2); //quad DCHI (TOP GRAY)

    fill ('green');
    quad (startX, startY, startX+20, startY+20, startX+20, startY+25*8+20, startX, startY+25*8); //quad ADFE(SIDE GREEN)

    fill ('gray');
    quad (startX+20, startY+20, startX+25*2, startY+25*2, startX+25*2, startY+25*10, startX+20, startY+25*8+20); //quad DIGF (SIDE GRAY)

//    fill ('lightgray');
//    quad (startX+25*2, startY+25*2, startX+25*8, startY+25*2, startX+25*8, startY+25*10, startX+25*2, startY+25*10); //quad IHJG (FRONT WHITE)

    fill ('white');
    rect (startX+25+23, startY+25+23, 25*6+3, 25*8+2, 3, 3, 3, 3); // rect I (FRONT WIGHT)

    /////////////////////////Circle////////////////////////////////////
    // circle 1
    fill (globalColor);
    ellipse (startX + 3.5*25, startY + 3.5*25,60,60); //outsite circle
    fill ('white');
    ellipse (startX + 3.5*25, startY + 3.5*25,50,50);
    fill (globalColor);
    ellipse (startX + 3.5*25, startY + 3.5*25,40,40);
    fill ('white');
    ellipse (startX + 3.5*25, startY + 3.5*25,30,30);
    fill (globalColor);
    ellipse (startX + 3.5*25, startY + 3.5*25,20,20);
    fill ('white');
    ellipse (startX + 3.5*25, startY + 3.5*25,10,10);
    fill (r,g,b);
    ellipse (startX + 3.5*25, startY + 3.5*25,8,8); //center circle

    //circle 2
    fill (globalColor);
    ellipse (startX + 6.5*25, startY + 3.5*25,60,60); //outsite circle
    fill ('white');
    ellipse (startX + 6.5*25, startY + 3.5*25,50,50);
    fill (globalColor);
    ellipse (startX + 6.5*25, startY + 3.5*25,40,40);
    fill ('white');
    ellipse (startX + 6.5*25, startY + 3.5*25,30,30);
    fill (globalColor);
    ellipse (startX + 6.5*25, startY + 3.5*25,20,20);
    fill ('white');
    ellipse (startX + 6.5*25, startY + 3.5*25,10,10);
    fill (r,g,b);
    ellipse (startX + 6.5*25, startY + 3.5*25,8,8); //center circle

        // circle 1
    fill (globalColor);
    ellipse (startX + 3.5*25, startY + 8.5*25,60,60); //outsite circle
    fill ('white');
    ellipse (startX + 3.5*25, startY + 8.5*25,50,50);
    fill (globalColor);
    ellipse (startX + 3.5*25, startY + 8.5*25,40,40);
    fill ('white');
    ellipse (startX + 3.5*25, startY + 8.5*25,30,30);
    fill (globalColor);
    ellipse (startX + 3.5*25, startY + 8.5*25,20,20);
    fill ('white');
    ellipse (startX + 3.5*25, startY + 8.5*25,10,10);
    fill (r,g,b);
    ellipse (startX + 3.5*25, startY + 8.5*25,8,8); //center circle

    //circle 2
    fill (globalColor);
    ellipse (startX + 6.5*25, startY + 8.5*25,60,60); //outsite circle
    fill ('white');
    ellipse (startX + 6.5*25, startY + 8.5*25,50,50);
    fill (globalColor);
    ellipse (startX + 6.5*25, startY + 8.5*25,40,40);
    fill ('white');
    ellipse (startX + 6.5*25, startY + 8.5*25,30,30);
    fill (globalColor);
    ellipse (startX + 6.5*25, startY + 8.5*25,20,20);
    fill ('white');
    ellipse (startX + 6.5*25, startY + 8.5*25,10,10);
    fill (r,g,b);
    ellipse (startX + 6.5*25, startY + 8.5*25,8,8); //center circle


    ////////////////core rect//////////////////////////////////
    fill('gray');
    quad(startX+5*25,startY+4.5*25,startX+6.5*25,startY+6*25,startX+5*25,startY+7.5*25,startX+3.5*25,startY+6*25);
    fill(globalColor);
    quad(startX+5*25,startY+4.75*25,startX+6.25*25,startY+6*25,startX+5*25,startY+7.25*25,startX+3.75*25,startY+6*25);
    fill('lightgray');
    quad(startX+5*25,startY+5*25,startX+6*25,startY+6*25,startX+5*25,startY+7*25,startX+4*25,startY+6*25);
    fill(globalColor);
    quad(startX+5*25,startY+5.25*25,startX+5.75*25,startY+6*25,startX+5*25,startY+6.75*25,startX+4.25*25,startY+6*25);
    fill('lightgray');
    quad(startX+5*25,startY+5.5*25,startX+5.5*25,startY+6*25,startX+5*25,startY+6.5*25,startX+4.5*25,startY+6*25);
    fill(r,g,b);
    quad(startX+5*25,startY+5.75*25,startX+5.25*25,startY+6*25,startX+5*25,startY+6.25*25,startX+4.75*25,startY+6*25);
//
//    rotate (PI/10);
//    rect (5.5*25,5.5*25,20,20);


}

function mousePressed(){
    var x = 0;
    var y = 0;
    var d = dist (mouseX, mouseY,circleSize,circleSize);

    if (d<60);{
        globalColor = color (random(255),random(255),random(255));
        r = random(255);
        o = random(255);
        s = random(255);
    }
    console.log(mousePressed);


    for(var i = 0; i < 20; i ++){
        console.log(i + "does work");
        drawCircle(x,y);
        x += 25*8+2;
//        y += 25;
            if( x > width){
            y += 25*10;
            x = 10;
            }
    }
}




function drawCircle(startX,startY){
    // circle 1
    fill (globalColor);
    ellipse (startX + 3.5*25, startY + 3.5*25,60,60); //outsite circle
    fill ('lightgray');
    ellipse (startX + 3.5*25, startY + 3.5*25,50,50);
    fill (o,p,q);
    ellipse (startX + 3.5*25, startY + 3.5*25,40,40);
    fill ('lightgray');
    ellipse (startX + 3.5*25, startY + 3.5*25,30,30);
    fill (u,s,t);
    ellipse (startX + 3.5*25, startY + 3.5*25,20,20);
    fill ('white');
    ellipse (startX + 3.5*25, startY + 3.5*25,10,10);
    fill (r,g,b);
    ellipse (startX + 3.5*25, startY + 3.5*25,8,8); //center circle

    //circle 2
    fill (globalColor);
    ellipse (startX + 6.5*25, startY + 3.5*25,60,60); //outsite circle
    fill ('lightgray');
    ellipse (startX + 6.5*25, startY + 3.5*25,50,50);
    fill (o,p,q);
    ellipse (startX + 6.5*25, startY + 3.5*25,40,40);
    fill ('lightgray');
    ellipse (startX + 6.5*25, startY + 3.5*25,30,30);
    fill (u,s,t);
    ellipse (startX + 6.5*25, startY + 3.5*25,20,20);
    fill ('white');
    ellipse (startX + 6.5*25, startY + 3.5*25,10,10);
    fill (r,g,b);
    ellipse (startX + 6.5*25, startY + 3.5*25,8,8); //center circle

    // circle 3
    fill (globalColor);
    ellipse (startX + 3.5*25, startY + 8.5*25,60,60); //outsite circle
    fill ('lightgray');
    ellipse (startX + 3.5*25, startY + 8.5*25,50,50);
    fill (o,p,q);
    ellipse (startX + 3.5*25, startY + 8.5*25,40,40);
    fill ('lightgray');
    ellipse (startX + 3.5*25, startY + 8.5*25,30,30);
    fill (u,s,t);
    ellipse (startX + 3.5*25, startY + 8.5*25,20,20);
    fill ('white');
    ellipse (startX + 3.5*25, startY + 8.5*25,10,10);
    fill (r,g,b);
    ellipse (startX + 3.5*25, startY + 8.5*25,8,8); //center circle

    //circle 4
    fill (globalColor);
    ellipse (startX + 6.5*25, startY + 8.5*25,60,60); //outsite circle
    fill ('lightgray');
    ellipse (startX + 6.5*25, startY + 8.5*25,50,50);
    fill (o,p,q);
    ellipse (startX + 6.5*25, startY + 8.5*25,40,40);
    fill ('lightgray');
    ellipse (startX + 6.5*25, startY + 8.5*25,30,30);
    fill (u,s,t);
    ellipse (startX + 6.5*25, startY + 8.5*25,20,20);
    fill ('white');
    ellipse (startX + 6.5*25, startY + 8.5*25,10,10);
    fill (r,g,b);
    ellipse (startX + 6.5*25, startY + 8.5*25,8,8); //center circle

        ////////////////core rect//////////////////////////////////
    fill(globalColor);
    quad(startX+5*25,startY+4.25*25,startX+6.75*25,startY+6*25,startX+5*25,startY+7.75*25,startX+3.25*25,startY+6*25);
    fill('gray');
    quad(startX+5*25,startY+4.5*25,startX+6.5*25,startY+6*25,startX+5*25,startY+7.5*25,startX+3.5*25,startY+6*25);
    fill(o,s,b);
    quad(startX+5*25,startY+4.75*25,startX+6.25*25,startY+6*25,startX+5*25,startY+7.25*25,startX+3.75*25,startY+6*25);
    fill('lightgray');
    quad(startX+5*25,startY+5*25,startX+6*25,startY+6*25,startX+5*25,startY+7*25,startX+4*25,startY+6*25);
    fill(globalColor);
    quad(startX+5*25,startY+5.25*25,startX+5.75*25,startY+6*25,startX+5*25,startY+6.75*25,startX+4.25*25,startY+6*25);
    fill('lightgray');
    quad(startX+5*25,startY+5.5*25,startX+5.5*25,startY+6*25,startX+5*25,startY+6.5*25,startX+4.5*25,startY+6*25);
    fill(r,g,b);
    quad(startX+5*25,startY+5.75*25,startX+5.25*25,startY+6*25,startX+5*25,startY+6.25*25,startX+4.75*25,startY+6*25);
}

