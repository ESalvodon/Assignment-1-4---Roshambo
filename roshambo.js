var totalScore = 0;
var playerBout = 0;
var computerEngagement = 0;
var playerEngagement = 0;
var userchoice = 0;
var computerChoice = 0;

function log(message) {
  if(matchCount < 2){
  document.write('<p>' + message + '</p>')
};

function setupGame(){

var name = prompt("what is your name?");
       if (name === "" || name === " "){
  console.log("Error");
}
        else{
   console.log("Welcome " + name)
 }
 };
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
     if (computerChoice < 0.34) {
	computerChoice = "rock";
}    else if(computerChoice <= 0.67) {
	computerChoice = "paper";
}        else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1,choice2) {
    if(choice1 === choice2) {
      return "The result is a tie!";
    } else if(choice1 === "rock") {
        if(choice2 === "scissors") {
          return "rock wins";
        } else {
          return "paper wins";
        }
    } else if(choice1 === "paper") {
        if(choice2 === "rock"){
          return "paper wins";
        } else {
          return "scissors wins";
        }
    } else if(choice1 === "scissors") {
        if(choice2 === "paper"){
          return "scissors wins";
        } else {
          return "rock wins";
        }
    }
  };
compare(userChoice,computerChoice);
function updateScore(player){
  if(player === 'user'){
    totalScore.userEngagementWins[0] += 1;
  } else {
    totalScore.computerEngagementWins[0] += 1;
  }
};
   function bout() {
    while(totalScore.userEngagementWins[0] < 2 && totalScore.computerEngagementWins[0] <
      2 && userChoice != 'exit') {
    engagement(userThrow(), advancedComputerThrow());
  }
  if(totalScore.userEngagementWins[0] === 2){
    totalScore.userBoutWins[0] += 1;
  } else if(totalScore.computerEngagementWins[0] === 2){
    totalScore.computerBoutWins[0] += 1;
  }
  totalScore.userEngagementWins[0] = 0;
  totalScore.computerEngagementWins[0] = 0;
  boutCount += 1;
};
function playAgain() {
  var Replay = prompt('Play again? [y] Yes or [n] No.');
  Replay = Replay.charAt(0);
  Replay = Replay.toUpperCase();
  switch (Replay) {
    case 'Y':
      Replay = 'yes';
      break;
    case 'N':
      Replay = 'no';
      break;
    default:
      Replay = 'no';
      break;
  }
  if(Replay === 'yes') {
  setupGame();
  } else {
    boldLog('Press CMD + R to refresh');
  }
};

