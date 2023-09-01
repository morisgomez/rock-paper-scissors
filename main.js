//Function 1: 
//GET USER'S INPUT & VALIDATES INPUT FOR PROPER SYNTAX.
const getUserInput = userInput => //arrow function w/ 1 parameter.
{
  userInput = userInput.toLowerCase(); //makes all characters lowercase.
  if (userInput === "rock")
  {
    return userInput;
  }
  else if (userInput === "paper")
  {
    return userInput;
  }
  else if (userInput === "scissors")
  {
    return userInput;
  }
  else
  {
    console.log("ERROR: Enter rock, paper or scissors.");
  }
}; //closes getUserInput arrow function.

//Function 2:
//GET COMPUTER'S CHOICE.
const getComputerChoice = () => //arrow function w/ no parameters.
{
  var num = Math.floor(Math.random() * 3);//random # b/w 0 & 2
  if (num === 0)
  {
    return "rock";
  }
  else if (num === 1)
  {
    return "paper";
  }
  else if (num === 2)
  {
    return "scissors";
  }
  else
  {
    console.log("ERROR");
  }
}; //closes getComputerChoice arrow function.

//Function 3:
//COMPARE CHOICES AND DETERMINE WINNER.
const determineWinner = (userInput, computerChoice) => //arrow function w/ 2 parameters.
{
  //draw/tie logic:
  if (userInput === computerChoice)
  {
    return "the game is a tie!";
  }
  //logic for user choses "rock":
  if (userInput === "rock")
  {
    if (computerChoice === "paper")
    {
      return "you lose!";
    }
    else if (computerChoice === "scissors")
    {
      return "you win!";
    }

  }
  //logic for user choses "paper":
  if (userInput === "paper")
  {
    if (computerChoice === "rock")
    {
      return "you win!";
    }
    else if (computerChoice === "scissors")
    {
      return "you lose!";
    }
  }
  //logic for user choses "scissors":
  if (userInput === "scissors")
  {
    if (computerChoice === "rock")
    {
      return "you lose!";
    }
    else if (computerChoice === "paper")
    {
      return "you win!";
    }
  }
}; //closes determineWinner arrow function.

//Function 4:
//PLAY GAME.
const playGame = () => //arrow function w/ no parameters.
{
  var userChoice = getUserInput("rock"); //use can alter input here.
  var computerChoice = getComputerChoice();
  console.log("your choice is: " + userChoice);
  console.log("the computer's choice is: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  //run userChoice and computerChoice as arguments in 3rd function.
}; //closes playGame arrow function.

playGame(); //call function to play.
