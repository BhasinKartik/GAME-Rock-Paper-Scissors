/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
// const n=prompt('Best of:');
alert('This game will be a Best of 5');
let choices = ['✊', '🤚', '✌']
function getComputerChoice(choices) {
  let index = Math.floor(Math.random() * (choices.length));
  return choices[index];
}

// console.log(getComputerChoice(choices));
// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
let playerChoice='';
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  if (playerChoice == computerChoice) {
    return 0;
  }
  else if ((playerChoice == '✊' && computerChoice == '✌') || (playerChoice == '🤚' && computerChoice == '✊') || (playerChoice == '✌' && computerChoice == '🤚')) {
    return 1;
  }
  else return -1;


  // All situations where human draws, set `score` to 0


  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here


  // Otherwise human loses (aka set score to -1)


  // return score

}
// console.log(getResult(playerChoice,getComputerChoice(choices) ));
// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!

  if (score == -1) {
result.innerText = 'You Lose!'
  }
  else if(score==1){
    result.innerText = 'You Win!'
  }
  else result.innerText="It's a TIE!";
  return score;
}
// let r=getResult('🤚', '✌');
// console.log(showResult(r,'✌', '🤚'));
let p=document.getElementById('pc');
  // YS.innerText="";
  //  CS.innerText="";
  
let countWins={
  YS:0,
  CS:0
}
let Count=(getResult)=>{
  if(getResult==1){
    
    YS.innerText+="✅";
    CS.innerText+="❌"
  }
  if(getResult==-1){
    CS.innerText+="✅";
    YS.innerText+="❌";
  }
  if(YS.innerText.length==5){
    setTimeout(endGame,1500);
  }
  
}
// ** Calculate who won and show it on the screen **
function onClickRPS() {
// let clickChoice=document.querySelectorAll('.rpsButton');

}
    const ys=document.getElementById('YS');

onClickRPS();
// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
let audioTurn=new Audio("menuselect4-36147.mp3")
let x=document.getElementById('YS');
let removeScores=()=>{
  YS.innerText=" ";
  CS.innerText=" ";
  
}
let startAgain=()=>{
  result.innerText="START!"
}


function playGame(){
  // use querySelector to select all RPS Buttons

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  let gap=()=>{
    cc.innerText=computerChoice;
    let score=getResult(playerChoice,computerChoice);
Count(score);
    showResult(score, playerChoice, computerChoice);
  }
  let aftergap=()=>{
    cc.innerText=" ";
    pc.innerText=" ";
    result.innerText=" ";
    
  }
  
  let clickChoice=document.querySelectorAll('.rpsButton');
// console.log(clickChoice);
  clickChoice.forEach(choice=>{
    choice.onclick=()=>{
      console.log(choice.value);
      playerChoice=choice.value;
      pc.innerText=choice.value;
      audioTurn.play();
      computerChoice= getComputerChoice(choices);
     
      setTimeout(gap,500);
      setTimeout(aftergap,1350);
      
    let score=getResult(playerChoice,computerChoice);
     
     
      
      // x.innerText.length=0;
        
      
    }
  })



  // Add a click listener to the end game button that runs the endGame() function on click

}
let End=document.getElementById('endGameButton');
End.onclick=()=>{
  endGame();
  
}
// ** endGame function clears all the text on the DOM **
function endGame() {
pc.innerText=" ";
  cc.innerText=" ";
  
  result.innerText=" GAME-OVER !";
  setTimeout(startAgain,1500);
removeScores();
  

}
playGame();
