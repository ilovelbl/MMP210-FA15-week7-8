function setup() {
    //create canvas
    createCanvas(windowWidth, windowHeight);


    var x = 0;
    var y = 0;

    for(var i = 0; i < 10; i ++){
        console.log(i);
        drawchip(x,y);
        x += 200;
        y
    }

}

function drawchip (startX,startY){
    strokeWeight (1);
    stroke ('gray');
    fill ('green');
//    rect (startX,startY,20,20);

    quad (startX,startY,startX+25*6,startY,startX+25*6+20,startY+20,startX+20,startY+20,);
    rect (20,20,20,20,5);
}



