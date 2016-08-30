function Dice(die1,die2,die3,die4,die5){
  this.die1 = die1;
  this.die2 = die2;
  this.die3 = die3;
  this.die4 = die4;
  this.die5 = die5;
}

var aRoll = new Dice (0,0,0,0,0);

function diceRoll(){
  var rollResult = Math.floor((Math.random() * 6) + 1);
  return rollResult ;
}

function changeDicePic(rolledNum, num) {
  var string = "dice/dice" + rolledNum + ".png";
  $(".dieimg"+num).attr("src", string);
}

var timesRolledThisTurn = 0;

function rollForTurn(){
  if (timesRolledThisTurn === 1){
    var die1 = "true"
    var die2 = "true"
    var die3 = "true"
    var die4 = "true"
    var die5 = "true"
  }else if (timesRolledThisTurn < 4) {
    var die1 = $(".die1").is(":checked");
    var die2 = $(".die2").is(":checked");
    var die3 = $(".die3").is(":checked");
    var die4 = $(".die4").is(":checked");
    var die5 = $(".die5").is(":checked");
  }else {
    alert("you have rolled 3 times already")
  }
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
}







$(document).ready(function(){
  $("#rollButton").click(function(){
    alert("you rolled...")
    timesRolledThisTurn = timesRolledThisTurn + 1
    rollForTurn()
  });
  $("#passTurn").click(function(){
    timesRolledThisTurn = 0;
    alert("this is when turns change")
  });
});
