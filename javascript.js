const words = ['Rock', 'Paper', 'Scissors'];

const getComputerChoice = () => {
  const word = words[Math.floor(Math.random() * words.length)];
  return word.toLowerCase(); // Convert computer choice to lowercase for consistency
}

const body = document.querySelector('body');

let playerSelection;
let playerScore = 0;
let computerScore = 0;

const scoreDisplay = document.createElement('p');
scoreDisplay.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
body.appendChild(scoreDisplay);

const btn1 = document.createElement('button');
btn1.textContent = 'Paper';

btn1.addEventListener('click', () => {
  playerSelection = 'paper';
  playRound(playerSelection, getComputerChoice());
});

const btn2 = document.createElement('button');
btn2.textContent = 'Scissors';

btn2.addEventListener('click', () => {
  playerSelection = 'scissors';
  playRound(playerSelection, getComputerChoice());
});

const btn3 = document.createElement('button');
btn3.textContent = 'Rock';

btn3.addEventListener('click', () => {
  playerSelection = 'rock';
  playRound(playerSelection, getComputerChoice());
});

body.appendChild(btn1);
body.appendChild(btn2);
body.appendChild(btn3);

function playRound(playerSelection, computerSelection) {
  let result;

  if (playerSelection === 'rock' && computerSelection === 'paper') {
    result = 'You Lose! Paper beats Rock';
    computerScore++;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    result = 'You Win! Rock beats Scissors';
    playerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    result = 'You Lose! Scissors beats Paper';
    computerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result = 'You Win! Paper beats Rock';
    playerScore++;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    result = 'You Lose! Rock beats Scissors';
    computerScore++;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    result = 'You Win! Scissors beats Paper';
    playerScore++;
  } else {
    result = 'It\'s a draw!';
  }

  scoreDisplay.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

  if (playerScore === 5) {
    alert('Player wins! Game over.');
    resetGame();
  } else if (computerScore === 5) {
    alert('Computer wins! Game over.');
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  scoreDisplay.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}


//console.log(`You chose ${playerSelection} and the Computer chose ${computerSelection},`,playRound(playerSelection,computerSelection));


/*const game = () => {

    let compterScore = 0
    let playerScore = 0

    

        
        const playerSelection = input.toLocaleLowerCase();
        const computerSelection = getComputerChoice();

        const round = playRound(playerSelection, computerSelection)
        
        const result = ()=>{
            if(round === 1){
                return 'you win'
            }else if(round === 0){
                return 'you lose'
            }else{
                return 'it is a draw'
            }
        } 

        console.log(` You chose ${playerSelection} and the computer chose ${computerSelection}, ${result()}`);

        if(round === 1){
            playerScore+= 1
    
        }else if(round === 0){
            compterScore += 1 
    
        }else{
            playerScore += 0
            compterScore += 0
        }
        

        
 

    const gameResult = ()=>{

        if(playerScore > compterScore){
            return 'You won the game'

        }else if(compterScore > playerScore){
            return 'You lost the game'
        }else{
            return 'Nobody wins, it is a draw'
        }

    }
     
   console.log(`Computer score: ${compterScore}, Your score ${playerScore}, Result: ${gameResult()}`)
  

}

game();*/

//juagar una partida y si la gano que me sume un punto.
//por cada partida que pierda que sume un punto al pc.
//el que gane cinco partidas es el ganador del juego

//conseguir que cuando gane un ronda que me de un punto



// for (let index = 1; index <= 5; index++) {
//     console.log(index);;
    
// }



  
//juagar una partida y si la gano que me sume un punto.
//por cada partida que pierda que sume un punto al pc.
//el que gane cinco partidas es el ganador del juego

//conseguir que cuando gane un ronda que me de un punto



// for (let index = 1; index <= 5; index++) {
//     console.log(index);;
    
// }



  