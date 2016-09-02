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
  this.threeKind = -1;
  this.fourKind = -1;
  this.fullHouse = -1;
  this.smStraight = -1;
  this.lgStraight = -1;
  this.yahtzee = -1;
  this.chance = -1;
  this.yahtzeeBonus = -1;

  this.onesP2 = -1;
  this.twoesP2 = -1;
  this.threesP2 = -1;
  this.foursP2 = -1;
  this.fivesP2 = -1;
  this.sixesP2 = -1;
  this.threeKindP2 = -1;
  this.fourKindP2 = -1;
  this.fullHouseP2 = -1;
  this.smStraightP2 = -1;
  this.lgStraightP2 = -1;
  this.yahtzeeP2 = -1;
  this.chanceP2 = -1;
  this.yahtzeeBonusP2 = -1;
}

function GrandTotalScore () {
  this.total = -1;
  this.bonus = -1;
  this.upperTotal = -1;
  this.lowerTotal = -1;
  this.grandTotal = -1;

  this.totalP2 = -1;
  this.bonusP2 = -1;
  this.upperTotalP2 = -1;
  this.lowerTotalP2 = -1;
  this.grandTotalP2 = -1;
}

//Board methods

//needed function boardInputToObject.  It is all the form ids.  JB and Note 8/31/16
var allFormIds = ["ones", "twoes", "threes", "fours", "fives", "sixes", "bonus", "threeKind", "fourKind", "fullHouse", "smStraight", "lgStraight", "yahtzee", "chance", "yahtzeeBonus", "onesP2", "twoesP2", "threesP2", "foursP2", "fivesP2", "sixesP2", "bonusP2", "threeKindP2", "fourKindP2", "fullHouseP2", "smStraightP2", "lgStraightP2", "yahtzeeP2", "chanceP2", "yahtzeeBonusP2"];

var allCalculatedIds = ["total", "bonus", "upperTotal", "lowerTotal", "grandTotal", "totalP2", "bonusP2", "upperTotalP2", "lowerTotalP2", "grandTotalP2"];
var numbersOneThroughSix = [1,2,3,4,5,6]; //This is needed for several recommendation functions
var jbAKind = 0;//this makes it easy to put a number in switch statments
var amountOfANumber = 0;

//Function goes throug the form and checks for updated values.  JB and Note 8/31/16
//This function could be rewritten and shorter if all form ids had key value pairs.  This would allow for a loop of if statements.
Board.prototype.boardInputToObject = function () {
  allFormIds.forEach(function(id){
    var val = $("#"+id+" input").val();
    val = parseInt(val);
    if (val > -1) {
      if (id==="ones"){aBoard.ones = val;}
      if (id==="twoes"){aBoard.twoes = val;}
      if (id==="threes"){aBoard.threes = val;}
      if (id==="fours"){aBoard.fours = val;}
      if (id==="fives"){aBoard.fives = val;}
      if (id==="sixes"){aBoard.sixes = val;}
      if (id==="threeKind"){aBoard.threeKind = val;}
      if (id==="fourKind"){aBoard.fourKind = val;}
      if (id==="fullHouse"){aBoard.fullHouse = val;}
      if (id==="smStraight"){aBoard.smStraight = val;}
      if (id==="lgStraight"){aBoard.lgStraight = val;}
      if (id==="yahtzee"){aBoard.yahtzee = val;}
      if (id==="chance"){aBoard.chance = val;}
      if (id==="yahtzeeBonus"){aBoard.yahtzeeBonus = val;}


      if (id==="onesP2"){aBoard.onesP2 = val;}
      if (id==="twoesP2"){aBoard.twoesP2 = val;}
      if (id==="threesP2"){aBoard.threesP2 = val;}
      if (id==="foursP2"){aBoard.foursP2 = val;}
      if (id==="fivesP2"){aBoard.fivesP2 = val;}
      if (id==="sixesP2"){aBoard.sixesP2 = val;}
      if (id==="threeKindP2"){aBoard.threeKindP2 = val;}
      if (id==="fourKindP2"){aBoard.fourKindP2 = val;}
      if (id==="fullHouseP2"){aBoard.fullHouseP2 = val;}
      if (id==="smStraightP2"){aBoard.smStraightP2 = val;}
      if (id==="lgStraightP2"){aBoard.lgStraightP2 = val;}
      if (id==="yahtzeeP2"){aBoard.yahtzeeP2 = val;}
      if (id==="chanceP2"){aBoard.chanceP2 = val;}
      if (id==="yahtzeeBonusP2"){aBoard.yahtzeeBonusP2 = val;}

    }
  });
}

