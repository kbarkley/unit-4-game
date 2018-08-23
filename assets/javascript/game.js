var randNum = 0;
var crystal1Points = 0;
var crystal2Points = 0;
var crystal3Points = 0;
var crystal4Points = 0;
var crystalTotalPoints = 0;
var wins = 0;
var losses = 0;

function genRandNums() {
    // ... we generate a random number
    randNum = Math.floor(Math.random() * 101) + 19;
    $("#random-number").text(randNum);

    crystal1Points = Math.floor(Math.random() * 11) + 1;
    console.log("1: "+crystal1Points);

    crystal2Points = Math.floor(Math.random() * 11) + 1;
    console.log("2: "+crystal2Points);

    crystal3Points = Math.floor(Math.random() * 11) + 1;
    console.log("3: "+crystal3Points);

    crystal4Points = Math.floor(Math.random() * 11) + 1;
    console.log("4: "+crystal4Points);

    crystalTotalPoints = 0;
    $("#crystalTotalPoints").text(crystalTotalPoints);

    // ... and then dump the random number into our random-number div.
 
}

genRandNums()
$("#wins").text(wins);
$("#losses").text(losses);



$("#crystal1").on("click", function(){
    evaluateTotal(crystal1Points);
    }
);

$("#crystal2").on("click", function(){
    evaluateTotal(crystal2Points);
    }
);

$("#crystal3").on("click", function(){
    evaluateTotal(crystal3Points);
    }
);

$("#crystal4").on("click", function(){
    evaluateTotal(crystal4Points);
    }
);

function evaluateTotal(crystalPoints){
    if(crystalTotalPoints < randNum) {
        crystalTotalPoints = crystalTotalPoints + crystalPoints;
        $("#crystalTotalPoints").text(crystalTotalPoints);
    }
    if(crystalTotalPoints === randNum) {
        wins++;
        $("#wins").text(wins);
        genRandNums();
    }
    if(crystalTotalPoints > randNum) {
        losses++;
        $("#losses").text(losses);
        genRandNums();
    }

}
