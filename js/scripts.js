function Dice(die1,die2,die3,die4,die5){
  this.die1 = die1;
  this.die2 = die2;
  this.die3 = die3;
  this.die4 = die4;
  this.die5 = die5;
}
//Jonathan will be inserting methods for DICE here.  Please do not delete!

//Will check conditions and return a "recommed" string.  JB  8.30.16
function checkCondition (recommendation) {
  var resultRecommendation = "";
  switch(recommendation) {
    case 'yatzee':
        recommendation = "You have a Yatzee";
        break;
    }
  return resultRecommendation;
}

//Will turn a aRoll into an array of values; Needed for later functions. JB  8.30.16
function turningaRolltoArray (aRoll) {
  aRollAarray = [];
  aRollAarray.push(aRoll.die1);
  aRollAarray.push(aRoll.die2);
  aRollAarray.push(aRoll.die3);
  aRollAarray.push(aRoll.die4);
  aRollAarray.push(aRoll.die5);
  return aRollAarray;
}

//Will check an array of 5 numbers (dice) for a yahtzee. JB 8.30.16
function checkYatzee(aRollArray) {
  var numbers = aRollArray[0];
  var i = 0;
  var recommendation = "";
  //This checks that each number is the same as the first number
  aRollArray.forEach(function(aNum){
    if (numbers === aNum)  {i++;}
  })
  if (i===5) {recommendation = 'yatzee'}
  return recommendation;
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