//Append all values of 0 and greater in aBoard to form
Board.prototype.insertScore = function() {
  $.each(this, function(key, value) {
    if (parseInt(value) > -1) {
        $("#"+key).empty();
        $("#"+key).append(parseInt(value));
      }
    });
}
GrandTotalScore.prototype.endGameTotals = function(){
  allCalculatedIds.forEach(function(id){
  if (id==="total"){aGrandTotalScore.total = (aBoard.ones + aBoard.twoes + aBoard.threes + aBoard.fours + aBoard.fives + aBoard.sixes);}
  if (id==="bonus"){
    if (aGrandTotalScore.total >= 68){
      aGrandTotalScore.bonus= 35;
    }else{
      aGrandTotalScore.bonus = 0;
    }
  }
  if (id==="upperTotal"){aGrandTotalScore.upperTotal = (aGrandTotalScore.total + aGrandTotalScore.bonus);}

  if (id==="lowerTotal"){aGrandTotalScore.lowerTotal =(aBoard.threeKind + aBoard.fourKind + aBoard.fullHouse + aBoard.smStraight + aBoard.lgStraight + aBoard.yahtzee + aBoard.chance + aBoard.yahtzeeBonus);}
  if (id==="grandTotal"){aGrandTotalScore.grandTotal = aGrandTotalScore.upperTotal + aGrandTotalScore.lowerTotal;}




  if (id==="totalP2"){aGrandTotalScore.totalP2 = (aBoard.onesP2 + aBoard.twoesP2 + aBoard.threesP2 + aBoard.foursP2 + aBoard.fivesP2 + aBoard.sixesP2);}
  if (id==="bonusP2"){
    if (aGrandTotalScore.totalP2 >= 68){
      aGrandTotalScore.bonusP2= 35;
    }else{
      aGrandTotalScore.bonusP2 = 0;
    }
  }
  if (id==="upperTotalP2"){aGrandTotalScore.upperTotalP2 = (aGrandTotalScore.totalP2 + aGrandTotalScore.bonusP2);}

  if (id==="lowerTotalP2"){aGrandTotalScore.lowerTotalP2 =(aBoard.threeKindP2 + aBoard.fourKindP2 + aBoard.fullHouseP2 + aBoard.smStraightP2 + aBoard.lgStraightP2 + aBoard.yahtzeeP2 + aBoard.chanceP2 + aBoard.yahtzeeBonusP2);}
  if (id==="grandTotalP2"){aGrandTotalScore.grandTotalP2 = aGrandTotalScore.upperTotalP2 + aGrandTotalScore.lowerTotalP2;}
  });





  $.each(this, function(key, value) {
    if (parseInt(value) > -1) {
      $("#"+key).empty();
      $("#"+key).append(parseInt(value));
    }
  });
}

//Object Instances for new page load
var aBoard = new Board();
var aGrandTotalScore = new GrandTotalScore();
var aRoll = new Dice (0,0,0,0,0);

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
  //This part checks that each number in the array is the same as the first number.  Odd way to check for a yahtzee
  aRollArray.forEach(function(aNum){
    if (numbers === aNum)  {i++;}
  })
  if (i===5) {recommendation = 'yahtzee'; return recommendation;}
}

//Tests for fullHouse
function checkFullHouse (aRollArray) {
  var recommendation ="";
  var ones = 0; var twoes = 0; var threes = 0; var fours = 0; var fives = 0; var sixes = 0;
  aRollArray.forEach(function(num){
      if (num === 1) {ones++;} if (num === 2) {twoes++;} if (num === 3) {threes++;} if (num === 4) {fours++;} if (num === 5) {fives++;} if (num === 6) {sixes++;}
  });
  if (ones === 3 || twoes === 3 || threes === 3 || fours === 3 || fives === 3 || sixes === 3) {
    if (ones === 2 || twoes === 2 || threes === 2 || fours === 2 || fives === 2 || sixes === 2 ){
      return "fullHouse";
    }
  }
}

