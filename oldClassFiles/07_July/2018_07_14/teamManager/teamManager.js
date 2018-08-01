// Instructions
var inquirer = require("inquirer");
// Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.

// Start out by creating a constructor function called “Player” with the following properties and methods...

function Player(name, position, offense, defense) {
    // name: Property which contains the player’s name
    this.name = name;
    // position: Property which holds the player’s position
    this.position = position;
    // offense: Property which is a value between 1 and 10 to show how good this player is on offense
    this.offense = offense;
    // defense: Property which is a value between 1 and 10 to show how good this player is on defense
    this.defense = defense;
    // goodGame: Method which increases either the player’s offense or defense property based upon a coinflip.
    this.goodGame = function () {
        var coinflip = Math.floor(Math.random() * Math.floor(2))
        if (coinflip === 1) {
            this.offense++
        }
        else {
            this.defense++
        }

    }
    // badGame: Method which decreases either the player’s offense or defense property based upon a coinflip.
    this.badGame = function () {
        var coinflip = Math.floor(Math.random() * Math.floor(2))
        if (coinflip === 1) {
            this.offense--
        }
        else {
            this.defense--
        }

    }
    // printStats: Method which prints all of the player’s properties to the screen
    this.printStats = function () {
        console.log(JSON.stringify(this))
    }
}



var starters = [];
var subs = [];
var team = [];
var positions = ["forward", "back", "striker", "goalkeeper"]




// Now create a program which allows the user to create 3 unique players; 2 starters and a sub. It should take as user input the name, position, offense, and defense of each player.

var createPlayer = function () {
    // if the length of the team array is 5 or higher, no more questions will be asked
    if (starters.length + subs.length < 5) {
        console.log("\nNEW PLAYER!\n");
        //inArray(where, stateArr)
        inquirer.prompt([
            {
                name: "name",
                message: "Player's Name: "
            }, {
                type: "list",
                name: "position",
                message: "Player's position: ",
                choices: positions
            }, {
                name: "offense",
                message: "Player's Offensive Ability: ",
                //valide is set to javascript object which is a function, it looks at the value that is passed
                validate: function (value) {

                    if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
                        return true;
                    }
                    return false;
                }
            }, {
                name: "defense",
                message: "Player's Defensive Ability: ",
                validate: function (value) {
                    if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
                        return true;
                    }
                    return false;
                }
            }
        ]).then(function (answers) {
            // runs the constructor and places the new player object into the variable player.
            // turns the offense and defense variables into integers as well with parseInt
            var player = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
            // adds a player to the starters array if there are less than five player objects in it.
            // otherwise adds the newest player object to the subs array
            if (starters.length < 3) {
                starters.push(player);
                team.push(player);
                console.log(player.name + " added to the starters");
            }
            else {
                subs.push(player);
                team.push(player);
                console.log(player.name + " added to the subs");
            }
            // runs the createPlayer function once more
            createPlayer();
        });
    }
    else {
        // loops through the team array and calls printStats() for each object it contains

        for (var i = 0; i < team.length; i++) {
            team[i].printStats();
        }
        playgame()
    }
};

// calls the function createPlayer() to start the code

//HEY DUMMY ADD BACK IN

createPlayer();


// Once all of the players have been created, print their stats.

// HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.


// Instructions

// Once your code is functioning properly, move on to create a function called “playGame” which will be run after all of the players 
//have been created and will do the following:

// Run 5 times. Each time the function runs:
// Two random numbers between 1 and 20 are rolled and compared against the starters’ offensive and defensive stats
// If the first number is lower than the sum of the team’s offensive stat, add one point to the team’s score.
// If the second number is higher than the sum of the team’s defensive stat, remove one point from the team’s score.
// After the score has been changed, prompt the user to allow them to substitute a player from within the starters array with the player from within the subs array.
// After the game has finished (been run 5 times):
// If the score is positive, run goodGame for all of the players currently within the starters array.
// If the score is negative, run badGame for all of the players currently within the starters array.
// If the score is equal to zero, do nothing with the starters.
// Give the user a message about if they won, and the status of their starters.
// After printing the results, ask the user if they would like to play again.
// Run playGame from the start once more if they do.
// End the program if they don’t.
// HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, 
//look up Math.random on Google and you should find some resources to help.

