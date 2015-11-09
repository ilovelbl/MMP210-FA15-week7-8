function setup() {
    //create canvas
    createCanvas(windowWidth, windowHeight);

//    rect (20,20,20,20); //test canvas

//    var x = 0;
//    var y = 0;
//
//    for(var i = 0; i < 10; i ++){
//        console.log(i + "does work");
//        drawchip(x,y);
//        x += 5;
//        y += 20;
//    }

}

//function drawchip (startX,startY){
//    strokeWeight (1);
//    stroke ('gray');
//    fill ('green');
//    rect (startX,startY,20,20);
//    quad (21,21,21,21,21,21,21,21);//问题出在quad命令可能书写错误，无法执行
////
////    quad (startX,startY,startX+25*6,startY,startX+25*6+20,startY+20,startX+20,startY+20,);
////    rect (startX,20,20,20);
//}
function draw(){
    fill ('green');
    rect (20,20,20,20);
}

