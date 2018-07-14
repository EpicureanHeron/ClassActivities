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
var positions = ["forward", "back", "striker", "goalkeeper", "goalie"]



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
                name: "position",
                message: "Player's position: ",
                validate: function (value) {

                    if (positions.includes(value.toLowerCase())) {
                        return true
                    }
                    else {
                        return false
                    }
                }
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
var playBoo = false;

function playgame() {
    if (count < 5) {


        var offenseNum = Math.floor(Math.random() * Math.floor(20))
        var defenseNum = Math.floor(Math.random() * Math.floor(20))
        var teamOffense = 0;
        var teamDefense = 0;
        var currentStarters = [];
        //var currentStarters = ["no"];
        //var currentSubs = ["no"];
        var currentSubs = [];

        for (i = 0; i < starters.length; i++) {
            teamOffense += starters[i].offense
            teamDefense += starters[i].defense
            currentStarters.push(starters[i].name)
        }
        for (i = 0; i < subs.length; i++) {

            currentSubs.push(subs[i].name)
        }

        if (offenseNum > teamDefense) {
            teamScore--
            console.log("Current score: " +teamScore)
        }

        if (defenseNum < teamOffense) {
            teamScore++
            console.log( "Current score: "+ teamScore)
        }

        inquirer.prompt([
            {
                type: "list",
                message: "Add a sub?",
                choices: currentSubs,
                name: "currentSubs"


            }

           
        ]).then(function (answers) {
            if(answers.currentSubs !== "no"){
                var playerToBeSubbedIn = subs.indexOf(answers.currentSubs)
                inquirer.prompt([
                    {
                        type: "list",
                        message: "who to use?",
                        choices: currentStarters,
                        name: "currentStarters",

                        
                    }
                ]).then(function (secondAnswers) {
                    console.log("HEY THIS IS BEFORE THE SPLICE SUBS" + subs)
                    console.log("HEY THIS IS BEFORE THE SPLICE STAT]ERS" + starters)

                    console.log("PLAYER TO REMOVE INDEX: " + playerToBeSubbedIn)
                    console.log("PLAYER TO REMOVE INDEX: " + subs[playerToBeSubbedIn])

                    console.log("sub INDEX: " + playerToRemove)
                    console.log("sub INDEX: " + starters[playerToRemove])

                    var playerToRemove = starters.indexOf(secondAnswers.currentStarters)
                    var  tempSubs = subs.splice(playerToBeSubbedIn, 0, starters[playerToRemove] )
                    var tempStarters = starters.splice(playerToRemove, 0, subs[playerToBeSubbedIn])
                    subs = tempSubs
                    starters = tempStarters
                    
                    console.log("HEY THIS IS after THE SPLICE SUBS" + subs)
                    console.log("HEY THIS IS after THE SPLICE STAT]ERS" + starters)

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
                    count++
                    playgame()
                })

            }
            
            
            
        })
        //BELOW IS POST COUNT IF STATEMENT
}


}

