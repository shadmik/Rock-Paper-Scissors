function computerPlay (){
    let a =["rock", "paper", "scissors"];
    return a[Math.floor(Math.random() * 3)]

}
    let hcount=0;
    let ccount=0;
let playerSelection, computerSelection;
function playRound(playerSelection, computerSelection) {
    playerSelection=prompt("What's your choice?").toLowerCase();
    computerSelection=computerPlay();
    if(playerSelection===computerSelection){
        return "draw!";
    }else if(playerSelection=="rock" && computerSelection=="scissors"){
        hcount++;
        return "You won! Rock smashes scissors!";
    }else if(playerSelection=="rock" && computerSelection=="paper"){
        ccount++;
        return "You lose! Paper grabs rock"
    }else if(playerSelection=="scissors" && computerSelection=="rock"){
        ccount++;
        return "You lose! Rock smashes scissors!"
    }else if(playerSelection=="scissors" && computerSelection=="paper"){
        hcount++;
        return "You won! Scissors cuts paper!"
    }else if(playerSelection=="paper" && computerSelection=="rock"){
        hcount++;
        return "You won! Paper grabs rock!"
    }else if(playerSelection=="paper" && computerSelection=="scissors"){
        ccount++;
        return "You lose! Scissors cuts paper!"
    }else{
        return "Something went horribly wrong."
    }
  }
  function game(){
      console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
    if(hcount==ccount){
        console.log("Player: "+ hcount+" "+ "Computer: "+ ccount)
        console.log("Draw!")
    }else if (hcount>ccount){
        console.log("Player: "+ hcount+" "+ "Computer: "+ ccount)
        console.log("Game Over! You've Won!")
    }else{
        console.log("Player: "+ hcount+" "+ "Computer: "+ ccount)
        console.log("Game Over! You've lost")
    }



  }
  game();