
const words = [ 'Rock', 'Paper' , 'Scissors']


const getComputerChoice = () => {
  const word = words[Math.floor(Math.random() * words.length) ]
  return word

}


console.log(getComputerChoice())