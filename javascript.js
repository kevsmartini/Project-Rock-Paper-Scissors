
const words = [ 'Rock', 'Paper' , 'Scissors']

//  const input = prompt('Make a choice, Rock, Paper or Scissors')


const getComputerChoice = () => {
  const word = words[Math.floor(Math.random() * words.length) ]
  return word

}


//console.log(getComputerChoice())

/*********CREATE BUTTONS FOR EACH SELECTION *******/
const body = document.querySelector('body')

const btn1 = document.createElement('button')
btn1.textContent = 'Paper'

btn1.addEventListener('click',() => {
    console.log('Paper');
}) 

const btn2 = document.createElement('button')
btn2.textContent = 'Scissors'

btn2.addEventListener('click',() => {
    console.log('Scissors');
}) 

const btn3 = document.createElement('button')
btn3.textContent = 'Rock'

btn3.addEventListener('click',() => {
    console.log('Rock');
}) 


body.appendChild(btn1)
body.appendChild(btn2)
body.appendChild(btn3)





function playRound(playerSelection, computerSelection) {

    
    let result;
    
      
    if(playerSelection === 'rock' && computerSelection === 'Paper'){
    //   console.log('You Lose! Paper beats Rock')
      result = 'You Lose! Paper beats Rock';
      return 0
    }else if(playerSelection === 'rock' && computerSelection === 'Scissors'){
    //   console.log('You Win! Rock beats Scissors')
    result = 'You Win! Rock beats Scissors';
    return 1        
    }else if(playerSelection === 'rock' && computerSelection === 'Rock'){
    //   console.log('Try again it is a draw')
    result = 'Try again it is a draw'

    }else if(playerSelection === 'paper' && computerSelection === 'Scissors'){
        result = 'You Lose! Scissors beats Paper';
        return 0
    }else if(playerSelection === 'paper' && computerSelection === 'Rock'){
        result = 'You Win! Paper beats Rock';
        return 1
    }else if(playerSelection === 'paper' && computerSelection === 'Paper'){
        result = 'Try again it is a draw'


    }else if(playerSelection === 'scissors' && computerSelection === 'Rock'){
        result = 'You Lose! Rock beats Scissors';
        return 0
    }else if(playerSelection === 'scissors' && computerSelection === 'Paper'){
        result = 'You Win! Scissors beats Paper';
        return 1
    }else if(playerSelection === 'scissors' && computerSelection === 'Scissors'){
        result = 'Try again it is a draw'
    }else{
        result = 'Your option is not available, try again'
    }    

   

    return result


    

    

}  





//console.log(`You chose ${playerSelection} and the Computer chose ${computerSelection},`,playRound(playerSelection,computerSelection));


const game = () => {

    let compterScore = 0
    let playerScore = 0

    for (let index = 1; index <= 1 ; index++) {

        
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

        console.log(`Round ${index} You chose ${playerSelection} and the computer chose ${computerSelection}, ${result()}`);

        if(round === 1){
            playerScore+= 1
    
        }else if(round === 0){
            compterScore += 1 
    
        }else{
            playerScore += 0
            compterScore += 0
        }
        

        
    } /***************this cloes the for loop *************/

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

game();

//juagar una partida y si la gano que me sume un punto.
//por cada partida que pierda que sume un punto al pc.
//el que gane cinco partidas es el ganador del juego

//conseguir que cuando gane un ronda que me de un punto



// for (let index = 1; index <= 5; index++) {
//     console.log(index);;
    
// }



  