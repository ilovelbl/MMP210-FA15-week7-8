// challenge 3

function setup() {
  console.log();
  var url = 'https://data.cityofnewyork.us/api/views/5b3a-rs48/rows.json?accessType=DOWNLOAD';
  loadJSON(url,fileloaded);

}

function fileloaded(penguins) {
    //challenge 1
    console.log(penguins);
//    text(penguins.birds[5].members[1], 10, 10);
//
//    //challenge 2
//    console.log("cormorants" ,penguins.birds[1]);
//    var cormorants = penguins.birds[1].members;
//    for (var i =0; i<cormorants.length; i++){
//        text(cormorants[i],20,20*i+50);
//    }
    var data = penguins.data;
     for(var i=0;i<data.length;i++){
         if (data[i][9] == "Facebook"){       console.log("FB"prenguins.data[i][10]);
         }
     }
}
