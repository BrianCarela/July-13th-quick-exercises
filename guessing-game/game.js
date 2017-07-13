
  var guesses = 0;

  askDifficulty = () => {
    var difficulty = prompt("Pick a difficulty level (1, 2, or 3)", "1");
    // console.log(difficulty);
    play(difficulty);
  };

  play = (difficulty) => {
    if(difficulty === "1"){
      var number = Math.round(Math.random()*10);
      guessIt(number, difficulty);
    } else if(difficulty === "2"){
      var number = Math.round(Math.random()*100);
      guessIt(number, difficulty);
    } else if(difficulty === "3"){
      var number = Math.round(Math.random()*1000);
      guessIt(number, difficulty);
    } else {
      askDifficulty();
    }
  };

  guessIt = (ranNum, diff) => {
    // uncomment the following line, and open up the console while playing to test it.
    // console.log(ranNum);
    var firstGuess = prompt(`I have my number (between 1 and ${Math.pow(10, diff)}). What is your guess?`);
    if(parseInt(firstGuess) === ranNum){
      alert("You got it in 1 guess! You're a mind reader!");
      playAgain();
    } else {
      guesses++;
      guessAgain(ranNum, firstGuess);
    }
  };

  guessAgain = (ranNum, prevGuess) => {
    guesses++
    if(parseInt(prevGuess) < ranNum){
      var anotherOne = prompt("Too low. Guess again", prevGuess);
      guessAgain(ranNum, anotherOne);
    } else if(parseInt(prevGuess) > ranNum){
      var anotherOne = prompt("Too high. Guess again", prevGuess);
      guessAgain(ranNum, anotherOne);
    } else if(parseInt(prevGuess) === ranNum){
      result(guesses);
    }
  };

  result = (score) => {
    if(score >= 2 && score <= 3){
      alert(`You got it in ${score} guesses! Most impressive.`);
      playAgain();
    } else if(score >= 4 && score <= 6){
      alert(`You got it in ${score} guesses! You can do better than that.`);
      playAgain();
    } else if(score >= 7){
      alert(`You got it in ${score} guesses! Better luck next time.`);
      playAgain();
    }
  };

  playAgain = () => {
    var playMore = prompt("Play again? (yes/no)");
    if(playMore === "yes" || playMore === "Yes"){
       askDifficulty();
    } else{
      alert("Thanks for Playing!");
    }
  }

  // begins the game
  askDifficulty();

// note: I first had this in JQuery because I thought I would be using actual HTML, but prompts are just fine. That's why everything is indented over
