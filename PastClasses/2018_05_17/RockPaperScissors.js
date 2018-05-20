<!DOCTYPE html>
<html lang="en-us">

<head>
  <meta charset="UTF-8">
  <title>Rock Paper Scissors Part 2
  </title>
</head>

<body>

  <div id="game">

  </div>

  <script type="text/javascript">

    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["r", "p", "s"];
    var Tie = 0;
    var Wins = 0;
    var Loss = 0;

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // Alerts the key the user pressed (userGuess).
      console.log("User guess: " + userGuess);

      // Alerts the Computer's guess.
      console.log("Computer guess: " + computerGuess);

    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {  
      //alert(computerGuess);
      
      if ((userGuess === "r") && (computerGuess === "r")){
       Tie= Tie +1;
       console.log(Tie);
      } else if  ((userGuess === "r") && (computerGuess === "p")){
       Loss= Loss +1;
      } else if ((userGuess === "r") && (computerGuess === "s")){
       Wins= Wins + 1;
    }
      else if ((userGuess === "p") && (computerGuess === "r")){
       Wins= Wins + 1;
    }
      else if ((userGuess === "p") && (computerGuess === "p")){
       Tie= Tie +1;
    }
      else if ((userGuess === "p") && (computerGuess === "s")){
       Loss= Loss +1;
    }
    else if ((userGuess === "s") && (computerGuess === "r")){
       Loss= Loss +1;
    }
     else if ((userGuess === "s") && (computerGuess === "p")){
        Wins= Wins + 1;
    }
     else if ((userGuess === "s") && (computerGuess === "s")){
      Tie= Tie +1;
    }
    console.log(Tie + " " + Wins + " " + Loss);
    }
    
    };
  </script>

</body>

</html>