//Tests for four of a kind
function checkFourKind (aRollArray) {
  var recommendation ="";
  numbersOneThroughSix.forEach(function(num){
    var amount = 0;
    aRollArray.forEach(function(roll) {
      if (num === roll) {amount++; }
    });
    if (amount >= 4) {
      jbAKind = num;
      recommendation = 'fourKind';
    }
  });
  return (recommendation);
}

//Tests for three of a kind
function checkThreeKind (aRollArray) {
  var recommendation ="";
  numbersOneThroughSix.forEach(function(num){
    var amount = 0;
    aRollArray.forEach(function(roll) {
      if (num === roll) {amount++; }
    });
    if (amount >= 3) {
      amountOfANumber = amount;
      jbAKind = num;
      recommendation = 'threeKind';
    }
  });
  return (recommendation);
}

//Tests for small straight
function checkSmallStraight (aRollArray) {
  var recommendation ="";
  var ones = 0; var twos = 0; var threes = 0; var fours = 0; var fives = 0; var sixs = 0;
  aRollArray.forEach(function(num){
    if (num === 1){ ones++ ;} if (num === 2){ twos++ ;} if (num === 3){ threes++ ;} if (num === 4){ fours++ ;} if (num === 5){ fives++ ;} if (num === 6){ sixs++ ;}
  });
  if ( threes>=1 && fours>=1 ){
    if( fives>=1) {
      if (twos>=1 || sixs>=1){
      recommendation = 'smallStraight';
      return (recommendation);}
    }else if( twos>=1){
      if (ones>=1){
      recommendation = 'smallStraight';
      return (recommendation);}
    }
  }
}

//Tests for LARGE straight
function checkLargeStraight (aRollArray) {
  var recommendation ="";
  var ones = 0; var twos = 0; var threes = 0; var fours = 0; var fives = 0; var sixs = 0;
  aRollArray.forEach(function(num){
    if (num === 1){ ones++ ;} if (num === 2){ twos++ ;} if (num === 3){ threes++ ;} if (num === 4){ fours++ ;} if (num === 5){ fives++ ;} if (num === 6){ sixs++ ;}
  });
  if ( threes>=1 && fours>=1 ){
    if( twos>=1 && fives>=1 && sixs>=1){
      recommendation = 'largeStraight';
      return (recommendation);
    }else if( ones>=1 && twos>=1 && fives>=1){
      recommendation = 'largeStraight';
      return (recommendation);
    }
  }
}

