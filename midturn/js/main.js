function setup() {
    //create canvas
    createCanvas(windowWidth, windowHeight);

//    rect (20,20,20,20); //test canvas

    var x = 0;
    var y = 0;

    for(var i = 0; i < 10; i ++){
        console.log(i + "does work");
        drawchip(x,y);
        x += 25*8;
//        y += 25;
    }

}

function drawchip (startX,startY){
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
    rect (startX+25+23, startY+25+23, 25*6+3, 25*8+3, 3, 3, 3, 3); // rect I (FRONT WIGHT)
}
//function draw(){
//    fill ('green');
////    rect (20,20,20,20);
//    quad(38, 31, 86, 20, 90, 63, 30, 76);
//}

