function Dice(die1,die2,die3,die4,die5){
  this.die1 = die1;
  this.die2 = die2;
  this.die3 = die3;
  this.die4 = die4;
  this.die5 = die5;
}

function Board () {
  this.ones = -1;
  this.twoes = -1;
  this.threes = -1;
  this.fours = -1;
  this.fives = -1;
  this.sixes = -1;
  this.bonus = -1;
  this.threeKind = -1;
  this.fourKind = -1;
  this.fullHouse = -1;
  this.smStraight = -1;
  this.lgStraight = -1;
  this.yahtzee = -1;
  this.chance = -1;
  this.yahtzeeBonus = -1;
}
//Board methods

//needed function boardInputToObject.  It is all the form ids.  JB and Note 8/31/16
allFormIds = ["ones", "twoes", "threes", "fours", "fives", "sixes", "bonus", "threeKind", "fourKind", "fullHouse", "smStraight", "lgStraight", "yahtzee", "chance", "yahtzeeBonus"];

//Function goes throug the form and checks for updated values.  JB and Note 8/31/16
//This function could be rewritten and shoert if all form ids had key value pairs.
Board.prototype.boardInputToObject = function () {
  allFormIds.forEach(function(id){
    var val = $("#"+id+" input").val();
    val = parseInt(val);
    if (val) {
      if (id==="ones"){aBoard.ones = val;}
      if (id==="twoes"){aBoard.twoes = val;}
      if (id==="threes"){aBoard.threes = val;}
      if (id==="fours"){aBoard.fours = val;}
      if (id==="fives"){aBoard.fives = val;}
      if (id==="sixes"){aBoard.sixes = val;}
      if (id==="bonus"){aBoard.bonus = val;}
      if (id==="threeKind"){aBoard.threeKind = val;}
      if (id==="fourKind"){aBoard.fourKind = val;}
      if (id==="fullHouse"){aBoard.fullHouse = val;}
      if (id==="smStraight"){aBoard.smStraight = val;}
      if (id==="lgStraight"){aBoard.lgStraight = val;}
      if (id==="yahtzee"){aBoard.yahtzee = val;}
      if (id==="chance"){aBoard.chance = val;}
      if (id==="yahtzeeBonus"){aBoard.yahtzeeBonus = val;}
    }
  });
}

//Append all values of 0 and greater in aBoard to form
Board.prototype.insertScore = function() {
  $.each(this, function(key, value) {
    if (value !== -1) {
      $("#"+key).empty();
      $("#"+key).append(value);
    }
  });
}



//Jonathan will be inserting methods for DICE here.  Please do not delete!

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
  //This part checks that each number in the array is the same as the first number.  Odd way to check for a yahtzee
  aRollArray.forEach(function(aNum){
    if (numbers === aNum)  {i++;}
  })
  if (i===5) {recommendation = 'yatzee'}
  return recommendation;
}

//Will check conditions and return a "recommed" string.  JB  8.30.16
function checkCondition (recommendation) {
  var resultRecommendation = "";
  switch(recommendation) {
    case 'yatzee':
        recommendation = "You have a Yatzee";
        break;
    default:
    recommendation = "No recommendations...";
  }
  return resultRecommendation;
}

// -- End of jonathan edits section





var aBoard = new Board();
aBoard.ones = 3;
aBoard.twoes = 6;
aBoard.threeKind = 30;

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
    $(".notesForTurn").append(" you can only roll 3 times.");
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

  $.each(aBoard, function(key, value) {
    if (value !== -1) {
      $("#"+key).empty();
      $("#"+key).append(value);
    }
  });

  $("#rollButton").click(function(){
    timesRolledThisTurn = timesRolledThisTurn + 1
    $(".notesForTurn").text("you have clicked roll "+timesRolledThisTurn+" time(s).");
    rollForTurn()
  });

  //This submits the scoresheet updates board object then inserts all properties other than -1 into the board.
  $(".scoreSheet").submit(function(event) {
    event.preventDefault();
    aBoard.boardInputToObject();  //This function finds changed inputs and sticcks in the object
    aBoard.insertScore();  //This goes through aBoard and puts all values in the page and removes the input
  });

  $("#passTurn").click(function(){
    timesRolledThisTurn = 0;
    $(".notesForTurn").text("It is now the next turn");
  });
});