var teamScore = 0;
var count = 0;


function playgame() {
    if (count < 5) {

        //sets randome numberes to offense and defense
        var offenseNum = Math.floor(Math.random() * Math.floor(20))
        var defenseNum = Math.floor(Math.random() * Math.floor(20))
        var teamOffense = 0;
        var teamDefense = 0;
        // var currentStarters = [];
        //var currentStarters = ["no"];
        //var currentSubs = ["no"];
        // var currentSubs = [];

        //sets offense and defesnse sum for team current team starters
        for (i = 0; i < starters.length; i++) {
            teamOffense += starters[i].offense
            teamDefense += starters[i].defense
           
        }

        
        if (offenseNum < teamOffense) {
            teamScore++
           
        }

        if (defenseNum > teamDefense) {
            teamScore--
            
        }

        console.log("Current score: " +teamScore)

        //PROMPT TO SEE IF A SUB IS NEEDED
        inquirer.prompt([
            {
                type:"confirm",
                name: "confirmSub",
                message:"Do you need to sub someone out?"
            }

           
        ]).then(function (answers) {
            //IF SUB IS NEEDED THIS WORKS, OTHERWISE GO TO AROUND LINE 
            if(answers.confirmSub === true){
                //PROMPT TO SEE WHO TO BE SUBBED OUT AND IN 
                inquirer.prompt([

                    {
                        type: "list",
                        message: "Who to remove?",
                        choices: starters,
                        name: "startersList", 
                    },
                    {
                        type: "list",
                        message: "Who to be subbed in??",
                        choices: subs,
                        name: "subList"
                    },
                
                ]).then(function (subSpecifics) {
                    //since the value being passed by the answer is only the name, per inquirier documentation, we need to find the actual OBJECT
                    //this grabs the index number of a matching name value of one of the objects
                    for(i = 0; i < subs.length; i ++){
                        if(subSpecifics.subList === subs[i].name){
                            indexOfSub = i
                        } 
                    }

                    for(i = 0; i < starters.length; i ++){
                        if(subSpecifics.startersList === starters[i].name){
                            indexOfStarter = i
                        } 
                    }
               
                    //creates a temporary array to manipulate 
                    var tempSub = subs
                    var tempStarters = starters
                    //grabs the sub and starter object to be spliced and pushed
                    var trueSub = subs[indexOfSub]
                    var trueStarter = starters[indexOfStarter]
                    //splices the truesub and pushes the true starter to the temporary array
                    tempSub.splice(indexOfSub, 1)
                    tempSub.push(trueStarter)
                    //splices the truestarter and pushes the truesub to the teomprary array
                    tempStarters.splice(indexOfStarter, 1)
                    tempStarters.push(trueSub)
                    //sets the starter and subs to the manipulated array
                    subs = tempSub
                    starters = tempStarters
                    
                    endGameCheck()
                })

            }
            //IF NO SUB IS NEEDED PROCEED TO THE THIS STEP
            else{
                endGameCheck()
            }
  
        })
        
    }
    //IF COUNT = 5 PROCEED DTO THIS STEP 
    else{
        inquirer.prompt([
            {
                type:"confirm",
                name: "playAgain",
                message:"Play again?"
            }

        
        ]).then(function (answers) {
            if(answers.playAgain === true){
                count = 0
                teamScore = 0
                playgame()
            }
        })

    }
        //THIS IS THE FUNCTION TO CHECK IF THE GAME WAS WON, PROBABLY COULD LIVE SOMEWHERE ELSE, BUT OH WELL.
        function endGameCheck(){
            if(teamScore > 0){
            console.log("You won!")
            for(i=0; i < starters.length; i ++){
                starters[i].goodGame()
                starters[i].printStats()
            
                }
            }
            else if(teamScore < 0){
                console.log("You lost! ")
                for(i=0; i < starters.length; i ++){
                    starters[i].badGame()
                    starters[i].printStats()
                }
            }
            else{
                starters[i].printStats()
            }
            count++
            playgame()
    }

}

