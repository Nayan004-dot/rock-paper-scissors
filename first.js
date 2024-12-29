//userscore qnd compscore
let userScore = 0;
let compScore = 0;
let userWin;

//accessing the buttons 
let choices = document.querySelectorAll("button");
let msg = document.querySelector(".inner-msg");
let msgDiv = document.querySelector(".inner");
let scoreplayer = document.querySelector(".scorePlayer");
let compplayer = document.querySelector(".scoreComp");

const genCompChoices = () =>{
    const options = ["rock","paper","scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const draw = ()=>{
       msg.innerText = "Match was draw.Play again.";
       msgDiv.style.backgroundColor="grey";
       console.log("draw.")
}
const showWinner = (userWin) =>{
        if(userWin){
            console.log("you win");
            msg.innerText = "You Win!";
            msgDiv.style.backgroundColor="green";
            userScore = userScore+1;
            scoreplayer.innerText = userScore;
        }
        else{
            console.log("you lose");
             msg.innerText = "You lose.";
             msgDiv.style.backgroundColor="red";
             compScore = compScore+1;
            compplayer.innerText = compScore;
        }
}



const playGame = (choiceUser)=>{
    console.log("user choice = ",choiceUser);
    //comp choices
   const compChoice = genCompChoices();
   console.log("comp choice = ",compChoice);
   //condition for draw win of lose
   if(choiceUser === compChoice){
     draw();
     return;
   }
  
   else{
    userWin = true;
    if(choiceUser==="rock"){
        userWin = compChoice === "paper"? false : true;
    }
    else if(choiceUser === "paper"){
        userWin = compChoice === "scissors" ? false : true;
    }
    else{
        userWin = compChoice === "rock" ? false : true;
    }
   }
   showWinner(userWin);
}


 
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const choiceUser=choice.getAttribute("class");
        playGame(choiceUser);
    });
});
