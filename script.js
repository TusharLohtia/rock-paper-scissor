let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score')
const genCompChoice =()=>{
    const options =['rock','paper','scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame =()=>{

    console.log('game was draw');
    msg.innerText="Game Draw! Play again";
    msg.style.backgroundColor='yellow';
}


const showWinner =(useWin, userChoice, compChoice)=>{
    if(useWin){
        console.log('you win');
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor='green';
    }
    else{
        console.log('you lose');
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lost ! ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor='red';

    }
}


const playGame = (userChoice)=>{
console.log('user choice=',userChoice);

const compChoice= genCompChoice();
console.log("comp choice=",compChoice);

if(userChoice === compChoice){
    drawGame();
}
else{
    let useWin = true;
    if(userChoice === 'rock'){

    useWin= compChoice === 'paper'?false:true;

} else if (userChoice ==='paper'){
    useWin= compChoice === 'scissors'?false:true;
}

else {

    useWin= compChoice === 'rock'? false:true;

}
  showWinner(useWin,userChoice,compChoice);
}



}


choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        console.log("choice was clicked", userChoice);
        playGame(userChoice);

    })
})