function Dice(die1,die2,die3,die4,die5){
  this.die1 = die1;
  this.die2 = die2;
  this.die3 = die3;
  this.die4 = die4;
  this.die5 = die5;
}
//Jonathan will be inserting methods for DICE here.  Please do not delete!

//Will check conditions and return a "recommed" string.  JB  8.30.16
function checkCondition (condition) {
  var recommendation = "";
  switch(condition) {
    case 'yatzee':
        recommendation = "You have a Yatzee";
        break;
    }
  return recommendation;
}



//Will check
function aRolltoArray () {

}

function checkYatzee(aRoll) {



}










//

var aRoll = new Dice (0,0,0,0,0);

function diceRoll(){
  var rollResult = Math.floor((Math.random() * 6) + 1);
  return rollResult ;
}

function changeDicePic(rolledNum, num) {
  var string = "dice/dice" + rolledNum + ".png";
  $(".dieimg"+num).attr("src", string);
}

function rollForTurn(){
  var die1 = $(".die1").is(":checked");
  var die2 = $(".die2").is(":checked");
  var die3 = $(".die3").is(":checked");
  var die4 = $(".die4").is(":checked");
  var die5 = $(".die5").is(":checked");
  if(die1){
    var x = diceRoll();
    aRoll.die1 = x;
    changeDicePic(x,1);
  }
  if(die2){
    var x = diceRoll();
    aRoll.die2 = x;
    changeDicePic(x,2);
  }
  if(die3){
    var x = diceRoll();
    aRoll.die3 = x;
    changeDicePic(x,3);
  }
  if(die4){
    var x = diceRoll();
    aRoll.die4 = x;
    changeDicePic(x,4);
  }
  if(die5){
    var x = diceRoll();
    aRoll.die5 = x;
    changeDicePic(x,5);
  }
  console.log(aRoll);
}







$(document).ready(function(){
  $("#rollButton").click(function(){
    rollForTurn()
  });
});