//This function runs all other number checking functions,  JB 8.31.16
//Right now the order of the functions in this array recommends the best move. Careful changing order!!!!
Dice.prototype.makeARecommendation = function() {
  var recommendation = "Good Luck!";
  aRollArray = turningaRolltoArray(this);
  var check3 = checkSmallStraight (aRollArray); if (check3) {recommendation = checkSmallStraight (aRollArray); }
  var check5 = checkLargeStraight (aRollArray); if (check5) {recommendation = checkLargeStraight (aRollArray); }
  var check2 = checkThreeKind (aRollArray); if (check2) {recommendation = checkThreeKind (aRollArray); }
  var check4 = checkFullHouse (aRollArray); if (check4) {recommendation = checkFullHouse (aRollArray); }
  var check1 = checkFourKind(aRollArray); if (check1) {recommendation = checkFourKind(aRollArray);}
  var check0 = checkYatzee(aRollArray); if (check0) {recommendation = checkYatzee(aRollArray);}
  checkCondition (recommendation);
  //This will highlight boxes
  if (check2 && aBoard.ones === -1 && amountOfANumber > 2 && jbAKind === 1 ) {$("#ones").addClass("highlightId"); $("#onesP2").addClass("highlightId")}
  if (check2 && aBoard.twoes === -1 && amountOfANumber > 2 && jbAKind === 2 ) {$("#twoes").addClass("highlightId"); $("#twoesP2").addClass("highlightId")}
  if (check2 && aBoard.threes === -1 && amountOfANumber > 2 && jbAKind === 3) {$("#threes").addClass("highlightId"); $("#threesP2").addClass("highlightId")}
  if (check2 && aBoard.fours === -1 && amountOfANumber > 2 && jbAKind === 4) {$("#fours").addClass("highlightId"); $("#foursP2").addClass("highlightId")}
  if (check2 && aBoard.fives === -1 && amountOfANumber > 2 && jbAKind === 5) {$("#fives").addClass("highlightId"); $("#fivesP2").addClass("highlightId")}
  if (check2 && aBoard.sixes === -1 && amountOfANumber > 2 && jbAKind === 6) {$("#sixes").addClass("highlightId"); $("#sixesP2").addClass("highlightId")}
  if (check2 && aBoard.threeKind === -1) {$("#threeKind").addClass("highlightId"); $("#threeKindP2").addClass("highlightId")}
  if (check1 && aBoard.fourKind === -1) {$("#fourKind").addClass("highlightId"); $("#fourKindP2").addClass("highlightId")}
  if (check4 && aBoard.fullHouse === -1) {$("#fullHouse").addClass("highlightId"); $("#fullHouseP2").addClass("highlightId")}
  if (check3 && aBoard.smStraight === -1) {$("#smStraight").addClass("highlightId"); $("#smStraightP2").addClass("highlightId")}
  if (check5 && aBoard.lgStraight === -1) {$("#lgStraight").addClass("highlightId"); $("#lgStraightP2").addClass("highlightId")}
  if (check0 && aBoard.yahtzee === -1) {$("#yahtzee").addClass("highlightId"); $("#yahtzeeP2").addClass("highlightId")}
}

function removeCss() {
   allFormIds.forEach(function(id){
     $("#" + id).removeClass("highlightId");
   });
 }


//Will check conditions and return a "recommed" string.  JB  8.30.16
function checkCondition (recommendation) {
  var resultRecommendation = "";
  switch(recommendation) {
    case 'yahtzee':
        resultRecommendation = "You have a Yatzee!!!";
        break;
    case 'fourKind':
        resultRecommendation = "You have four "+jbAKind+"s!";
        break;
    case 'fullHouse':
        resultRecommendation = "You have a Full House";
        break;
    case 'threeKind':
        resultRecommendation = "You have three "+jbAKind+"s!";
        break;
    case 'smallStraight':
        resultRecommendation = "You have a small straight!";
        break;
    case 'largeStraight':
        resultRecommendation = "You have a large straight!";
        break;
    default:
      resultRecommendation = "You could chance it...";
  }
  $(".bg-primary").text(resultRecommendation);
}

// -- End of jonathan edits section

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

  $("#rollButton").click(function(){
    timesRolledThisTurn = timesRolledThisTurn + 1
    $(".notesForTurn").text("you have clicked roll "+timesRolledThisTurn+" time(s).");
    rollForTurn();
      // this will delete highlight input boxes
    removeCss();
    aRoll.makeARecommendation();
  });

  //This submits the scoresheet updates board object then inserts all properties other than -1 into the board.  Jb & Note 8/31/16
  $(".scoreSheet").submit(function(event) {
    event.preventDefault();
    aBoard.boardInputToObject();  //This function finds changed inputs and sticcks in the object
    aBoard.insertScore();  //This goes through aBoard and puts all values in the page and removes the input
    timesRolledThisTurn = 0;
    $(".notesForTurn").text("It is now the next turn");
    $(".bg-primary").text("Good Luck!");
  });

  $("#TotalsButton").click(function(){
    aGrandTotalScore.endGameTotals();
  });

  $("#rulesButton").click(function(){
    $(".listOfRules").toggle();
  });

  $("#AddPlayer").click(function() {

  $(".p2").show();
  $("#AddPlayer").hide();

  });
  $("#rulesModal").modal('toggle')
    $(".modal-body").show();

  $("#aboutModal").modal('toggle')
    $(".modal-about-body").show();


  });
