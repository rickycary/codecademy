// Step One: Create function 
const getUserChoice = (userInput) => {
    // Step Two: Introduce lower case function
      userInput = userInput.toLowerCase();
    // Step Three: Introduce user choices in game
      if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
        return userInput
      } else {
        console.log('Error')
      }
    }
    // Step Four: Test that function runs
    // console.log(getUserChoice('rock'))
    
    //Step Five: Create computer choice with math to = 0-3
    const getComputerChoice = () => {
      const randomNumber = (Math.floor(Math.random() * 3))
      switch(randomNumber){
        case 0: 
          return 'rock';
        case 1: 
          return 'paper';
        case 2: 
          return 'scissors';
        
      } 
    };
    // Step Six: Test function for getComputerChoice
    // console.log(getComputerChoice())
    
    // Step Seven: Write determine winner function and if the game ends in a tie.
    const determineWinner = (userChoice, computerChoice) =>{
      if (userChoice === computerChoice) {
        return 'This game is a tie';
    // Step Eight: Continue function with if/else statements on who wins.
      } if (userChoice === 'rock'){
        if (computerChoice === 'paper') {
          return 'Sorry, computer won';
        } else {
          return 'Congratulations, you won';
        }
      // Step Nine: Continue for paper 
      } if (userChoice === 'paper') {
        if (computerChoice === 'scissors'){
          return 'Sorry, computer won'; 
        } else {
          return 'Congratulations, you won';
        }
      // Step Ten: Continue for scissors
      } if (userChoice === 'scissors'){
        if (computerChoice === 'rock') {
          return 'Sorry, computer won';
        } else {
          return 'Congratulations, you won'
        }
      } if (userChoice === 'bomb') {
        return 'Congratulations you won'
      }
    }
    
    // Step Eleven: Test Function for winner
    // console.log(determineWinner('rock', 'scissors'))
    // console.log(determineWinner('rock', 'paper'))
    // console.log(determineWinner('rock', 'rock'))
    
    
    // Step Twelve: Write playgame function 
    const playGame = () =>{
      const userChoice = getUserChoice('rock');
      const computerChoice = getComputerChoice();
      console.log('You threw: ' + userChoice)
      console.log('The Computer threw: ' + computerChoice)
      console.log(determineWinner(userChoice, computerChoice))
    };
    
    // Step Thirteen: Play game function
    playGame();
    