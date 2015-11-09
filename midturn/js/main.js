
function setup() {
    //create canvas
    createCanvas(windowWidth, windowHeight);

//    rect (20,20,20,20); //test canvas

    var x = 0;
    var y = 0;

    for(var i = 0; i < 20; i ++){
        console.log(i + "does work");
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
}

function draw(){
    var x = 25;
    // 1 tong
    fill ('green');
    ellipse (5*x, 5.5*x,80,80); //outsite circle
    fill ('white');
    ellipse (5*x, 5.5*x,70,70);
    fill ('green');
    ellipse (5*x, 5.5*x,60,60);
    fill ('white');
    ellipse (5*x, 5.5*x,50,50);
    fill ('green');
    ellipse (5*x, 5.5*x,40,40);
    fill ('white');
    ellipse (5*x, 5.5*x,30,30);
    fill ('red');
    ellipse (5*x, 5.5*x,20,20); //center circle

    // 2 tong;
        fill ('green');
    ellipse (5*25+8*x, 4*25,65,65); //outsite circle
    fill ('white');
    ellipse (5*25+8*x, 4*25,55,55);
    fill ('green');
    ellipse (5*25+8*x, 4*25,45,45);
    fill ('white');
    ellipse (5*25+8*x, 4*25,35,35);
    fill ('green');
    ellipse (5*25+8*x, 4*25,25,25);
    fill ('white');
    ellipse (5*25+8*x, 4*25,15,15);
    fill ('red');
    ellipse (5*25+8*x, 4*25,10,10); //center circle

    // 2 tong;
    fill ('green');
    ellipse (5*25+8*x, 8*25,65,65); //outsite circle
    fill ('white');
    ellipse (5*25+8*x, 8*25,55,55);
    fill ('green');
    ellipse (5*25+8*x, 8*25,45,45);
    fill ('white');
    ellipse (5*25+8*x, 8*25,35,35);
    fill ('green');
    ellipse (5*25+8*x, 8*25,25,25);
    fill ('white');
    ellipse (5*25+8*x, 8*25,15,15);
    fill ('red');
    ellipse (5*25+8*x, 8*25,10,10); //center circle

        // 3 tong;
    fill ('green');
    ellipse (5*25+17*x, 8*25,65,65); //outsite circle
    fill ('white');
    ellipse (5*25+17*x, 8*25,55,55);
    fill ('green');
    ellipse (5*25+17*x, 8*25,45,45);
    fill ('white');
    ellipse (5*25+17*x, 8*25,35,35);
    fill ('green');
    ellipse (5*25+17*x, 8*25,25,25);
    fill ('white');
    ellipse (5*25+17*x, 8*25,15,15);
    fill ('red');
    ellipse (5*25+17*x, 8*25,10,10); //center circle


}

