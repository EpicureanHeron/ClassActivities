// Instructions

// Over the course of this activity you are going to be using constructors to create simplistic characters for use within a very basic Roleplaying Game (RPG)

// Each character created using your constructor should have the following properties...

// Name: The character’s name --> String x

// Profession: What the character does for a living --> String x 

// Gender: The character’s gender --> String x

// Age: The character’s age --> Integer  x 

// Strength: Abstraction for how strong the character is --> Integer x

// HitPoints (HP): Abstraction for how much health the character has --> Integer x 

// PrintStats: Function which prints all of a character’s properties to the screen

// Once you have created your constructor, create two new characters and print their properties to the screen

// Fool around and get comfortable with your constructor before moving onto the next parts of the activity
// Now that you feel comfortable with your constructor, it is time to start making this character creation system a little more reactive by adding in some more methods...

// IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.

// Attack: Function which takes in a second character’s hitpoints and subtracts this character’s strength from it.

// LevelUp: Function which increases this character’s Age by 1, their Strength by 5, and their HitPoints by 25.

// BONUS: After completing the previous sections and making sure they work, you now have everything you need to create a very basic RPG where two characters fight one another. Don’t worry if you cannot finish this part of the activity as, by completing the above sections you are well on your way to mastering constructors!


function Character(name, profession, gender, age, strength, hp) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;

    //IN LIEU OF THE CONSOLE.LOG Could BE REWRITTEN WITH JSON.STRINGIFY WHICH WILL SHOW THE KEY AND THE VALUE FOR EVERYTHING IN A JSON OBJECT
    //
    this.printStats = function() {
        console.log("------------------------------------------")
        console.log("Name: " + this.name)
        console.log("Profession: " + this.profession)
        console.log("Gender: " + this.gender)
        console.log("Age: " + this.age)
        console.log("Strength: " + this.strength)
        console.log("HP: " + this.hp)

        }

// IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.
    this.isAlive = function(){
        if (this.hp > 0){
            console.log("------------------------------------------")
            console.log(this.name + ' is alive!')
            
        } 
        else {
            console.log("------------------------------------------")
            console.log(this.name + ' is DEAD!')
            
        }
    }
// Attack: Function which takes in a second character’s hitpoints and subtracts this character’s strength from it.

    this.attack = function(enemy) {
        enemy.hp =  enemy.hp - this.strength
        console.log("------------------------------------------")
        console.log(this.name + " attacked  " + enemy.name + " (they are the enemy) and now the enemy has " + enemy.hp + " hp")
      
        
    }
// LevelUp: Function which increases this character’s Age by 1, their Strength by 5, and their HitPoints by 25.
    this.levelup = function() {
        this.age = this.age + 1;
        this.strength = this.strength + 5
        this.hp = this.hp + 25

        console.log("------------------------------------------")
        console.log(this.name + " has leveled up!!!")

    }


    }

    var char1 = new Character("MonsterBoy", "Blacksmith", "Male", 16, 5, 100)

    var char2 = new Character("Ellen", "Barmaid", "female", 35, 2, 200)

    char1.printStats()

    char2.printStats()

    char2.attack(char1)

    char1.printStats()

    char1.attack(char2)

    char2.printStats()

    char1.levelup()

    char1.printStats()

    char1.isAlive()

    char2.levelup()

    char2.printStats()

    char2.isAlive()