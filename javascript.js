
const words = [ 'Rock', 'Paper' , 'Scissors']


const getComputerChoice = () => {
  const word = words[Math.floor(Math.random() * words.length) ]
  return word

}


//console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {

    //const lowerCase = playerSelection ? playerSelection.toLowerCase() : "";
    const lowerCase = playerSelection.toLowerCase();

      
    if(lowerCase === 'rock' && computerSelection === 'Paper'){
    //   console.log('You Lose! Paper beats Rock')
      return 'You Lose! Paper beats Rock'
    }else if(lowerCase === 'rock' && computerSelection === 'Scissors'){
    //   console.log('You Win! Rock beats Scissors')
        return 'You Win! Rock beats Scissors'
    }else{
    //   console.log('Try again it is a draw')
        return 'Try again it is a draw'
      
    }

    
}  

const playerSelection = "rocK";
const computerSelection = getComputerChoice();

console.log(playerSelection);

console.log(playRound(playerSelection,computerSelection));